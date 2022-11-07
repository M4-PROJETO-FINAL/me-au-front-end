import {
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
} from "react";
import { toast } from "react-toastify";

import { AxiosError } from "axios";

import { IFormSchemaRegisterPet } from "../../components/CartModal/RegisterPet";
import { IPet } from "../../interfaces/Reservations";
import { IProviderProps } from "../../interfaces/User";
import { api } from "../../services";

interface IPetContext {
  pets: IPet[];
  deletePet: () => void;
  setPetId: Dispatch<SetStateAction<string>>;
  createPet: (data: IFormSchemaRegisterPet) => void;
  isOpenPetModal: boolean;
  handleOpenPetModal: () => void;
  handleClosePetModal: () => void;
  isOpenDeleteModal: boolean;
  handleOpenDeleteModal: () => void;
  handleCloseDeleteModal: () => void;
  isOpenEditModal: boolean;
  handleOpenEditModal: () => void;
  handleCloseEditModal: () => void;
}

interface IPetRes {
  data: IPet[];
}

const PetContext = createContext({} as IPetContext);

export const PetContextProvider = ({ children }: IProviderProps) => {
  const [pets, setPets] = useState<IPet[]>([]);
  const [petId, setPetId] = useState<string>("");
  const [isOpenPetModal, setIsOpenPetModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const handleOpenPetModal = () => setIsOpenPetModal(true);
  const handleClosePetModal = () => setIsOpenPetModal(false);
  const handleOpenDeleteModal = () => setIsOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setIsOpenDeleteModal(false);
  const handleOpenEditModal = () => setIsOpenEditModal(true);
  const handleCloseEditModal = () => setIsOpenEditModal(false);

  console.log(petId);

  const createPet = (data: IFormSchemaRegisterPet) => {
    console.log(data);
    api
      .post("/pets", data)
      .then(() => {
        toast.success("Pet adicionado!");
        api
          .get("/pets")
          .then((res: IPetRes) => setPets(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        toast.error("Não foi possível realizar o cadastro.");
        console.log(err);
      });
    handleClosePetModal();
  };

  const deletePet = () => {
    api
      .delete(`/pets/${petId}`)
      .then(() => {
        toast.success("Pet excluido!");
        setPets((oldPets) => {
          const newPets = [...oldPets];
          const idx = oldPets.findIndex((pet) => pet.id === petId);
          newPets.splice(idx, 1);
          return newPets;
        });
      })
      .catch((err) => {
        if (err instanceof AxiosError) {
          if (
            err.response?.data.message ===
            "Cannot delete a pet which has already been booked in a reservation"
          ) {
            toast.error(
              "Não é possível excluir um pet para o qual já foi feita uma reserva",
            );
            return;
          }
        }
        toast.error("Ocorreu algum erro");
        console.log(err);
      });
    handleCloseDeleteModal();
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
        pets,
        setPetId,
        createPet,
        deletePet,
        isOpenPetModal,
        isOpenDeleteModal,
        handleOpenPetModal,
        handleClosePetModal,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        isOpenEditModal,
        handleOpenEditModal,
        handleCloseEditModal,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
