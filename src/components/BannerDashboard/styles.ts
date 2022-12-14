import styled from "styled-components";

import bg_dashboard from "../../assets/bg_dashboard.svg";

export const ContainerDb = styled.div`
  max-width: 100vw;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${bg_dashboard});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 450px;

  @media screen and (max-width: 426px) {
      height: 320px;
      padding-top: 2rem;
    }

  .title--db {
    font-weight: bold;

    @media screen and (max-width: 426px) {
      font-size: 1.5rem;
    }
  }

  .subtitle--db {
    @media screen and (max-width: 426px) {
      display: none;
    }
  }

  .box--btn {
    display: flex;
    gap: 15px;

    @media screen and (max-width: 426px) {
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }

    .btn--bg {
      min-width: 135px;
      max-width: 250px;
    }

    .border {
      border: 1px solid rgba(var(--black), 1);
    }
  }

  .db--mobile {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgPetIco = styled.img`
  width: 12%;
  position: absolute;
  top: -10px;
  z-index: -1;

  @media screen and (max-width: 426px) {
    width: 25%;
  }
`;

export const ImgDb = styled.img`
  max-width: 450px;
  min-width: 170px;

  @media screen and (max-width: 425px) {
    width: 140%;
  }
`;
