import styled from "styled-components";

export const ContainerModalEditProfile = styled.div`
  background: black;
  .form--modalProfile {
    display: flex;
    flex-direction: column;
  }
`;

export const styleModalProfile = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "85%",
  maxWidth: 400,
  height: "80%",
  maxHeight: 430,

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export const styleDesktopModalProfile = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 400,
  height: "80%",
  maxHeight: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};
