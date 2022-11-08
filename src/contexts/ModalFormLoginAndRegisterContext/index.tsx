import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

import { IFormEmail } from "../../components/ForgotPassword/ForgotPasswordForm";
import { IFormUpdatePassword } from "../../components/ForgotPassword/UpdatePasswordForm";
import { ICodeConfirm } from "../../components/ForgotPassword/VerifyEmailForm";
import { IProviderProps } from "../../interfaces/User";
import { api } from "../../services";
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
  forgotPassword: (data: IFormEmail) => void;
  verifyCode: (data: ICodeConfirm) => void;
  setEmail: Dispatch<SetStateAction<string>>;
  setCode: Dispatch<SetStateAction<string>>;
  email: string;
  updatePassword: (data: IFormUpdatePassword) => void;
}

const ModalFormLoginAndRegister = createContext(
  {} as IModalFromLoginAndRegisterContext,
);

export const ModalFormLoginAndRegisterProvider = ({
  children,
}: IProviderProps) => {
  const [actualModalForm, setActualModalForm] =
    useState<IActualModalForm>("login");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
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

  const forgotPassword = async (data: IFormEmail) => {
    try {
      await api.patch("/forgot", data);
      toast.success("Email enviado com sucesso");
      showVerifyEmailForm();
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum erro");
    }
  };

  const verifyCode = async (data: ICodeConfirm) => {
    try {
      await api.post("/forgot/verify", data);
      showUpdatePasswordForm();
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum erro");
    }
  };

  const updatePassword = async (data: IFormUpdatePassword) => {
    try {
      await api.patch(`/forgot/${code}`, data);
      toast.success("Senha atualizada com sucesso");
      handleCloseModal();
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum erro");
    }
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
        forgotPassword,
        verifyCode,
        setEmail,
        setCode,
        email,
        updatePassword,
      }}
    >
      {children}
    </ModalFormLoginAndRegister.Provider>
  );
};

export const useModalFormLoginAndRegister = () =>
  useContext(ModalFormLoginAndRegister);
