import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    gap: 30px;
  }
`;
