import styled from "styled-components";

export const ContainerProfile = styled.div`
  max-width: 500px;
  @media screen and (min-width: 768px) {
    width: 600px;
  }

  .card-profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 30px;
    padding: 10px;
    height: 255px;
    max-width: 350px;
    background-color: #f1e8e2;
    border-radius: 15px;

    @media screen and (min-width: 768px) {
      margin: 30px;
      max-width: 600px;
      padding: 0;
    }
  }

  .box-icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 15px;

    button {
      background-color: transparent;

      svg {
        font-size: 20px;
      }
    }
  }

  .box-border {
    border-radius: 15px;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;

    @media screen and (min-width: 768px) {
      border: 2px solid white;
      padding: 20px;
    }
  }

  .box-info {
    display: flex;
    flex-direction: row;

    p {
      margin-left: 10px;
      width: 140px;
    }
    span {
      font-weight: 700;
    }
  }
`;
