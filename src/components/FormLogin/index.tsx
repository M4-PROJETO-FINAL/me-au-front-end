import * as React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

import Logo from "../../assets/logoMeAuBGCWhite.png";
import { LoginContainer, FormInputs, FormStyled } from "./styles";

interface IPropsFormLogin {
  openFormLogin: boolean;
  handleClose: () => void;
}

const FormLogin = ({ openFormLogin, handleClose }: IPropsFormLogin) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    // Aqui chama o contexto da api de login.. E loga!
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <Dialog open={openFormLogin} onClose={handleClose}>
        <LoginContainer>
          <button className="login__button-close" onClick={() => handleClose()}>
            <AiOutlineClose />
          </button>
          <img src={Logo} alt="Logo" />
          <div>
            <h2>Seja bem-vindo</h2>
            <span>Já sou cliente</span>
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
                label="Senha *"
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
            <p className="forgot__password">Esqueceu sua senha?</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold", fontSize: 16 }}
            >
              Entrar
            </Button>
          </FormStyled>

          <div className="login__register-container">
            <span>Ainda não tem uma conta?</span>
            <button
              className="register__button"
              onClick={() => "abrir modal de cadastro"}
            >
              Cadastre-se aqui
            </button>
          </div>
          <div>Ou entre com:</div>
          {/* Aqui adicionamos o googlelogin ~~ a lib já vem com o ícone! */}
        </LoginContainer>
      </Dialog>
    </div>
  );
};

export default FormLogin;
