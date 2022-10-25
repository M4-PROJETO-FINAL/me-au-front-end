import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { InputGlobal } from "../../Input";
import { Title } from "../../LoginAndRegister/styles";

interface IFormEmail {
  email: string;
}

const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const ERROR_MESSAGE = t("Campo obrigatório");
  const INVALID_EMAIL_MESSAGE = t("E-mail inválido");

  const formSchema = yup.object().shape({
    email: yup.string().required(ERROR_MESSAGE).email(INVALID_EMAIL_MESSAGE),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEmail>({ resolver: yupResolver(formSchema) });

  const sendEmailToUser = (data: IFormEmail) => {
    console.log(data);
    // Aqui chama o contexto da api de login.. E loga!
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendEmailToUser)}>
        <Title>Esqueceu a senha?</Title>
        <span>
          Para redefinir sua senha preencha o campo abaixo com seu e-mail
        </span>
        <InputGlobal
          error={!!errors.email}
          label="E-mail"
          errorMessage={errors?.email?.message}
          register={register}
          registerName="email"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
