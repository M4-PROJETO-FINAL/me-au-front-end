import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { ContainerForm } from "./styles";

const FormProfile = () => {
  const { t } = useTranslation();

  return (
    <ContainerForm>
      <h3>{t("Edite o seu perfil")}</h3>
      <form>
        <TextField
          id="outlined-basic"
          label={t("Nome")}
          variant="outlined"
          className="input"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="input"
        />
        <TextField
          id="outlined-basic"
          label={t("Imagem")}
          variant="outlined"
          className="input"
        />

        <Button
          type="button"
          variant="contained"
          sx={{
            bgcolor: "#65C1BC",
            color: "white",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "100%",
          }}
        >
          {t("Salvar")}
        </Button>
      </form>
    </ContainerForm>
  );
};

export default FormProfile;
