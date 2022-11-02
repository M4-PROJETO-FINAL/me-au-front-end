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

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 90%;
  margin: 3rem 0 2rem 0;

  @media screen and (max-width: 768px) {
    width: 100%;

    overflow-x: auto;

    margin-bottom: 5rem;
    gap: 1rem;

    flex-direction: row;
    flex-wrap: wrap;
  }
`;
