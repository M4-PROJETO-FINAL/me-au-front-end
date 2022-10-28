import styled from "styled-components";

export const RegisterAndChooseContainer = styled.div`
  overflow-y: auto;
  height: 400px;
  width: 100%;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
    background-image: -webkit-linear-gradient(top, #9fd4d1 50%, #65c1bc 100%);
  }
`;
export const RegisterPetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 0.8rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const FormPetContainer = styled.form`
  width: 98%;
  padding-bottom: 0.2rem;
`;
export const LeftSideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;

export const RightSideColumn = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;

export const TitleRegister = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
