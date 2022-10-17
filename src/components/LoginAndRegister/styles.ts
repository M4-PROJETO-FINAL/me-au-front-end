import styled from "styled-components";

export const CloseButton = styled.button`
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

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #aaa8a8;
`;

export const ButtonLink = styled.button`
  color: #65c1bc;
  background: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
