import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import TimeStepper from "./Stepper";
import { style, styleDesktop, bgBlur, ButtonCloseModal } from "./style";

const CartModal = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(max-width: 1000px)" });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
        <Fade in={open}>
          <Box sx={isDesktop ? style : styleDesktop}>
            <ButtonCloseModal onClick={handleClose}>
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
