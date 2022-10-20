import { createContext, useContext } from "react";

import { IProviderProps } from "../../interfaces/User";

// interface IReservationContext {}

const ReservationContext = createContext({} /*as IReservationContext*/);

export const ReservationContextProvider = ({ children }: IProviderProps) => {
  return (
    <ReservationContext.Provider value={{}}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
