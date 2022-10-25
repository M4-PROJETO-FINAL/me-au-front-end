import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import Dialog from "@mui/material/Dialog";

import { useUserContext } from "../../contexts/UserContext";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { CloseButton } from "./styles";

interface IPropsLoginAndRegister {
  openFormLogin: boolean;
  handleClose: () => void;
}

const LoginAndRegister = () => {
  const { closeFormLogin, isOpenFormLogin } = useUserContext();
  const [isLogin, setIsLogin] = useState(true);
  const showRegisterForm = () => {
    setIsLogin(false);
  };
  const showLoginForm = () => {
    setIsLogin(true);
  };

  const handleCloseModal = () => {
    closeFormLogin();
    setTimeout(() => {
      setIsLogin(true);
    }, 300);
  };

  return (
    <div>
      <Dialog
        open={isOpenFormLogin}
        onClose={handleCloseModal}
        disableScrollLock={true}
      >
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
