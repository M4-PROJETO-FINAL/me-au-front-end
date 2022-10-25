import { useModalFormLoginAndRegister } from "../../contexts/ModalFormLoginAndRegisterContext";
import ForgotPasswordForm from "./ForgotPasswordForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import VerifyEmailForm from "./VerifyEmailForm";

const ForgotPassword = () => {
  const { actualModalForm } = useModalFormLoginAndRegister();

  return (
    <>
      {actualModalForm === "forgotPassword" && <ForgotPasswordForm />}
      {actualModalForm === "verifyEmail" && <VerifyEmailForm />}
      {actualModalForm === "updatePassword" && <UpdatePasswordForm />}
    </>
  );
};

export default ForgotPassword;
