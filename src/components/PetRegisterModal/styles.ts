import styled from "styled-components";

import { lightTheme } from "../../styles/themes";

export const styleStepperMob = {
  width: "20px",
  position: "relative",
  top: "10px",
  left: "-20px",

  "& .MuiStepConnector-line": {
    height: "180px",
  },
}

export const styleStepperDesk = {
  width: "100%",
  position: "static",
  top: "0",
  left: "0",

  "& .epMYbE": {
    marginTop: "8px"
  }
}

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "95%",
  maxWidth: 400,
  height: "95%",
  maxHeight: 600,

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export const styleDesktop = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 800,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export const bgBlur = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  backdropFilter: "blur(4px)",
};

export const ButtonCloseModal = styled.button`
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 3px;
  svg {
    font-size: 1rem;
    fill: #000;
    width: 35px;
    height: 35px;

    &:hover path {
      fill: ${lightTheme.colors.aquaLight};
      transition: 200ms;
    }
  }
`;
