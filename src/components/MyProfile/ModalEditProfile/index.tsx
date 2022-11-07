import { IoMdArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import { bgBlur, ButtonCloseModal } from "../../CartModal/style";
import FormProfile from "../Form";
import {
  ContainerModalEditProfile,
  styleDesktopModalProfile,
  styleModalProfile,
} from "./styles";

interface IPropsEditModal {
  isOpenEditModal: boolean;
  openModalEditProfile: () => void;
  closeModalEditProfile: () => void;
}

const ModalEditProfile = ({
  isOpenEditModal,
  openModalEditProfile,
  closeModalEditProfile,
}: IPropsEditModal) => {
  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <ContainerModalEditProfile>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenEditModal}
        onClose={closeModalEditProfile}
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
            <ButtonCloseModal onClick={closeModalEditProfile}>
              <IoMdArrowBack />
            </ButtonCloseModal>
            <FormProfile />
          </Box>
        </Fade>
      </Modal>
    </ContainerModalEditProfile>
  );
};

export default ModalEditProfile;
