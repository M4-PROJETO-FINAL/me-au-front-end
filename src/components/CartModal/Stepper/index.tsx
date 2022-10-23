import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

import RegisterPet from "../RegisterPet";

const steps = ["Cadastro", "Adicionais", "Confirmação"];

const TimeStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isDesktop = useMediaQuery({ query: "(max-width: 1000px)" });

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
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
      <Stepper
        alternativeLabel={isDesktop ? false : true}
        activeStep={activeStep}
        orientation={isDesktop ? "vertical" : "horizontal"}
        sx={{
          "& .MuiStepConnector-line": {
            borderColor: "#000000",
            height: "180px",
          },
        }}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        <RegisterPet />

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Voltar
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={handleNext}
            disabled={activeStep === steps.length && true}
          >
            {activeStep === steps.length - 1 ? "Finalizar" : "Proximo"}
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default TimeStepper;
