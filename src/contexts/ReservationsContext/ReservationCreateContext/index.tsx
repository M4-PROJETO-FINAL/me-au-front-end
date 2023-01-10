import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import dayjs, { Dayjs } from "dayjs";

import { IReservationServicesAmounts } from "../../../components/CartModal/AddicionalServices";
import {
  IPet,
  IPetRoom,
  IReservationRequest,
  IRoomTypeResponse,
  IServiceAmount,
  IServiceResponse,
  RoomType,
} from "../../../interfaces/Reservations";
import { IProviderProps } from "../../../interfaces/User";
import { api } from "../../../services";
import { useUserContext } from "../../UserContext";

interface IReservationContext {
  selectedRoomType: RoomType | "";
  setSelectedRoomType: React.Dispatch<React.SetStateAction<"" | RoomType>>;
  selectPet: (data: IPet) => void;
  selectedPets: IPet[];
  checkinDate: dayjs.Dayjs | null;
  checkoutDate: dayjs.Dayjs | null;
  setCheckinDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
  setCheckoutDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
  petsAmount: number;
  setPetsAmount: React.Dispatch<React.SetStateAction<number>>;
  services: IReservationServicesAmounts;
  setServices: React.Dispatch<
    React.SetStateAction<IReservationServicesAmounts>
  >;
  generateRequestObject: () => IReservationRequest;
  allServices: IServiceResponse[];
}

const ReservationContext = createContext({} as IReservationContext);

export const serviceNamesRelations = {
  vaccine: "Vacina",
  bath: "Banho",
  swimming: "Natação",
  grooming: "Tosa",
  massage: "Massagem",
  premiumFood: "Ração",
};

export const ReservationContextProvider = ({ children }: IProviderProps) => {
  const { t } = useTranslation();
  const [selectedRoomType, setSelectedRoomType] = useState<RoomType | "">("");
  const [checkinDate, setCheckinDate] = useState<Dayjs | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null);
  const [petsAmount, setPetsAmount] = useState(0);
  const [services, setServices] = useState({} as IReservationServicesAmounts);
  const [selectedPets, setSelectedPets] = useState([] as IPet[]);
  const [allServices, setAllServices] = useState<IServiceResponse[]>([]);
  const [allRoomTypes, setAllRoomTypes] = useState<IRoomTypeResponse[]>([]);
  const urlPath = useLocation().pathname;
  const { isOpenCartModal } = useUserContext();
  const { tag } = useParams();

  useEffect(() => {
    // ao abrir/fechar modal, reseta lista de pets selecionados e busca lista de serviços e tipos de quartos
    setSelectedPets([]);
    api
      .get<IRoomTypeResponse[]>("/roomstypes")
      .then((res) => setAllRoomTypes(res.data))
      .catch((err) => {
        console.log("error fetching rooms types:");
        console.log(err);
      });

    api
      .get<IServiceResponse[]>("/services")
      .then((res) => setAllServices(res.data))
      .catch((err) => {
        console.log("error fetching services:");
        console.log(err);
      });
  }, [isOpenCartModal]);

  useEffect(() => {
    if (tag) setSelectedRoomType(tag as RoomType);
  }, []);

  const generateRequestObject = (): IReservationRequest => {
    const servicesArray: IServiceAmount[] = Object.keys(services)
      .map((serviceTag) => {
        const actualService = allServices.find(
          (service) => service.name === serviceNamesRelations[serviceTag],
        );
        let amnt = services[serviceTag];
        if (serviceTag === "vaccine" && services[serviceTag]) {
          amnt = 1;
        }
        return {
          service_id: actualService?.id,
          amount: amnt,
        } as IServiceAmount;
      })
      .filter((obj) => !!obj.amount);

    let selectedRoomTypeId = "";
    const sharedRoomId = allRoomTypes.find(
      (roomType) => roomType.title === "Quarto Compartilhado",
    )?.id;
    const dogRoomId = allRoomTypes.find(
      (roomType) => roomType.title === "Quarto Privativo (cães)",
    )?.id;
    const catRoomId = allRoomTypes.find(
      (roomType) => roomType.title === "Quarto Privativo (gatos)",
    )?.id;
    if (selectedRoomType === "shared" && sharedRoomId) {
      selectedRoomTypeId = sharedRoomId;
    } else if (selectedRoomType === "dogs" && dogRoomId) {
      selectedRoomTypeId = dogRoomId;
    } else if (selectedRoomType === "cats" && catRoomId) {
      selectedRoomTypeId = catRoomId;
    }
    const petsArray: IPetRoom[] = selectedPets.map((pet) => {
      return {
        pet_id: pet.id,
        room_type_id: selectedRoomTypeId,
      };
    });

    return {
      checkin: dayjs(checkinDate).format("YYYY-MM-DD"),
      checkout: dayjs(checkoutDate).format("YYYY-MM-DD"),
      pet_rooms: petsArray,
      services: servicesArray,
    };
  };

  const selectPet = (petData: IPet) => {
    if (
      petData.type === "cat" &&
      (urlPath.includes("dog") || urlPath.includes("shared"))
    ) {
      toast.error(`${t("Não é possível selecionar um gato nesse quarto")}`);
      return;
    }
    if (petData.type === "dog" && urlPath.includes("cat")) {
      toast.error(`${t("Não é possível selecionar um cachorro nesse quarto")}`);
      return;
    }
    if (selectedPets.map((pet) => pet.id).includes(petData.id)) {
      setSelectedPets(selectedPets.filter((pet) => pet.id !== petData.id));
      return;
    }
    if (selectedPets.length === petsAmount) {
      toast.error(`${t("Você já selecionou")} ${petsAmount} pets`);
      return;
    }
    setSelectedPets([...selectedPets, petData]);
  };

  return (
    <ReservationContext.Provider
      value={{
        selectedRoomType,
        setSelectedRoomType,
        selectPet,
        selectedPets,
        setCheckinDate,
        setCheckoutDate,
        checkinDate,
        checkoutDate,
        petsAmount,
        setPetsAmount,
        services,
        setServices,
        generateRequestObject,
        allServices,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
