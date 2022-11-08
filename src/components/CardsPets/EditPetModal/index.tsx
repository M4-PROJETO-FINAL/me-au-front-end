import { IoMdArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import { usePetContext } from "../../../contexts/PetsContext";
import { bgBlur, ButtonCloseModal } from "../../CartModal/style";
import FormEditPet from "../FormEditPet";
import {
  ContainerModalEditProfile,
  styleDesktopModalProfile,
  styleModalProfile,
} from "./styles";

const EditPetModal = () => {
  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });
  const { isOpenEditModal, handleCloseEditModal } = usePetContext();

  return (
    <ContainerModalEditProfile>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenEditModal}
        onClose={handleCloseEditModal}
        style={bgBlur}
        BackdropProps={{
          timeout: 400,
          style: {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        }}
      >
        <Fade in={isOpenEditModal}>
          <Box sx={isDesktop ? styleModalProfile : styleDesktopModalProfile}>
            <ButtonCloseModal onClick={handleCloseEditModal}>
              <IoMdArrowBack />
            </ButtonCloseModal>
            <FormEditPet />
          </Box>
        </Fade>
      </Modal>
    </ContainerModalEditProfile>
  );
};

export default EditPetModal;
