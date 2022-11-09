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
import { ContainerGap, FormForgotPassword } from "./styles";

export interface IFormEmail {
  email: string;
}

const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const { showLoginForm, forgotPassword, setEmail } =
    useModalFormLoginAndRegister();
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
    setEmail(data.email);
    forgotPassword(data);
  };

  return (
    <ForgotPasswordContainer>
      <ButtonBackLogin onClick={showLoginForm}>
        <IoChevronBack />
      </ButtonBackLogin>
      <FormForgotPassword onSubmit={handleSubmit(sendEmailToUser)}>
        <ContainerGap>
          <Title>{t("Esqueceu a senha?")}</Title>
          <TextMessage>
            {t(
              "Para redefinir sua senha preencha o campo abaixo com seu e-mail",
            )}
          </TextMessage>
          <div>
            <InputGlobal
              error={!!errors.email}
              label="E-mail"
              errorMessage={errors?.email?.message}
              register={register}
              registerName="email"
              isFullWidth={true}
            />
          </div>
        </ContainerGap>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          {t("Enviar")}
        </Button>
      </FormForgotPassword>
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordForm;
