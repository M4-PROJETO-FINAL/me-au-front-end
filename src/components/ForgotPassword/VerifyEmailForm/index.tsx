import { useRef, useState } from "react";

import { TextField } from "@mui/material";

import { Title } from "../../LoginAndRegister/styles";
import { ContainerTextField } from "./styles";

const VerifyEmailForm = () => {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [numThree, setNumThree] = useState("");
  const [numFour, setNumFour] = useState("");

  const refNumTwo = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refNumThree = useRef<HTMLInputElement | null>(null);
  const refNumFour = useRef<HTMLInputElement | null>(null);

  const verifyCode = () => {
    const codeNumber = numOne + numTwo + numThree + numFour;
    if (codeNumber.length != 4) {
      // erro...
      return;
    }

    //verify with code from api
  };

  return (
    <div>
      <Title>Verifique seu e-mail</Title>
      <span>
        Por favor preencha com o código enviado ao email gui.wustro@gmail.com
      </span>
      <form onSubmit={() => verifyCode()}>
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
              width: "40px",
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
              width: "40px",
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
        <div style={{ width: "40px" }}>
          <TextField
            inputRef={refNumThree}
            variant="outlined"
            inputProps={{
              maxLength: "1",
              width: "40px",
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
        </div>
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
              width: "40px",
            }}
            InputLabelProps={{ style: { fontSize: 17 } }}
          />
        </ContainerTextField>
      </form>
    </div>
  );
};

export default VerifyEmailForm;
