import styled from "styled-components";

export const StyledConfirmationData = styled.div`
  flex-grow: 1;
  .confirmationTitle {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin: 1rem 0;
  }

  .mainInfo {
    display: flex;
  }

  .leftInfo {
    width: 35%;

    .roomImg {
      width: 95%;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .rightInfo {
    flex-grow: 1;
    padding: 0 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
      padding: 0;
    }

    .roomReservationInfo,
    .servicesInfo,
    .totalInfo {
      display: flex;
      flex-direction: column;
      width: 80%;
      gap: 10px;
      border-bottom: 1px solid black;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }

    .totalInfo {
      border-bottom: none;
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;
