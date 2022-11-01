import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 530px;
  width: 100%;
  padding: 1.5rem 2rem;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    & > span:nth-child(2) {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #aaa8a8;
      padding-bottom: 1.5rem;
    }
  }
  .forgot__password {
    text-align: end;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    background-color: transparent;
    width: 100%;
  }
  & > .login__register-container {
    display: flex;

    @media screen and (min-width: 768px) {
      flex-direction: column;
    }
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    width: 530px;
  }
`;
