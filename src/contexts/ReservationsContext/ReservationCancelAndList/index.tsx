import { createContext, useContext, useEffect, useState } from "react";

import {
  IReservationComplete,
  IRoomTypes,
} from "../../../interfaces/Reservations";
import { api } from "../../../services";

interface IReservationCancelContext {
  reservations: IReservationComplete[];
  cancelReservation: (id: string) => void;
  listReservations: () => void;
  allRoomTypes: IRoomTypes[];
}

interface IProviderProps {
  children: React.ReactNode;
}

const ReservationCancelContext = createContext({} as IReservationCancelContext);

export const ReservationCancelContextProvider = ({
  children,
}: IProviderProps) => {
  const [reservations, setReservations] = useState([]);
  const [allRoomTypes, setAllRoomTypes] = useState([]);

  const listReservations = async () => {
    await api
      .get("/reservations")
      .then((res) => setReservations(res.data))
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

  const cancelReservation = (id: string) => {
    api.delete(`/reservations/${id}`).then();
  };

  return (
    <ReservationCancelContext.Provider
      value={{
        reservations,
        cancelReservation,
        listReservations,
        allRoomTypes,
      }}
    >
      {children}
    </ReservationCancelContext.Provider>
  );
};

export const useReservationCancelContext = () =>
  useContext(ReservationCancelContext);
