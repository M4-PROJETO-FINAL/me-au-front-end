import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 530px;
  width: 100%;
  padding: 2rem;
  position: relative;
  .login__button-close {
    position: absolute;
    background-color: transparent;
    top: 0.5rem;
    right: 0.5rem;
    svg {
      font-size: 1rem;
      fill: #aaa8a8;
      width: 25px;
      height: 25px;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    & > h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 41px;
      text-align: center;
    }
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
  }
  & > .login__register-container {
    display: flex;

    @media screen and (min-width: 768px) {
      flex-direction: column;
    }
    text-align: center;
    & > span:nth-child(1) {
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      color: #aaa8a8;
    }
    .register__button {
      color: #65c1bc;
      background: none;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 530px;
  }
`;

export const FormStyled = styled.form`
  width: 100%;
`;

export const FormInputs = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;
