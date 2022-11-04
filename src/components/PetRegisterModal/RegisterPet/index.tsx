import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { usePetContext } from "../../../contexts/PetsContext";
import { InputGlobal, InputSelectGlobal } from "../../Input";
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
  isVaccinated: string | boolean;
  isNeutered: string | boolean;
  isDocile: string | boolean;
}

const RegisterPetModal = () => {
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
    isVaccinated: yup.string().required(ERROR_MESSAGE),
    isNeutered: yup.string().required(ERROR_MESSAGE),
    isDocile: yup.string().required(ERROR_MESSAGE),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSchemaRegisterPet>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: IFormSchemaRegisterPet) => {
    const newData = { ...data };
    newData.isNeutered = data.isNeutered == "yes" ? true : false;
    newData.isVaccinated = data.isVaccinated == "yes" ? true : false;
    newData.isDocile = data.isDocile == "yes" ? true : false;
    console.log(newData);
    createPet(newData);
  };

  return (
    <RegisterAndChooseContainer>
      <div>
        <TitleRegister>{t("Cadastrar pet.Cadastre o seu pet")}</TitleRegister>
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
              error={!!errors.isDocile}
              errorMessage={errors?.isDocile?.message}
              label={t("Cadastrar pet.É dócil")}
              registerName="isDocile"
              register={register}
              options={optionsYesAndNo}
            />
            <InputSelectGlobal
              error={!!errors.isNeutered}
              errorMessage={errors?.isNeutered?.message}
              label={t("Cadastrar pet.É castrado")}
              registerName="isNeutered"
              register={register}
              options={optionsYesAndNo}
            />
            <InputSelectGlobal
              error={!!errors.isVaccinated}
              errorMessage={errors?.isVaccinated?.message}
              label={t("Cadastrar pet.É vacinado")}
              registerName="isVaccinated"
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
          Cadastrar pet
        </Button>
      </FormPetContainer>
    </RegisterAndChooseContainer>
  );
};

export default RegisterPetModal;
