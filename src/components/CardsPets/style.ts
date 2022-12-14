import { Container } from "@mui/material";
import styled from "styled-components";

export const ContainerPets = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff5ef;
  font-family: "Nunito";
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 20%);

  .card--pets {
    display: flex;
    flex-direction: column;
    border: 1px solid var((--logoOrange), 1);
    border-left: 7px solid #e6c5b2;
    border-right: 7px solid #e6c5b2;
    border-radius: 15px;
    padding: 10px;
    max-width: 700px;
    min-width: 280px;
    width: 90%;
    background-color: white;
    align-self: center;
    box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 20%);

    .header--card {
      display: flex;
      justify-content: space-between;

      .btn--cardPet {
        background: transparent;

        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  .info--card {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    .info--column {
      display: flex;
      flex-direction: column;
      gap: 6px;

      @media screen and (min-width: 768px) {
        width: 45%;
      }
    }

    .info--row {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 10px;
        justify-content: space-between;
      }
    }
  }

  .footer--card {
    padding: 20px 0 20px 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    width: 286px;
    align-self: center;

    img {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 10px;
    }
  }
`;

export const fontBold = {
  fontWeight: "bold",
};

export const fontLink = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  textDecoration: "underline",
  cursor: "pointer",
};
