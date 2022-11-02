import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  h3 {
    font-weight: 700;
    font-size: 1.5625rem;
    margin: 0.9375rem;

    @media screen and (max-width: 450px) {
      font-size: 1.25rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1.25rem;

    height: 80%;
    width: 85%;

    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }

  /* #outlined-basic {
    height: 1.25rem;
  } */
`;
