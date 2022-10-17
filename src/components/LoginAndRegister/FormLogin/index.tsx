import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

import Logo from "../../../assets/logoMeAuBGCWhite.png";
import { ButtonLink, FormInputs, FormStyled, Text, Title } from "../styles";
import { LoginContainer } from "./styles";

interface IPropsFormLogin {
  showRegisterForm: () => void;
}

const FormLogin = ({ showRegisterForm }: IPropsFormLogin) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
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
          <TextField
            error={!!errors.email}
            label="E-mail *"
            variant="outlined"
            id="email"
            size="medium"
            InputLabelProps={{ style: { fontSize: 17 } }}
            helperText={
              errors.email?.message ? (errors.email.message as string) : " "
            }
            {...register("email")}
          />
          <TextField
            error={!!errors.password}
            type="password"
            label={t("Senha *")}
            variant="outlined"
            id="password"
            InputLabelProps={{ style: { fontSize: 17 } }}
            helperText={
              errors.password?.message
                ? (errors.password.message as string)
                : " "
            }
            {...register("password")}
          />
        </FormInputs>
        <p className="forgot__password">{t("Esqueceu sua senha?")}</p>
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
      <button type="button" onClick={() => changeLanguage("pt")}>
        BR
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        IN
      </button>
      {/* Aqui adicionamos o googlelogin ~~ a lib já vem com o ícone! */}
    </LoginContainer>
  );
};

export default FormLogin;
