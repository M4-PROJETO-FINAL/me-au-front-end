import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { InputGlobal, InputSelectGlobal } from "../../Input";
import { ContainerForm } from "../../MyProfile/Form/styles";

export interface IFormSchemaEditPet {
  name: string;
  vaccinated: string | boolean;
  neutered: string | boolean;
  docile: string | boolean;
}

const FormEditPet = () => {
  const { t } = useTranslation();

  const ERROR_MESSAGE = t("Campo obrigatório");

  const optionsYesAndNo = [
    {
      value: "yes",
      label: t("Cadastrar pet.Sim"),
    },
    {
      value: "no",
      label: t("Cadastrar pet.Não"),
    },
  ];

  const formSchema = yup.object().shape({
    name: yup.string().required(ERROR_MESSAGE),
    vaccinated: yup.string().required(ERROR_MESSAGE),
    neutered: yup.string().required(ERROR_MESSAGE),
    docile: yup.string().required(ERROR_MESSAGE),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSchemaEditPet>({ resolver: yupResolver(formSchema) });

  return (
    <ContainerForm>
      <h3>Edite seu pet</h3>
      <form>
        <InputGlobal
          error={!!errors.name}
          label={t("Cadastrar pet.Nome")}
          errorMessage={errors?.name?.message}
          register={register}
          registerName="name"
        />
        <InputSelectGlobal
          error={!!errors.docile}
          errorMessage={errors?.docile?.message}
          label={t("Cadastrar pet.É dócil")}
          registerName="docile"
          register={register}
          options={optionsYesAndNo}
        />
        <InputSelectGlobal
          error={!!errors.neutered}
          errorMessage={errors?.neutered?.message}
          label={t("Cadastrar pet.É castrado")}
          registerName="neutered"
          register={register}
          options={optionsYesAndNo}
        />
        <InputSelectGlobal
          error={!!errors.vaccinated}
          errorMessage={errors?.vaccinated?.message}
          label={t("Cadastrar pet.É vacinado")}
          registerName="vaccinated"
          register={register}
          options={optionsYesAndNo}
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
          Salvar
        </Button>
      </form>
    </ContainerForm>
  );
};

export default FormEditPet;
