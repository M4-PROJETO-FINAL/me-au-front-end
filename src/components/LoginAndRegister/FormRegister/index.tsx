import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IoChevronBack } from "react-icons/io5";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { InputGlobal } from "../../Input";
import { ButtonLink, FormInputs, FormStyled, Text, Title } from "../styles";
import { ButtonBackLogin, CenterDiv, RegisterContainer } from "./styles";

interface IFormRegister {
  showLoginForm: () => void;
}

interface IFormSchemaRegister {
  name: string;
  cpf?: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const FormRegister = ({ showLoginForm }: IFormRegister) => {
  const { t } = useTranslation();

  const ERROR_MESSAGE = t("Campo obrigatório");
  const INVALID_EMAIL_MESSAGE = t("E-mail inválido");
  const INVALID_CPF_MESSAGE = t("CPF inválido");
  const ERROR_PASSWORD_MIN = t("Senha oito caracteres");
  const ERROR_PASSWORD_DIGIT = t("Senha digito");
  const ERROR_PASSWORD_LOWER_CASE = t("Senha letra minuscula");
  const ERROR_PASSWORD_UPPER_CASE = t("Senha letra maiuscula");
  const ERROR_PASSWORD_SPECIAL_CHARACTER = t("Senha caracter especial");
  const ERROR_CONFIRM_PASSWORD = t("Campos nao coincidem");

  const cpfRegExp = /(^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$)/;

  const formSchema = yup.object().shape({
    name: yup.string().required(ERROR_MESSAGE),
    cpf: yup.string().matches(cpfRegExp, INVALID_CPF_MESSAGE),
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
  } = useForm<IFormSchemaRegister>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: IFormSchemaRegister) => {
    // Aqui chama o contexto da api de registro..!
  };
  // Seria interessante fazer um inputmask para o cpf... ao invés de usar o yup form, dessa forma o campo já viria validado!
  // https://codesandbox.io/s/h00r3?file=/src/MaskedTextField.tsx
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
          <InputGlobal
            error={!!errors.cpf}
            label="CPF"
            type="tel"
            errorMessage={errors?.cpf?.message}
            register={register}
            registerName="cpf"
          />
          <InputGlobal
            error={!!errors.email}
            label="E-mail"
            type="email"
            errorMessage={errors?.email?.message}
            register={register}
            registerName="email"
          />
          <InputGlobal
            error={!!errors.password}
            label={t("Senha *")}
            type="password"
            errorMessage={errors?.password?.message}
            register={register}
            registerName="password"
          />
          <InputGlobal
            error={!!errors.passwordConfirm}
            label={t("Confirmar senha")}
            type="password"
            errorMessage={errors?.passwordConfirm?.message}
            register={register}
            registerName="passwordConfirm"
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
