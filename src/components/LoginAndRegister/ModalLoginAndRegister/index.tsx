import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import Dialog from "@mui/material/Dialog";

import { useModalFormLoginAndRegister } from "../../../contexts/ModalFormLoginAndRegisterContext";
import { useUserContext } from "../../../contexts/UserContext";
import ForgotPassword from "../../ForgotPassword";
import FormLogin from "../FormLogin";
import FormRegister from "../FormRegister";
import { CloseButton } from "../styles";

const ModalLoginAndRegister = () => {
  const { isOpenFormLogin } = useUserContext();

  const { actualModalForm, handleCloseModal } = useModalFormLoginAndRegister();
  return (
    <div>
      <Dialog
        open={isOpenFormLogin}
        onClose={handleCloseModal}
        disableScrollLock={true}
      >
        {actualModalForm === "login" && <FormLogin />}
        {actualModalForm === "register" && <FormRegister />}
        <ForgotPassword />
        <CloseButton onClick={() => handleCloseModal()}>
          <AiOutlineClose />
        </CloseButton>
      </Dialog>
    </div>
  );
};

export default ModalLoginAndRegister;
