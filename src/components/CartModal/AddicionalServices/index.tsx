import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import * as yup from "yup";

import { useReservationContext } from "../../../contexts/ReservationsContext/ReservationCreateContext";
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

export interface IReservationServicesAmounts {
  vaccine: string | boolean;
  bath: number;
  swimming: number;
  grooming: number;
  massage: number;
  premiumFood: number;
}

const AddicionalServices = () => {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });
  const { setServices } = useReservationContext();

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
    vaccine: yup.string().notRequired(),
    bath: yup
      .number()
      .nullable()
      .moreThan(-1)
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    swimming: yup
      .number()
      .nullable()
      .moreThan(-1)
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    grooming: yup
      .number()
      .nullable()
      .moreThan(-1)
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    massage: yup
      .number()
      .nullable()
      .moreThan(-1)
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    premiumFood: yup
      .number()
      .nullable()
      .moreThan(-1)
      .transform((_, val) => (val !== "" ? Number(val) : null)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReservationServicesAmounts>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IReservationServicesAmounts) => {
    const newData = { ...data };
    newData.vaccine = data.vaccine === "yes" ? true : false;
    setServices(newData);
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
                    <span>{t("AddServices.(A combinar)")}</span>
                  </p>
                  <InputSelectGlobal
                    error={!!errors.vaccine}
                    label="Sel."
                    registerName="vaccine"
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
                    error={!!errors.bath}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="bath"
                    fontSize={13}
                  />
                </DivSelect>

                <DivSelect>
                  <p>
                    {t("AddServices.Natação")}
                    <span>(R$50,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.swimming}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="swimming"
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
                    error={!!errors.grooming}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="grooming"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Massagem")}
                    <span>(R$60,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.massage}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="massage"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Ração Premium")}
                    <span>(R$10,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.premiumFood}
                    type="number"
                    label="Qtd."
                    register={register}
                    registerName="premiumFood"
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
                    error={!!errors.vaccine}
                    errorMessage={errors?.vaccine?.message}
                    label="Sel."
                    registerName="vaccine"
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
                    error={!!errors.bath}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.bath?.message}
                    register={register}
                    registerName="bath"
                    fontSize={13}
                  />
                </DivSelect>

                <DivSelect>
                  <p>
                    {t("AddServices.Natação")}
                    <span>(R$50,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.swimming}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.swimming?.message}
                    register={register}
                    registerName="swimming"
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
                    error={!!errors.grooming}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.grooming?.message}
                    register={register}
                    registerName="grooming"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Massagem")}
                    <span>(R$60,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.massage}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.massage?.message}
                    register={register}
                    registerName="massage"
                    fontSize={13}
                  />
                </DivSelect>
                <DivSelect>
                  <p>
                    {t("AddServices.Ração Premium")}
                    <span>(R$10,00)</span>
                  </p>
                  <InputGlobal
                    error={!!errors.premiumFood}
                    type="number"
                    label={t("AddServices.Quantidade")}
                    errorMessage={errors?.premiumFood?.message}
                    register={register}
                    registerName="premiumFood"
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
