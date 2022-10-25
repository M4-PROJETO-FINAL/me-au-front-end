import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { ISelectedPet } from "../../interfaces/Reservations";
import { IProviderProps } from "../../interfaces/User";

interface IReservationContext {
  selectPet: (data: ISelectedPet) => void;
  selectedPet?: ISelectedPet;
}

const ReservationContext = createContext({} as IReservationContext);

export const ReservationContextProvider = ({ children }: IProviderProps) => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const handleOpenCartModal = () => setIsOpenCartModal(true);
  const handleCloseCartModal = () => setIsOpenCartModal(false);

  const [selectedPet, setSelectedPet] = useState<ISelectedPet>();
  const urlPath = useLocation().pathname;
  const selectPet = (petData: ISelectedPet) => {
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
