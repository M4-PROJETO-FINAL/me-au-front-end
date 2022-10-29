import { ModalFormLoginAndRegisterProvider } from "../../contexts/ModalFormLoginAndRegisterContext";
import ModalLoginAndRegister from "./ModalLoginAndRegister";

const LoginAndRegister = () => {
  return (
    <ModalFormLoginAndRegisterProvider>
      <ModalLoginAndRegister />
    </ModalFormLoginAndRegisterProvider>
  );
};

export default LoginAndRegister;
