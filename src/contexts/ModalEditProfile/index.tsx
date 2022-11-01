import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IModalEditProfile {
  isOpenEditModal: boolean;
  setIsOpenEditModal: Dispatch<SetStateAction<boolean>>;
  // openModalEditProfile: () => void;
  // closeModalEditProfile: () => void;
}

const ModalEditContext = createContext({} as IModalEditProfile);

export const ModalEditProfileContextProvider = () => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  return (
    <ModalEditContext.Provider
      value={{ isOpenEditModal, setIsOpenEditModal }}
    ></ModalEditContext.Provider>
  );
};

export const useModalEditProfileContext = () => useContext(ModalEditContext);
