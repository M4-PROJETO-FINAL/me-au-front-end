import * as React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

import Logo from "../../assets/logoMeAuBGCWhite.png";
import { LoginContainer, FormInputs, FormStyled } from "./styles";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitFunction = (data) => {
    // Aqui chama o contexto da api de login.. E loga!
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <LoginContainer>
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
                helperText={
                  errors.password?.message
                    ? (errors.password.message as string)
                    : " "
                }
                {...register("password")}
              />
            </FormInputs>
            <p className="forgot__password">Esqueceu sua senha?</p>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Entrar
            </Button>
          </FormStyled>

          <div>
            <span>Ainda não tem uma conta?</span>
            <button onClick={() => "abrir modal de cadastro"}>
              Cadastre-se aqui
            </button>
          </div>
          <div>Ou entre com:</div>
        </LoginContainer>
      </Dialog>
    </div>
  );
}
