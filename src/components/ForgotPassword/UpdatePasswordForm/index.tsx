import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IoChevronBack } from "react-icons/io5";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { useModalFormLoginAndRegister } from "../../../contexts/ModalFormLoginAndRegisterContext";
import { InputGlobal } from "../../Input";
import { ButtonBackLogin } from "../../LoginAndRegister/FormRegister/styles";
import { Title } from "../../LoginAndRegister/styles";
import { ForgotPasswordContainer, TextMessage } from "../styles";
import { FormUpdatePassword } from "./styles";

interface IFormUpdatePassword {
  password: string;
  passwordConfirm: string;
}

const UpdatePasswordForm = () => {
  const { t } = useTranslation();
  const { showVerifyEmailForm } = useModalFormLoginAndRegister();

  const ERROR_MESSAGE = t("Campo obrigatório");
  const ERROR_PASSWORD_MIN = t("Senha oito caracteres");
  const ERROR_PASSWORD_DIGIT = t("Senha digito");
  const ERROR_PASSWORD_LOWER_CASE = t("Senha letra minuscula");
  const ERROR_PASSWORD_UPPER_CASE = t("Senha letra maiuscula");
  const ERROR_PASSWORD_SPECIAL_CHARACTER = t("Senha caracter especial");
  const ERROR_CONFIRM_PASSWORD = t("Campos nao coincidem");

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required(ERROR_MESSAGE)
      .min(8, ERROR_PASSWORD_MIN)
      .matches(/\d/, ERROR_PASSWORD_DIGIT)
      .matches(/(?=.*[A-Z])/, ERROR_PASSWORD_UPPER_CASE)
      .matches(/(?=.*[a-z])/, ERROR_PASSWORD_LOWER_CASE)
      .matches(/(?=.*[!$*&@#%])/, ERROR_PASSWORD_SPECIAL_CHARACTER),
    passwordConfirm: yup
      .string()
      .required(ERROR_MESSAGE)
      .oneOf([yup.ref("password")], ERROR_CONFIRM_PASSWORD),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUpdatePassword>({ resolver: yupResolver(formSchema) });

  const updatePassword = () => {
    // update password ; + modal ?
  };

  return (
    <ForgotPasswordContainer>
      <ButtonBackLogin onClick={showVerifyEmailForm}>
        <IoChevronBack />
      </ButtonBackLogin>
      <Title>Redefinir senha</Title>
      <TextMessage>
        Sua nova senha deve ser diferente das senhas usadas anteriormente
      </TextMessage>
      <FormUpdatePassword onSubmit={handleSubmit(updatePassword)}>
        <InputGlobal
          error={!!errors.password}
          label={t("Senha *")}
          type="password"
          isFullWidth={true}
          errorMessage={errors?.password?.message}
          register={register}
          registerName="password"
        />
        <InputGlobal
          error={!!errors.passwordConfirm}
          label={t("Confirmar senha")}
          type="password"
          isFullWidth={true}
          errorMessage={errors?.passwordConfirm?.message}
          register={register}
          registerName="passwordConfirm"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          Confirmar
        </Button>
      </FormUpdatePassword>
    </ForgotPasswordContainer>
  );
};

export default UpdatePasswordForm;
