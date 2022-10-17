import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 530px;
  height: 630px;
  width: 100%;
  padding: 1.5rem 2rem;

  @media screen and (min-width: 768px) {
    width: 530px;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1.5rem;
`;

export const ButtonBackLogin = styled.button`
  position: absolute;
  background-color: transparent;
  top: 0.5rem;
  left: 0.5rem;
  svg {
    color: #aaa8a8;
    width: 30px;
    height: 30px;
  }
`;
