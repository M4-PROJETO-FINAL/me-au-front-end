import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  IReservationComplete,
  IRoomTypes,
} from "../../../interfaces/Reservations";
import { api } from "../../../services";
import { usePetContext } from "../../PetsContext";

interface IReservationCancelContext {
  reservations: IReservationComplete[];
  cancelReservation: () => void;
  listReservations: () => void;
  allRoomTypes: IRoomTypes[];
  setSelectedReservationId: React.Dispatch<React.SetStateAction<string>>;
}

interface IProviderProps {
  children: React.ReactNode;
}

const ReservationCancelContext = createContext({} as IReservationCancelContext);

export const ReservationCancelContextProvider = ({
  children,
}: IProviderProps) => {
  const [reservations, setReservations] = useState<IReservationComplete[]>([]);
  const [allRoomTypes, setAllRoomTypes] = useState([]);
  const [selectedReservationId, setSelectedReservationId] = useState("");
  const { handleCloseDeleteModal } = usePetContext();

  const listReservations = async () => {
    await api
      .get("/reservations")
      .then((res) => {
        setReservations(res.data.reverse());
        console.log(reservations);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listReservations();
  }, []);

  const listRoomTypes = async () => {
    await api
      .get("/rooms/types")
      .then((res) => setAllRoomTypes(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listRoomTypes();
  }, []);

  const cancelReservation = () => {
    api
      .delete(`/reservations/${selectedReservationId}`)
      .then(() => {
        listReservations();
      })
      .catch((err) => {
        toast.error("Algo deu errado ao tentar cancelar a reserva");
        console.log(err);
      });
    handleCloseDeleteModal();
  };

  return (
    <ReservationCancelContext.Provider
      value={{
        reservations,
        cancelReservation,
        listReservations,
        allRoomTypes,
        setSelectedReservationId,
      }}
    >
      {children}
    </ReservationCancelContext.Provider>
  );
};

export const useReservationCancelContext = () =>
  useContext(ReservationCancelContext);
