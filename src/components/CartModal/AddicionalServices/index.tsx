import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { InputGlobal, InputSelectGlobal } from "../../Input";
import {
  AddServicesContainer,
  FormServiceContainer,
  LeftSideColumn,
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

  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });

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
    vacinacao: yup.string().notRequired(),
    banho: yup
      .number()
      .nullable()
      .positive()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    natacao: yup
      .number()
      .nullable()
      .positive()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    tosaCompleta: yup
      .number()
      .nullable()
      .positive()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    massagem: yup
      .number()
      .nullable()
      .positive()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    racaoPremium: yup
      .number()
      .nullable()
      .positive()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
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
          {isDesktop ? (
            <>
              <LeftSideColumn>
                <DivSelect>
                  <p>
                    {t("AddServices.Vacina")}
                    <span>(A combinar)</span>
                  </p>
                  <InputSelectGlobal
                    error={!!errors.vacinacao}
                    label="Sel."
                    registerName="vacinacao"
                    register={register}
                    options={optionsYesAndNo}
                    fontSize={13}
                  />
                </DivSelect>

                <DivSelect>
                  <p>
                    {t("AddServices.Banho")}
                    <span>(R$30,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.banho}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="banho"
                    fontSize={13}
                  />
                </DivSelect>

                <DivSelect>
                  <p>
                    {t("AddServices.Natação")}
                    <span>(R$50,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.natacao}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="natacao"
                    fontSize={13}
                  />
                </DivSelect>
              </LeftSideColumn>
              <RightSideColumn>
                <DivSelect>
                  <p>
                    {t("AddServices.Tosa Completa")}
                    <span>(R$30,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.tosaCompleta}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="tosaCompleta"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Massagem")}
                    <span>(R$60,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.massagem}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="massagem"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Ração Premium")}
                    <span>(R$60,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.racaoPremium}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="racaoPremium"
                    fontSize={13}
                  />
                </DivSelect>
              </RightSideColumn>
            </>
          ) : (
            <>
              <LeftSideColumn>
                <DivSelect>
                  <p>
                    {t("AddServices.Vacina")}
                    <span>{t("AddServices.(A combinar)")}</span>
                  </p>
                  <InputSelectGlobal
                    error={!!errors.vacinacao}
                    errorMessage={errors?.vacinacao?.message}
                    label="Sel."
                    registerName="vacinacao"
                    register={register}
                    options={optionsYesAndNo}
                    fontSize={13}
                  />
                </DivSelect>

                <DivSelect>
                  <p>
                    {t("AddServices.Banho")}
                    <span>(R$30,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.banho}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.banho?.message}
                    register={register}
                    registerName="banho"
                    fontSize={13}
                  />
                </DivSelect>

                <DivSelect>
                  <p>
                    {t("AddServices.Natação")}
                    <span>(R$50,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.natacao}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.natacao?.message}
                    register={register}
                    registerName="natacao"
                    fontSize={13}
                  />
                </DivSelect>
              </LeftSideColumn>
              <RightSideColumn>
                <DivSelect>
                  <p>
                    {t("AddServices.Tosa Completa")}
                    <span>(R$30,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.tosaCompleta}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.tosaCompleta?.message}
                    register={register}
                    registerName="tosaCompleta"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Massagem")}
                    <span>(R$60,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.massagem}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.massagem?.message}
                    register={register}
                    registerName="massagem"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Ração Premium")}
                    <span>(R$60,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.racaoPremium}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.racaoPremium?.message}
                    register={register}
                    registerName="racaoPremium"
                    fontSize={13}
                  />
                </DivSelect>
              </RightSideColumn>
            </>
          )}
        </ServicesAddContainer>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: 16, marginTop: 3 }}
        >
          {t("AddServices.Concluir adicionais!")}
        </Button>
      </FormServiceContainer>
    </AddServicesContainer>
  );
};

export default AddicionalServices;
