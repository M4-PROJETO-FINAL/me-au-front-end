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

interface IUserContext {
  user?: IUser;
  isOpenFormLogin: boolean;
  openFormLogin: () => void;
  closeFormLogin: () => void;
  loginUser: (data: IUserLogin) => void;
  isOpenCartModal: boolean;
  handleOpenCartModal: () => void;
  handleCloseCartModal: () => void;
  createUser: (data: IUserRegister) => void;
  setIsReservationBtnPressed: Dispatch<SetStateAction<boolean>>;
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
  const [isOpenFormLogin, setIsOpenFormLogin] = useState(false);
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const [isReservationBtnPressed, setIsReservationBtnPressed] = useState(false);
  const handleOpenCartModal = () => setIsOpenCartModal(true);
  const handleCloseCartModal = () => setIsOpenCartModal(false);

  const openFormLogin = () => {
    setIsOpenFormLogin(true);
  };

  const closeFormLogin = () => {
    setIsOpenFormLogin(false);
  };

  const createUser = (data: IUserRegister) => {
    console.log(data);
    api
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso.");
      })
      .catch((err: any) => {
        console.log(err);
        toast.error("Não foi possível realizar o cadastro.");
      });
  };

  const loginUser = (data: IUserLogin) => {
    api.post("/login", data).then((res: ILoginRes) => {
      localStorage.setItem("@me-au:token", res.data.token);
      api.defaults.headers.authorization = `Bearer ${res.data.token}`;
    });
    console.log(user);
    //caso for sucesso
    if (isReservationBtnPressed) {
      closeFormLogin();
      handleOpenCartModal();
    }
  };

  useEffect(() => {
    api.get("/users").then((res: IUserRes) => setUser(res.data));
  }, []);

  // atualiza o valor do isReservation quando os mais estão fechados
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
