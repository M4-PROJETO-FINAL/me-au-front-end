import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useUserContext } from "../../../contexts/UserContext";
import { ContainerForm } from "./styles";

export interface IFormSchemaEditUser {
  name: string;
  email: string;
  cpf?: string;
  profile_img: string;
}

interface IPropsFormProfile {
  closeModalEditProfile: () => void;
}

const FormProfile = ({ closeModalEditProfile }: IPropsFormProfile) => {
  const { t } = useTranslation();
  const { updateUser, user } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitUpdate = (data) => {
    updateUser(data);
    setTimeout(() => {
      closeModalEditProfile();
    }, 600);
  };

  return (
    <ContainerForm>
      <h3>{t("Edite o seu perfil")}</h3>
      <form onSubmit={handleSubmit(onSubmitUpdate)}>
        <TextField
          defaultValue={user?.name}
          id="outlined-basic"
          label={t("Nome")}
          variant="outlined"
          className="input"
          {...register("name")}
        />
        <TextField
          defaultValue={user?.email}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="input"
          {...register("email")}
        />
        <TextField
          defaultValue={user?.profile_img}
          id="outlined-basic"
          label={t("Imagem")}
          variant="outlined"
          className="input"
          {...register("profile_img")}
        />

        <Button
          type="submit"
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
