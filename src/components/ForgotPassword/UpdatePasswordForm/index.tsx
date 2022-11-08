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

export interface IFormUpdatePassword {
  new_password: string;
  confirm_password: string;
}

const UpdatePasswordForm = () => {
  const { t } = useTranslation();
  const { showVerifyEmailForm, updatePassword } =
    useModalFormLoginAndRegister();

  const ERROR_MESSAGE = t("Campo obrigatório");
  const ERROR_PASSWORD_MIN = t("Senha oito caracteres");
  const ERROR_PASSWORD_DIGIT = t("Senha digito");
  const ERROR_PASSWORD_LOWER_CASE = t("Senha letra minuscula");
  const ERROR_PASSWORD_UPPER_CASE = t("Senha letra maiuscula");
  const ERROR_PASSWORD_SPECIAL_CHARACTER = t("Senha caracter especial");
  const ERROR_CONFIRM_PASSWORD = t("Campos nao coincidem");

  const formSchema = yup.object().shape({
    new_password: yup
      .string()
      .required(ERROR_MESSAGE)
      .min(8, ERROR_PASSWORD_MIN)
      .matches(/\d/, ERROR_PASSWORD_DIGIT)
      .matches(/(?=.*[A-Z])/, ERROR_PASSWORD_UPPER_CASE)
      .matches(/(?=.*[a-z])/, ERROR_PASSWORD_LOWER_CASE)
      .matches(/(?=.*[!$*&@#%])/, ERROR_PASSWORD_SPECIAL_CHARACTER),
    confirm_password: yup
      .string()
      .required(ERROR_MESSAGE)
      .oneOf([yup.ref("new_password")], ERROR_CONFIRM_PASSWORD),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUpdatePassword>({ resolver: yupResolver(formSchema) });

  const updateUserPassword = (data: IFormUpdatePassword) => {
    console.log(data);
    updatePassword(data);
  };

  return (
    <ForgotPasswordContainer>
      <ButtonBackLogin onClick={showVerifyEmailForm}>
        <IoChevronBack />
      </ButtonBackLogin>
      <Title>{t("Redefinir senha")}</Title>
      <TextMessage>
        {t("Sua nova senha deve ser diferente das senhas usadas anteriormente")}
      </TextMessage>
      <FormUpdatePassword onSubmit={handleSubmit(updateUserPassword)}>
        <InputGlobal
          error={!!errors.new_password}
          label={t("Senha *")}
          type="password"
          isFullWidth={true}
          errorMessage={errors?.new_password?.message}
          register={register}
          registerName="new_password"
        />
        <InputGlobal
          error={!!errors.confirm_password}
          label={t("Confirmar senha")}
          type="password"
          isFullWidth={true}
          errorMessage={errors?.confirm_password?.message}
          register={register}
          registerName="confirm_password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          {t("Confirmar")}
        </Button>
      </FormUpdatePassword>
    </ForgotPasswordContainer>
  );
};

export default UpdatePasswordForm;
