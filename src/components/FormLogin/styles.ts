import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 530px;
  width: 100%;
  padding: 2rem;

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
    & > span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;

      color: #aaa8a8;
    }
    .forgot__password {
      text-align: end;
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
