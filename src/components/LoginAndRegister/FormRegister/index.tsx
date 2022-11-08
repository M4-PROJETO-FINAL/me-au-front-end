import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IoChevronBack } from "react-icons/io5";
import InputMask from "react-input-mask";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { useModalFormLoginAndRegister } from "../../../contexts/ModalFormLoginAndRegisterContext";
import { useUserContext } from "../../../contexts/UserContext";
import { InputGlobal, InputGlobalPassword } from "../../Input";
import { ButtonLink, FormInputs, FormStyled, Text, Title } from "../styles";
import { ButtonBackLogin, CenterDiv, RegisterContainer } from "./styles";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  profile_img?: string;
  cpf?: string;
  passwordConfirm?: string;
}

const FormRegister = () => {
  const { t } = useTranslation();
  const { showLoginForm } = useModalFormLoginAndRegister();
  const { createUser } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handleTogglePasswordConfirm = () =>
    setShowPasswordConfirm((showPassword) => !showPassword);

  const ERROR_MESSAGE = t("Campo obrigatório");
  const INVALID_EMAIL_MESSAGE = t("E-mail inválido");
  const ERROR_PASSWORD_MIN = t("Senha oito caracteres");
  const ERROR_PASSWORD_DIGIT = t("Senha digito");
  const ERROR_PASSWORD_LOWER_CASE = t("Senha letra minuscula");
  const ERROR_PASSWORD_UPPER_CASE = t("Senha letra maiuscula");
  const ERROR_PASSWORD_SPECIAL_CHARACTER = t("Senha caracter especial");
  const ERROR_CONFIRM_PASSWORD = t("Campos nao coincidem");

  const formSchema = yup.object().shape({
    name: yup.string().required(ERROR_MESSAGE),
    cpf: yup.string(),
    email: yup.string().required(ERROR_MESSAGE).email(INVALID_EMAIL_MESSAGE),
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
  } = useForm<IUserRegister>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: IUserRegister) => {
    createUser(data, showLoginForm);
  };

  return (
    <RegisterContainer>
      <ButtonBackLogin onClick={showLoginForm}>
        <IoChevronBack />
      </ButtonBackLogin>
      <Title>{t("Cadastre-se agora")}</Title>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <FormInputs>
          <InputGlobal
            error={!!errors.name}
            label={t("Nome e sobrenome")}
            errorMessage={errors?.name?.message}
            register={register}
            registerName="name"
          />
          <InputMask
            mask="999.999.999-99"
            register={register}
            registerName="cpf"
          >
            {() => (
              <TextField
                id={"CPF"}
                label={"CPF"}
                style={{
                  height: "78.91px",
                  paddingBottom: "19.99px",
                }}
              />
            )}
          </InputMask>
          <InputGlobal
            error={!!errors.email}
            label="E-mail"
            type="email"
            errorMessage={errors?.email?.message}
            register={register}
            registerName="email"
          />
          <InputGlobalPassword
            error={!!errors.password}
            label={t("Senha *")}
            type="password"
            errorMessage={errors?.password?.message}
            register={register}
            registerName="password"
            handleTogglePassword={handleTogglePassword}
            showPassword={showPassword}
          />
          <InputGlobalPassword
            error={!!errors.passwordConfirm}
            label={t("Confirmar senha")}
            type="password"
            errorMessage={errors?.passwordConfirm?.message}
            register={register}
            registerName="passwordConfirm"
            handleTogglePassword={handleTogglePasswordConfirm}
            showPassword={showPasswordConfirm}
          />
        </FormInputs>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16, marginTop: "0.5rem" }}
        >
          {t("Confirmar")}
        </Button>
        <CenterDiv>
          <Text>{t("Já tem cadastro")}</Text>
          <ButtonLink onClick={showLoginForm}>{t("Faça login")}</ButtonLink>
        </CenterDiv>
      </FormStyled>
    </RegisterContainer>
  );
};

export default FormRegister;
