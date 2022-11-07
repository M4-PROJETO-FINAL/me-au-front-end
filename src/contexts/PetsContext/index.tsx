import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import { IFormSchemaRegisterPet } from "../../components/CartModal/RegisterPet";
import { IPet } from "../../interfaces/Reservations";
import { IProviderProps } from "../../interfaces/User";
import { api } from "../../services";

interface IPetContext {
  pets?: IPet[];
  createPet: (data: IFormSchemaRegisterPet) => void;
  deletePet: (petId: string) => void;
  isOpenPetModal: boolean;
  handleOpenPetModal: () => void;
  handleClosePetModal: () => void;
  isOpenDeleteModal: boolean;
  handleOpenDeleteModal: () => void;
  handleCloseDeleteModal: () => void;
  setPetId: Dispatch<SetStateAction<string>>;
}

interface IPetRes {
  data: IPet[];
}

const PetContext = createContext({} as IPetContext);

export const PetContextProvider = ({ children }: IProviderProps) => {
  const [pets, setPets] = useState<IPet[]>();
  const [isOpenPetModal, setIsOpenPetModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [petId, setPetId] = useState<string>("");

  const handleOpenPetModal = () => setIsOpenPetModal(true);
  const handleClosePetModal = () => setIsOpenPetModal(false);
  const handleOpenDeleteModal = () => setIsOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setIsOpenDeleteModal(false);

  console.log(petId);

  const createPet = (data: IFormSchemaRegisterPet) => {
    console.log(data);
    api
      .post("/pets", data)
      .then(() => {
        toast.success("Pet adicionado!");
      })
      .catch(() => {
        toast.error("Não foi possível realizar o cadastro.");
      });
  };

  const deletePet = () => {
    api
      .delete(`/pets/${petId}`)
      .then(() => {
        toast.success("Pet excluido!");
      })
      .catch(() => {
        toast.error("Ocorreu algum erro");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("@me-au:token");
    //api.defaults.headers.authorization = `Bearer ${token}`;
    if (token) {
      api
        .get("/pets")
        .then((res: IPetRes) => setPets(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(pets);
  return (
    <PetContext.Provider
      value={{
        createPet,
        deletePet,
        handleOpenPetModal,
        handleClosePetModal,
        isOpenPetModal,
        pets,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        isOpenDeleteModal,
        setPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
