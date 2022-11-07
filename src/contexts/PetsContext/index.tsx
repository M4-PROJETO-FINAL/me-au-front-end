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

import { IFormSchemaEditPet } from "../../components/CardsPets/FormEditPet";
import { IFormSchemaRegisterPet } from "../../components/CartModal/RegisterPet";
import { IPet } from "../../interfaces/Reservations";
import { IProviderProps } from "../../interfaces/User";
import { api } from "../../services";

interface IPetContext {
  pets: IPet[];
  deletePet: () => void;
  getPet: () => void;
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
  editPet: (data: IFormSchemaEditPet) => void;
  setPetEdit: Dispatch<SetStateAction<IPetEdit>>;
  petEdit: IPetEdit;
}

interface IPetRes {
  data: IPet[];
}

interface IPetEdit {
  name: string;
  docile: boolean;
  neutered: boolean;
  vaccinated: boolean;
}

const PetContext = createContext({} as IPetContext);

export const PetContextProvider = ({ children }: IProviderProps) => {
  const [pets, setPets] = useState<IPet[]>([]);
  const [petId, setPetId] = useState<string>("");
  const [petEdit, setPetEdit] = useState<IPetEdit>({
    name: "",
    docile: true,
    neutered: true,
    vaccinated: true,
  });
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

  const getPet = async () => {
    const token = localStorage.getItem("@me-au:token");
    //api.defaults.headers.authorization = `Bearer ${token}`;
    if (token) {
      await api
        .get("/pets")
        .then((res: IPetRes) => setPets(res.data))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const editPet = (data: IFormSchemaEditPet) => {
    api
      .patch(`/pets/${petId}`, data)
      .then(() => {
        toast.success("Informações atualizadas");
        handleCloseEditModal();
        getPet();
      })
      .catch((err) => console.log(err));
  };

  console.log(pets);
  return (
    <PetContext.Provider
      value={{
        pets,
        getPet,
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
        editPet,
        setPetEdit,
        petEdit,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
