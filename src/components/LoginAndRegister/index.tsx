import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import Dialog from "@mui/material/Dialog";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { CloseButton } from "./styles";

interface IPropsLoginAndRegister {
  openFormLogin: boolean;
  handleClose: () => void;
}

const LoginAndRegister = ({
  openFormLogin,
  handleClose,
}: IPropsLoginAndRegister) => {
  const [isLogin, setIsLogin] = useState(true);
  const showRegisterForm = () => {
    setIsLogin(false);
  };
  const showLoginForm = () => {
    setIsLogin(true);
  };

  const handleCloseModal = () => {
    handleClose();
    // setTimeOut necessary because the 0.25s global animation;
    setTimeout(() => {
      setIsLogin(true);
    }, 300);
  };
  return (
    <div>
      <Dialog open={openFormLogin} onClose={handleCloseModal}>
        {isLogin ? (
          <FormLogin showRegisterForm={showRegisterForm} />
        ) : (
          <FormRegister showLoginForm={showLoginForm} />
        )}
        <CloseButton onClick={() => handleCloseModal()}>
          <AiOutlineClose />
        </CloseButton>
      </Dialog>
    </div>
  );
};

export default LoginAndRegister;
