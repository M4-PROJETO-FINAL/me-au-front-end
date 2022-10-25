import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import { IProviderProps } from "../../interfaces/User";
import { useReservationContext } from "../ReservationContext";

interface IUserContext {
  user: any;
  isOpenFormLogin: boolean;
  openFormLogin: () => void;
  closeFormLogin: () => void;
  loginUser: (data) => void;
  isOpenCartModal: boolean;
  handleOpenCartModal: () => void;
  handleCloseCartModal: () => void;
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState();
  const [isOpenFormLogin, setIsOpenFormLogin] = useState(false);
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const handleOpenCartModal = () => setIsOpenCartModal(true);
  const handleCloseCartModal = () => setIsOpenCartModal(false);

  const openFormLogin = () => {
    setIsOpenFormLogin(true);
  };

  const closeFormLogin = () => {
    setIsOpenFormLogin(false);
  };
  const actualPage = useLocation().pathname;

  const loginUser = (data) => {
    //success
    console.log(isOpenCartModal);
    handleOpenCartModal();
    closeFormLogin();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        openFormLogin,
        closeFormLogin,
        isOpenFormLogin,
        loginUser,
        isOpenCartModal,
        handleOpenCartModal,
        handleCloseCartModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
