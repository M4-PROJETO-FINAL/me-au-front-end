import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

import { useReservationContext } from "../../../contexts/ReservationsContext/ReservationCreateContext";
import { useUserContext } from "../../../contexts/UserContext";
import { api } from "../../../services";
import AddicionalServices from "../AddicionalServices/";
import ConfirmationData from "../ConfirmationData";
import RegisterPet from "../RegisterPet";
import { styleStepperDesk, styleStepperMob } from "../style";

const TimeStepper = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });
  const { generateRequestObject, petsAmount, selectedPets, services } =
    useReservationContext();
  const { handleCloseCartModal } = useUserContext();
  const steps = [
    `${t("Cadastro")}`,
    `${t("Adicionais")}`,
    `${t("Confirmação")}`,
  ];

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    if (activeStep === 2) {
      const body = generateRequestObject();
      try {
        await api.post("/reservations", body);
        toast.success(`${t("Reserva criada com sucesso!")}`);
        handleCloseCartModal();
      } catch (err: any) {
        toast.error(err.message);
        console.log(err);
      }
      return;
    }

    if (activeStep === 1 && Object.keys(services).length === 0) {
      toast.warning(`${t("Clique em confirmar serviços antes de avançar!")}`);
      return;
    }

    if (activeStep === 0 && selectedPets.length < petsAmount) {
      const remaining = petsAmount - selectedPets.length;
      toast.warning(
        `${t("Selecione mais")} ${remaining} ${t("more")} pet${
          remaining > 1 ? "s" : ""
        }`,
      );
      return;
    }

    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box display={"flex"} flexDirection={isDesktop ? "row" : "column"}>
        <Stepper
          alternativeLabel={isDesktop ? false : true}
          activeStep={activeStep}
          orientation={isDesktop ? "vertical" : "horizontal"}
          sx={isDesktop ? styleStepperMob : styleStepperDesk}
        >
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{!isDesktop && label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 && <RegisterPet />}
        {activeStep === 1 && <AddicionalServices />}
        {activeStep === 2 && <ConfirmationData />}
      </Box>

      <>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            {t("Voltar")}
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={handleNext}
            variant="contained"
            disabled={activeStep === steps.length && true}
          >
            {activeStep === steps.length - 1
              ? `${t("Finalizar")}`
              : `${t("Proximo")}`}
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default TimeStepper;
