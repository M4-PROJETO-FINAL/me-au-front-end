import { createContext } from "react";

import { IProviderProps } from "../../interfaces/User";

// interface IReservationContext {}

export const ReservationContext = createContext({} /*as IReservationContext*/);

const ReservationContextProvider = ({ children }: IProviderProps) => {
  return (
    <ReservationContext.Provider value={{}}>
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;
