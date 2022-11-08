import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

import { Box, Typography, Divider, Button } from "@mui/material";

import petIcon from "../../assets/petIcon.svg";
import { usePetContext } from "../../contexts/PetsContext";
import DeleteModal from "../DeleteModal";
import PetModal from "../PetRegisterModal";
import EditPetModal from "./EditPetModal";
import { ContainerPets, fontBold, fontLink } from "./style";

const CardsPets = () => {
  const { t } = useTranslation();
  const {
    handleOpenPetModal,
    handleOpenEditModal,
    handleOpenDeleteModal,
    setPetId,
    pets,
    deletePet,
    setPetEdit,
  } = usePetContext();

  const handleModal = () => {
    handleOpenPetModal();
  };

  const handleDeleteModal = () => {
    handleOpenDeleteModal();
  };

  const handleEditModal = () => {
    handleOpenEditModal();
  };

  return (
    <ContainerPets>
      {pets.map((pet) => (
        <Box key={pet.id} className="card--pets">
          <Box className="header--card">
            <Box>
              <Typography style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {pet.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <button
                className="btn--cardPet"
                onClick={() => {
                  setPetId(pet.id);
                  setPetEdit({
                    name: pet.name,
                    docile: pet.docile,
                    neutered: pet.neutered,
                    vaccinated: pet.vaccinated,
                  });
                  handleEditModal();
                }}
              >
                <TbEdit />
              </button>
              <button
                id={pet.id}
                className="btn--cardPet"
                onClick={() => {
                  setPetId(pet.id);
                  handleDeleteModal();
                }}
              >
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
      <EditPetModal />
      <DeleteModal
        btn1={t("Cancelar")}
        title={t("Excluir o pet")}
        description={t("Tem certeza que deseja excluir o pet?")}
      >
        <Button onClick={deletePet} variant="contained" color="error">
          {t("Excluir")}
        </Button>
      </DeleteModal>
    </ContainerPets>
  );
};

export default CardsPets;
