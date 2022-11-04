import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IReservation } from "../../../interfaces/Reservations";
import { api } from "../../../services";

interface IReservationCancelContext {
  reservations: IReservation[];
  cancelReservation: (id: string) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

const ReservationCancelContext = createContext({} as IReservationCancelContext);

export const ReservationCancelContextProvider = ({
  children,
}: IProviderProps) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const listReservations = async () => {
      const { data } = await api.get("/reservations");
      setReservations(data);
    };
  }, []);

  const cancelReservation = (id: string) => {
    api.delete(`/reservations/${id}`).then();
  };

  return (
    <ReservationCancelContext.Provider
      value={{ reservations, cancelReservation }}
    >
      {children}
    </ReservationCancelContext.Provider>
  );
};

export const useReservationCancelContext = () =>
  useContext(ReservationCancelContext);
