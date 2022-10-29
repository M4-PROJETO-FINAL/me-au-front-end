import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import dayjs, { Dayjs } from "dayjs";

import { IReservationServicesAmounts } from "../../components/CartModal/AddicionalServices";
import {
  IPet,
  IPetRoom,
  IReservationRequest,
  IServiceAmount,
  RoomType,
} from "../../interfaces/Reservations";
import { IProviderProps } from "../../interfaces/User";
import { useUserContext } from "../UserContext";

interface IReservationContext {
  selectedRoomType: RoomType | "";
  setSelectedRoomType: React.Dispatch<React.SetStateAction<"" | RoomType>>;
  selectPet: (data: IPet) => void;
  selectedPets?: IPet[];
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
}

const ReservationContext = createContext({} as IReservationContext);

export const ReservationContextProvider = ({ children }: IProviderProps) => {
  const [selectedRoomType, setSelectedRoomType] = useState<RoomType | "">("");
  const [checkinDate, setCheckinDate] = useState<Dayjs | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null);
  const [petsAmount, setPetsAmount] = useState(0);
  const [services, setServices] = useState({} as IReservationServicesAmounts);
  const [selectedPets, setSelectedPets] = useState([] as IPet[]);
  const urlPath = useLocation().pathname;
  const { isOpenCartModal } = useUserContext();

  useEffect(() => {
    setSelectedPets([]);
  }, [isOpenCartModal]);

  const generateRequestObject = (): IReservationRequest => {
    const servicesArray: IServiceAmount[] = Object.keys(services)
      .map((serviceName) => {
        return {
          service_id: serviceName,
          amount: services[serviceName],
        } as IServiceAmount;
      })
      .filter((obj) => !!obj.amount);

    const petsArray: IPetRoom[] = selectedPets.map((pet) => {
      return {
        pet_id: pet.id,
        room_type_id: selectedRoomType,
      };
    });

    return {
      checkin: dayjs(checkinDate).format("YYYY-MM-DD"),
      checkout: dayjs(checkoutDate).format("YYYY-MM-DD"),
      pets_rooms: petsArray,
      services: servicesArray,
    };
  };

  const selectPet = (petData: IPet) => {
    console.log(petData);
    if (
      petData.type === "cat" &&
      (urlPath.includes("dog") || urlPath.includes("shared"))
    ) {
      toast.error("Não é possível selecionar um gato nesse quarto");
      return;
    }
    if (petData.type === "dog" && urlPath.includes("cat")) {
      toast.error("Não é possível selecionar um cachorro nesse quarto");
      return;
    }
    if (selectedPets.map((pet) => pet.id).includes(petData.id)) {
      setSelectedPets(selectedPets.filter((pet) => pet.id !== petData.id));
      return;
    }
    if (selectedPets.length === petsAmount) {
      toast.error(`Você já selecionou ${petsAmount} pets`);
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
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
