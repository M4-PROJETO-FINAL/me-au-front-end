import styled from "styled-components";

interface IButtonProps {
  backgroundColor: string;
  color: string;
  height: string;
  width: string;
  fontSize: string;
  borderRadius: string;
  fontWeight: string;
  colorHover: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};

  font-family: "Public Sans";
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.colorHover};
  }
`;
