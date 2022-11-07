import { FormEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronBack } from "react-icons/io5";

import { TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import { useModalFormLoginAndRegister } from "../../../contexts/ModalFormLoginAndRegisterContext";
import { ButtonBackLogin } from "../../LoginAndRegister/FormRegister/styles";
import { Title } from "../../LoginAndRegister/styles";
import { ForgotPasswordContainer, TextMessage } from "../styles";
import {
  ContainerFormInputs,
  ContainerFormVerifyEmail,
  ContainerTextField,
} from "./styles";

const VerifyEmailForm = () => {
  const { t } = useTranslation();

  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [numThree, setNumThree] = useState("");
  const [numFour, setNumFour] = useState("");
  const [isValid, setIsValid] = useState(true);

  const refNumTwo = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refNumThree = useRef<HTMLInputElement | null>(null);
  const refNumFour = useRef<HTMLInputElement | null>(null);

  const { showUpdatePasswordForm, showForgotPasswordForm } =
    useModalFormLoginAndRegister();

  const verifyCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const codeNumber = numOne + numTwo + numThree + numFour;
    console.log(codeNumber.length);
    if (codeNumber.length != 4) {
      setIsValid(false);

      // erro...
      return;
    }
    setIsValid(true);

    showUpdatePasswordForm();

    //verify with code from api
  };

  return (
    <ForgotPasswordContainer>
      <ButtonBackLogin onClick={showForgotPasswordForm}>
        <IoChevronBack />
      </ButtonBackLogin>
      <Title>{t("Verifique seu e-mail")}</Title>
      <TextMessage>
        {t("Por favor preencha com o código enviado ao email")}:{" "}
        gui.wustro@gmail.com
      </TextMessage>
      <ContainerFormVerifyEmail onSubmit={(e) => verifyCode(e)}>
        <ContainerFormInputs>
          <ContainerTextField>
            <TextField
              variant="outlined"
              value={numOne}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNumOne(e.target.value);
                if (e.target.value.length === 1 && refNumTwo.current) {
                  refNumTwo.current.focus();
                }
              }}
              inputProps={{
                maxLength: "1",
              }}
              InputLabelProps={{ style: { fontSize: 17 } }}
            />
          </ContainerTextField>
          <ContainerTextField>
            <TextField
              variant="outlined"
              inputRef={refNumTwo}
              inputProps={{
                maxLength: "1",
              }}
              value={numTwo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNumTwo(e.target.value);
                if (e.target.value.length === 1 && refNumThree.current) {
                  refNumThree.current.focus();
                }
              }}
              InputLabelProps={{ style: { fontSize: 17 } }}
            />
          </ContainerTextField>
          <ContainerTextField>
            <TextField
              inputRef={refNumThree}
              variant="outlined"
              inputProps={{
                maxLength: "1",
              }}
              value={numThree}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNumThree(e.target.value);
                if (e.target.value.length === 1 && refNumFour.current) {
                  refNumFour.current.focus();
                }
              }}
              InputLabelProps={{ style: { fontSize: 17 } }}
            />
          </ContainerTextField>
          <ContainerTextField>
            <TextField
              inputRef={refNumFour}
              value={numFour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNumFour(e.target.value);
              }}
              variant="outlined"
              inputProps={{
                maxLength: "1",
              }}
              InputLabelProps={{ style: { fontSize: 17 } }}
            />
          </ContainerTextField>
        </ContainerFormInputs>
        {!isValid && (
          <Alert severity="error" style={{ padding: "0 10px" }}>
            {t("Código incorreto")}
          </Alert>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          {t("Verificar")}
        </Button>
      </ContainerFormVerifyEmail>
    </ForgotPasswordContainer>
  );
};

export default VerifyEmailForm;
