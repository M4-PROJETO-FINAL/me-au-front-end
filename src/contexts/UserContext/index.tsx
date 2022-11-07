import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import { IUserLogin } from "../../components/LoginAndRegister/FormLogin";
import { IUserRegister } from "../../components/LoginAndRegister/FormRegister";
import { IProviderProps, IUser } from "../../interfaces/User";
import { api } from "../../services";
import { usePetContext } from "../PetsContext";

interface IUserContext {
  user?: IUser;
  isOpenFormLogin: boolean;
  openFormLogin: () => void;
  closeFormLogin: () => void;
  loginUser: (data: IUserLogin) => void;
  isOpenCartModal: boolean;
  handleOpenCartModal: () => void;
  handleCloseCartModal: () => void;
  createUser: (data: IUserRegister, goToLoginForm: (() => void) | null) => void;
  setIsReservationBtnPressed: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
}

interface ILoginRes {
  data: {
    token: string;
  };
  status: number;
}

interface IUserRes {
  data: IUser;
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser>();
  const { getPet } = usePetContext();
  const [isOpenFormLogin, setIsOpenFormLogin] = useState(false);
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const [isReservationBtnPressed, setIsReservationBtnPressed] = useState(false);
  const [tokenIsAdd, SetTokenIsAdd] = useState(false);
  const handleOpenCartModal = () => setIsOpenCartModal(true);
  const handleCloseCartModal = () => setIsOpenCartModal(false);

  const openFormLogin = () => {
    setIsOpenFormLogin(true);
  };

  const closeFormLogin = () => {
    setIsOpenFormLogin(false);
  };

  const createUser = (data: IUserRegister, goToLoginForm) => {
    api
      .post("/users", data)
      .then(() => {
        // actionAfterRegister = Go To Login Form
        goToLoginForm ? goToLoginForm() : setIsOpenFormLogin(false);
        // toast.success("Conta criada com sucesso.");
      })
      .catch(() => {
        // toast.error("Não foi possível realizar o cadastro.");
      });
  };

  const loginUser = async (datas: IUserLogin) => {
    try {
      const { data }: ILoginRes = await api.post("/login", datas);
      localStorage.setItem("@me-au:token", data.token);
      closeFormLogin();
    } catch (error) {
      console.log(error);
    }
    SetTokenIsAdd(true);
    //caso for sucesso

    if (isReservationBtnPressed) {
      closeFormLogin();
      handleOpenCartModal();
    }
  };

  const getUser = async () => {
    const token = localStorage.getItem("@me-au:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const { data }: IUserRes = await api.get("/users");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    SetTokenIsAdd(false);
  };

  useEffect(() => {
    getUser();
  }, [tokenIsAdd]);

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("@me-au:token");
  };

  // atualiza o valor do isReservationBtnPressed quando os modais estão fechados
  useEffect(() => {
    if (!isOpenFormLogin && !isOpenCartModal) setIsReservationBtnPressed(false);
  }, [isOpenFormLogin, isOpenCartModal]);

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
        createUser,
        setIsReservationBtnPressed,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
