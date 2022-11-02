import { IoMdArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import { useUserContext } from "../../contexts/UserContext";
import TimeStepper from "./Stepper";
import { style, styleDesktop, bgBlur, ButtonCloseModal } from "./style";

const CartModal = () => {
  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });
  const { handleCloseCartModal, isOpenCartModal, handleOpenCartModal } =
    useUserContext();
  return (
    <div>
      <Button onClick={handleOpenCartModal}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenCartModal}
        onClose={handleCloseCartModal}
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
        <Fade in={isOpenCartModal}>
          <Box sx={isDesktop ? style : styleDesktop}>
            <ButtonCloseModal onClick={handleCloseCartModal}>
              <IoMdArrowBack />
            </ButtonCloseModal>
            <TimeStepper />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CartModal;
