import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { InputGlobal, InputSelectGlobal } from "../../Input";
import { LeftSideColumn } from "../RegisterPet/styles";
import {
  AddServicesContainer,
  FormServiceContainer,
  LefSideColumn,
  RightSideColumn,
  TitleServices,
  ServicesAddContainer,
  DivSelect,
} from "./styles";

interface IFormSchemaAddServices {
  vacinacao: string | boolean;
  banho: number;
  natacao: number;
  tosaCompleta: number;
  massagem: number;
  racaoPremium: number;
}

const AddicionalServices = () => {
  const { t } = useTranslation();

  const ERROR_MESSAGE = t("Campo obrigatório");
  const ERROR_INVALID_MESSAGE = t("AddServices.Campo inválido");

  const ERROR_MESSAGE_NUMBER = t("AddServices.Apenas números");
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
    vacinacao: yup.string().required(ERROR_MESSAGE),
    banho: yup
      .number()
      .typeError(ERROR_MESSAGE)
      .required(ERROR_MESSAGE)
      .min(0, ERROR_INVALID_MESSAGE)
      .max(30, ERROR_INVALID_MESSAGE),
    natacao: yup
      .number()
      .typeError(ERROR_MESSAGE)
      .required(ERROR_MESSAGE)
      .min(0, ERROR_INVALID_MESSAGE)
      .max(30, ERROR_INVALID_MESSAGE),

    tosaCompleta: yup
      .number()
      .typeError(ERROR_MESSAGE)
      .required(ERROR_MESSAGE)
      .min(0, ERROR_INVALID_MESSAGE)
      .max(30, ERROR_INVALID_MESSAGE),
    massagem: yup
      .number()
      .typeError(ERROR_MESSAGE)
      .required(ERROR_MESSAGE)
      .min(0, ERROR_INVALID_MESSAGE)
      .max(30, ERROR_INVALID_MESSAGE),
    racaoPremium: yup
      .number()
      .typeError(ERROR_MESSAGE)
      .required(ERROR_MESSAGE)
      .min(0, ERROR_INVALID_MESSAGE)
      .max(30, ERROR_INVALID_MESSAGE),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSchemaAddServices>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: IFormSchemaAddServices) => {
    const newData = { ...data };
    newData.vacinacao = data.vacinacao === "yes" ? true : false;
    // Neste momento que será passado como um objeto para a próxima page
    console.log(newData);
  };

  return (
    <AddServicesContainer>
      <div>
        <TitleServices>
          {t("AddServices.Escolha os serviços adicionais!")}
        </TitleServices>
      </div>

      <FormServiceContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <ServicesAddContainer>
          <LeftSideColumn>
            <DivSelect>
              <p>
                Vacina
                <span>(A combinar)</span>
              </p>
              <InputSelectGlobal
                error={!!errors.vacinacao}
                errorMessage={errors?.vacinacao?.message}
                label={t("AddServices.Precisa?")}
                registerName="vacinacao"
                register={register}
                options={optionsYesAndNo}
              />
            </DivSelect>

            <DivSelect>
              <p>
                Banho
                <span>(R$30,00)</span>
              </p>
              <InputGlobal
                error={!!errors.banho}
                type="number"
                label={t("AddServices.Quantidade")}
                errorMessage={errors?.banho?.message}
                register={register}
                registerName="banho"
              />
            </DivSelect>

            <DivSelect>
              <p>
                Natação
                <span>(R$50,00)</span>
              </p>
              <InputGlobal
                error={!!errors.natacao}
                type="number"
                label={t("AddServices.Quantidade")}
                errorMessage={errors?.natacao?.message}
                register={register}
                registerName="natacao"
              />
            </DivSelect>
          </LeftSideColumn>
          <RightSideColumn>
            <DivSelect>
              <p>
                Tosa Completa
                <span>(R$30,00)</span>
              </p>
              <InputGlobal
                error={!!errors.tosaCompleta}
                type="number"
                label={t("AddServices.Quantidade")}
                errorMessage={errors?.tosaCompleta?.message}
                register={register}
                registerName="tosaCompleta"
              />
            </DivSelect>
            <DivSelect>
              <p>
                Massagem
                <span>(R$60,00)</span>
              </p>
              <InputGlobal
                error={!!errors.massagem}
                type="number"
                label={t("AddServices.Quantidade")}
                errorMessage={errors?.massagem?.message}
                register={register}
                registerName="massagem"
              />
            </DivSelect>
            <DivSelect>
              <p>
                Ração Premium
                <span>(R$60,00)</span>
              </p>
              <InputGlobal
                error={!!errors.racaoPremium}
                type="number"
                label={t("AddServices.Quantidade")}
                errorMessage={errors?.racaoPremium?.message}
                register={register}
                registerName="racaoPremium"
              />
            </DivSelect>
          </RightSideColumn>
        </ServicesAddContainer>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16 }}
        >
          Concluir adicionais!
        </Button>
      </FormServiceContainer>
    </AddServicesContainer>
  );
};

export default AddicionalServices;
