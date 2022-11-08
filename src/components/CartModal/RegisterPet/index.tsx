import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { usePetContext } from "../../../contexts/PetsContext";
import { InputGlobal, InputSelectGlobal } from "../../Input";
import ChoosePet from "./ChoosePet";
import {
  FormPetContainer,
  LeftSideColumn,
  RegisterAndChooseContainer,
  RegisterPetContainer,
  RightSideColumn,
  TitleRegister,
} from "./styles";

export interface IFormSchemaRegisterPet {
  name: string;
  type?: string;
  age: number;
  vaccinated: string | boolean;
  neutered: string | boolean;
  docile: string | boolean;
}

const RegisterPet = () => {
  const { t } = useTranslation();
  const { createPet } = usePetContext();
  const ERROR_MESSAGE = t("Campo obrigatório");
  const ERROR_INVALID_MESSAGE = t("Cadastrar pet.Campo inválido");
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
    type: yup.string().required(ERROR_MESSAGE),
    age: yup
      .number()
      .typeError(ERROR_MESSAGE)
      .required(ERROR_MESSAGE)
      .min(0, ERROR_INVALID_MESSAGE)
      .max(30, ERROR_INVALID_MESSAGE),
    vaccinated: yup.string().required(ERROR_MESSAGE),
    neutered: yup.string().required(ERROR_MESSAGE),
    docile: yup.string().required(ERROR_MESSAGE),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSchemaRegisterPet>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: IFormSchemaRegisterPet) => {
    const newData = { ...data };
    newData.neutered = data.neutered == "yes" ? true : false;
    newData.vaccinated = data.vaccinated == "yes" ? true : false;
    newData.docile = data.docile == "yes" ? true : false;
    createPet(newData);
  };
  return (
    <RegisterAndChooseContainer>
      <div>
        <TitleRegister>{t("Cadastrar pet.Escolha seu pet")}</TitleRegister>
        <ChoosePet />
      </div>
      <div>
        <TitleRegister>{t("Cadastrar pet.Cadastre seu pet")}</TitleRegister>
      </div>
      <FormPetContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <RegisterPetContainer>
          <LeftSideColumn>
            <InputGlobal
              error={!!errors.name}
              label={t("Cadastrar pet.Nome")}
              errorMessage={errors?.name?.message}
              register={register}
              registerName="name"
            />
            <InputGlobal
              error={!!errors.age}
              type="number"
              label={t("Cadastrar pet.Idade")}
              errorMessage={errors?.age?.message}
              register={register}
              registerName="age"
            />
            <InputSelectGlobal
              error={!!errors.type}
              errorMessage={errors?.type?.message}
              label={t("Cadastrar pet.Tipo")}
              registerName="type"
              register={register}
              options={[
                {
                  value: "dog",
                  label: t("Cadastrar pet.Cachorro"),
                },
                {
                  value: "cat",
                  label: t("Cadastrar pet.Gato"),
                },
              ]}
            />
          </LeftSideColumn>
          <RightSideColumn>
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
          </RightSideColumn>
        </RegisterPetContainer>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          {t("Cadastrar pet.Cadastrar pet")}
        </Button>
      </FormPetContainer>
    </RegisterAndChooseContainer>
  );
};

export default RegisterPet;
