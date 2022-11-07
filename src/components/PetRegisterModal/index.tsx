import { IoMdArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import { usePetContext } from "../../contexts/PetsContext";
import RegisterPetModal from "./RegisterPet";
import { style, styleDesktop, bgBlur, ButtonCloseModal } from "./styles";

const PetModal = () => {
  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });
  const { handleClosePetModal, isOpenPetModal } = usePetContext();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenPetModal}
        onClose={handleClosePetModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 400,
          style: {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        }}
        style={bgBlur}
      >
        <Fade in={isOpenPetModal}>
          <Box sx={isDesktop ? style : styleDesktop}>
            <ButtonCloseModal onClick={handleClosePetModal}>
              <IoMdArrowBack />
            </ButtonCloseModal>
            <RegisterPetModal />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PetModal;
