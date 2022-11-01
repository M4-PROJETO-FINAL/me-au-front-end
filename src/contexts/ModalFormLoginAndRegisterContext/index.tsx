import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import { IProviderProps } from "../../interfaces/User";
import { useUserContext } from "../UserContext";

type IActualModalForm =
  | "forgotPassword"
  | "verifyEmail"
  | "updatePassword"
  | "login"
  | "register";

interface IModalFromLoginAndRegisterContext {
  actualModalForm?: IActualModalForm;
  showRegisterForm: () => void;
  showLoginForm: () => void;
  showForgotPasswordForm: () => void;
  showVerifyEmailForm: () => void;
  showUpdatePasswordForm: () => void;
  handleCloseModal: () => void;
}

const ModalFormLoginAndRegister = createContext(
  {} as IModalFromLoginAndRegisterContext,
);

export const ModalFormLoginAndRegisterProvider = ({
  children,
}: IProviderProps) => {
  const [actualModalForm, setActualModalForm] =
    useState<IActualModalForm>("login");
  const { closeFormLogin } = useUserContext();

  const showRegisterForm = () => setActualModalForm("register");
  const showLoginForm = () => setActualModalForm("login");
  const showForgotPasswordForm = () => setActualModalForm("forgotPassword");
  const showVerifyEmailForm = () => setActualModalForm("verifyEmail");
  const showUpdatePasswordForm = () => setActualModalForm("updatePassword");

  const handleCloseModal = () => {
    closeFormLogin();
    // reset the actualModalForm to login
    setTimeout(() => {
      showLoginForm();
    }, 200);
  };

  return (
    <ModalFormLoginAndRegister.Provider
      value={{
        actualModalForm,
        showRegisterForm,
        showLoginForm,
        showForgotPasswordForm,
        showVerifyEmailForm,
        showUpdatePasswordForm,
        handleCloseModal,
      }}
    >
      {children}
    </ModalFormLoginAndRegister.Provider>
  );
};

export const useModalFormLoginAndRegister = () =>
  useContext(ModalFormLoginAndRegister);
