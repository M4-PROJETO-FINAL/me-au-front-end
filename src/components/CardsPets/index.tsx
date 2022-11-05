import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

import { Box, Typography, Divider, Button } from "@mui/material";

import petIcon from "../../assets/petIcon.svg";
import { usePetContext } from "../../contexts/PetsContext";
import DeleteModal from "../DeleteModal";
import PetModal from "../PetRegisterModal";
import RegisterPetModal from "../PetRegisterModal/RegisterPet";
import { ContainerPets, fontBold, fontLink } from "./style";

const pet = [
  {
    id: "uuid",
    name: "Aika",
    age: "2 anos",
    type: "dog",
    neutered: true,
    vaccinated: true,
    docile: true,
  },
  {
    id: "uuid2",
    name: "Catioro",
    age: "2 anos",
    type: "cat",
    neutered: true,
    vaccinated: false,
    docile: true,
  },
];

const CardsPets = () => {
  const { t } = useTranslation();
  const { handleOpenPetModal, handleOpenDeleteModal } = usePetContext();

  const handleModal = () => {
    handleOpenPetModal();
  };

  const handleDeleteModal = () => {
    handleOpenDeleteModal();
  };

  return (
    <ContainerPets>
      {pet.map((pet) => (
        <Box key={pet.id} className="card--pets">
          <Box className="header--card">
            <Box>
              <Typography style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {pet.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <button className="btn--cardPet">
                <TbEdit />
              </button>
              <button className="btn--cardPet" onClick={handleDeleteModal}>
                <FaTrash />
              </button>
            </Box>
          </Box>
          <Divider />
          <Box className="info--card">
            <Box className="info--column">
              <Box className="info--row">
                <Typography>{t("Cadastrar pet.É castrado")}</Typography>
                <Typography style={fontBold}>
                  {pet.neutered ? t("Sim") : t("Não")}
                </Typography>
              </Box>

              <Box className="info--row">
                <Typography>{t("Qual o tipo?")}</Typography>
                <Typography style={fontBold}>
                  {pet.type === "dog"
                    ? t("Cadastrar pet.Cachorro")
                    : t("Cadastrar pet.Gato")}
                </Typography>
              </Box>

              <Box className="info--row">
                <Typography>{t("Qual a idade?")}</Typography>
                <Typography style={fontBold}>{pet.age}</Typography>
              </Box>
            </Box>
            <Box className="info--column">
              <Box className="info--row">
                <Typography>{t("Cadastrar pet.É vacinado")}</Typography>
                <Typography style={fontBold}>
                  {pet.vaccinated ? t("Sim") : t("Não")}
                </Typography>
              </Box>

              <Box className="info--row">
                <Typography>{t("Cadastrar pet.É dócil")}</Typography>
                <Typography style={fontBold}>
                  {pet.docile ? t("Sim") : t("Não")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Box className="footer--card">
        <Typography style={fontLink} variant="button" onClick={handleModal}>
          {t("Cadastrar um novo pet")}
        </Typography>
        <img src={petIcon}></img>
      </Box>

      <PetModal />
      <DeleteModal
        btn1="Cancelar"
        title="Excluir o pet"
        description="Tem certeza que deseja excluir o pet?"
      >
        <Button variant="contained" color="error">
          Excluir
        </Button>
      </DeleteModal>
    </ContainerPets>
  );
};

export default CardsPets;
