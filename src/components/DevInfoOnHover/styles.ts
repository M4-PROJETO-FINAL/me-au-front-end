import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  height: 105px;
  width: 103px;

  top: 0px;

  gap: 1rem;

  border-radius: 50%;

  &:hover {
    background-color: rgba(74, 62, 62, 0.3);
  }
`;
