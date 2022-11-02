import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .IconsOnHover {
    opacity: 0;
    transition: 0.4s;
  }

  &:hover .IconsOnHover {
    opacity: 1;
  }
`;
