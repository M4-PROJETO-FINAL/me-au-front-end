import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

import { usePetContext } from "../../contexts/PetsContext";
import { lightTheme } from "../../styles/themes";
import { bgBlur, style, styleDesktop } from "./styles";

type DeleteModalProps = {
  title: string;
  description: string;
  btn1: string;
  children: ReactNode;
};

const DeleteModal = ({
  title,
  description,
  btn1,
  children,
}: DeleteModalProps) => {
  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });
  const { isOpenDeleteModal, handleCloseDeleteModal } = usePetContext();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenDeleteModal}
      onClose={handleCloseDeleteModal}
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
      <Fade in={isOpenDeleteModal}>
        <Box sx={isDesktop ? style : styleDesktop}>
          <Typography variant="h6" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "40px",
            }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: lightTheme.colors.gray3 }}
              onClick={handleCloseDeleteModal}
            >
              {btn1}
            </Button>
            {children}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeleteModal;
