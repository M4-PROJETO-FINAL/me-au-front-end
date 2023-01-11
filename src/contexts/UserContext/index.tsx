import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import jwt_decode, { JwtPayload } from "jwt-decode";

import { IUserLogin } from "../../components/LoginAndRegister/FormLogin";
import { IUserRegister } from "../../components/LoginAndRegister/FormRegister";
import { IProviderProps, IUser } from "../../interfaces/User";
import { api } from "../../services";

interface IUserContext {
  user?: IUser;
  isOpenFormLogin: boolean;
  openFormLogin: () => void;
  closeFormLogin: () => void;
  loginUser: (data: IUserLogin, type?: "gmail") => void;
  isOpenCartModal: boolean;
  handleOpenCartModal: () => void;
  handleCloseCartModal: () => void;
  createUser: (data: IUserRegister, goToLoginForm: (() => void) | null) => void;
  setIsReservationBtnPressed: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
  updateUser: (data) => void;
}

interface ILoginRes {
  data: {
    access: string;
    refresh: string;
  };
  status: number;
}

interface IUserRes {
  data: IUser | IUser[];
}

interface JwtPayloadUser extends JwtPayload {
  is_adm: boolean;
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser>();
  const [isOpenFormLogin, setIsOpenFormLogin] = useState(false);
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const [isReservationBtnPressed, setIsReservationBtnPressed] = useState(false);
  const [tokenIsAdd, SetTokenIsAdd] = useState(false);
  const handleOpenCartModal = () => setIsOpenCartModal(true);
  const handleCloseCartModal = () => setIsOpenCartModal(false);
  const { t } = useTranslation();

  const openFormLogin = () => {
    setIsOpenFormLogin(true);
  };

  const closeFormLogin = () => {
    setIsOpenFormLogin(false);
  };

  const createUser = async (data: IUserRegister, goToLoginForm) => {
    console.log('entrou na createUser')
    await api
      .post("/users/", data)
      .then((res) => {
        console.log('res:')
        console.log(res)
        // actionAfterRegister = Go To Login Form
        goToLoginForm ? goToLoginForm() : setIsOpenFormLogin(false);
        // toast.success("Conta criada com sucesso.");
      })
      .catch((err) => {
        console.log(err)
        // toast.error("Não foi possível realizar o cadastro.");
      });
    console.log('saiu da createUser')

  };

  const loginUser = async (datas: IUserLogin, type = "normal") => {
    console.log('entrou na loginUser')

    try {
      const { data }: ILoginRes = await api.post("/login/", datas);
      localStorage.setItem("@me-au:token", data.access);
      closeFormLogin();
    } catch (error) {
      if (type === "normal") toast.error(t("invalid info"));
      console.log(error);
    }
    SetTokenIsAdd(true);
    //caso for sucesso

    if (isReservationBtnPressed) {
      closeFormLogin();
      handleOpenCartModal();
    }
    console.log('saiu da loginUser')
  };

  const getUser = async () => {
    const token = localStorage.getItem("@me-au:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const { data }: IUserRes = await api.get("/users");
        const userId = jwt_decode<JwtPayloadUser>(token).sub;
        const userIsAdm = jwt_decode<JwtPayloadUser>(token)?.is_adm;

        if (userIsAdm && Array.isArray(data)) {
          const user = data.find((e) => e.id === userId);
          setUser(user);
        } else if (!Array.isArray(data)) {
          setUser(data);
        }
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

  const updateUser = (data) => {
    const token = localStorage.getItem("@me-au:token");

    if (token) {
      const userId = jwt_decode<JwtPayloadUser>(token).sub;

      api
        .patch(`/users/${userId}/`, data)
        .then(() => {
          toast.success(`${"Usuario atualizado!"}`);
          getUser();
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${"Não foi possivel atualizar"}`);
        });
    }
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
        createUser,
        setIsReservationBtnPressed,
        logout,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
