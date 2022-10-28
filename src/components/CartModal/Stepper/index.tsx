import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

import { useReservationContext } from "../../../contexts/ReservationContext";
import AddicionalServices from "../AddicionalServices/";
import ConfirmationData from "../ConfirmationData";
import RegisterPet from "../RegisterPet";
import { styleStepperDesk, styleStepperMob } from "../style";

const steps = ["Cadastro", "Adicionais", "Confirmação"];

const TimeStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isDesktop = useMediaQuery({ query: "(max-width: 768px)" });
  const { generateRequestObject } = useReservationContext();

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 2) {
      const body = generateRequestObject();
      // await api.post('/reservations', body)
      return;
    }

    if (activeStep === 1) {
      // mexer aqui pra fazer com que o botão "próximo" registre os serviços!
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
            Voltar
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={handleNext}
            variant="contained"
            disabled={activeStep === steps.length && true}
          >
            {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default TimeStepper;
