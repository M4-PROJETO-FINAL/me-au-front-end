import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import Logo from "../../../assets/logo.svg";
import { useModalFormLoginAndRegister } from "../../../contexts/ModalFormLoginAndRegisterContext";
import { useUserContext } from "../../../contexts/UserContext";
import { InputGlobal } from "../../Input";
import { GoogleAuthLogin } from "../GoogleAuth";
import { ButtonLink, FormInputs, FormStyled, Text, Title } from "../styles";
import { LoginContainer } from "./styles";

export interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { t } = useTranslation();

  const { loginUser } = useUserContext();
  const { showRegisterForm, showForgotPasswordForm } =
    useModalFormLoginAndRegister();

  const ERROR_MESSAGE = t("Campo obrigatório");
  const INVALID_EMAIL_MESSAGE = t("E-mail inválido");

  const formSchema = yup.object().shape({
    email: yup.string().required(ERROR_MESSAGE).email(INVALID_EMAIL_MESSAGE),
    password: yup.string().required(ERROR_MESSAGE),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(formSchema) });
  2;
  const onSubmitFunction = (data: IUserLogin) => {
    loginUser(data);
    // Aqui chama o contexto da api de login.. E loga!
  };
  return (
    <LoginContainer>
      <img src={Logo} alt="Logo" />
      <div>
        <Title>{t("Seja bem-vindo")}</Title>
        <span>{t("Já sou cliente")}</span>
      </div>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <FormInputs>
          <InputGlobal
            error={!!errors.email}
            label="E-mail *"
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
        </FormInputs>
        <button
          className="forgot__password"
          type="button"
          onClick={() => showForgotPasswordForm()}
        >
          {t("Esqueceu sua senha?")}
        </button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          {t("Entrar")}
        </Button>
      </FormStyled>

      <div className="login__register-container">
        <Text>{t("Ainda não tem uma conta?")}</Text>
        <ButtonLink onClick={() => showRegisterForm()}>
          {t("Cadastre-se aqui")}
        </ButtonLink>
      </div>
      <div>{t("Ou entre com")}:</div>
      <GoogleAuthLogin />
    </LoginContainer>
  );
};

export default FormLogin;
