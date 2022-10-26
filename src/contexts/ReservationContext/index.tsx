import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { IPet } from "../../interfaces/Reservations";
import { IProviderProps } from "../../interfaces/User";

interface IReservationContext {
  selectPet: (data: IPet) => void;
  selectedPet?: IPet;
}

const ReservationContext = createContext({} as IReservationContext);

export const ReservationContextProvider = ({ children }: IProviderProps) => {
  const [selectedPet, setSelectedPet] = useState<IPet>();
  const urlPath = useLocation().pathname;
  const selectPet = (petData: IPet) => {
    if (petData.type === "cat" && urlPath.includes("dog")) {
      toast.error("Não é possível selecionar um gato nesse quarto");
      return;
    }
    if (petData.type === "dog" && urlPath.includes("cat")) {
      toast.error("Não é possível selecionar um cachorro nesse quarto");
      return;
    }
    setSelectedPet(petData);
  };

  return (
    <ReservationContext.Provider
      value={{
        selectPet,
        selectedPet,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
