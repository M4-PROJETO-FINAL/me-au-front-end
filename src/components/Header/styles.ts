import { Link } from "react-router-dom";

import styled from "styled-components";

export const logo = {
  color: "rgba(var(--logoOrange), 1)",
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 4rem;

  width: 100%;
  height: 4.251rem;

  background: rgba(var(--logoOrange), 1);
  body {
    overflow-y: scroll !important;
  }
  & > img {
    width: 249px;
    height: 91px;
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 50%;

    li,
    a {
      font-family: "Public Sans";
      font-weight: 400;
      font-size: 16px;

      &:hover {
        color: rgba(var(--gray3), 1);

        cursor: pointer;
      }
    }
  }

  .button--container {
    display: flex;
    align-items: center;
    margin-left: 60px;
  }
`;

export const Bandeiras = styled.div`
  display: flex;
  align-items: center;
`;

export const Links = styled(Link)`
  margin-right: auto;

  font-family: "Public Sans";
  font-weight: 400;
  font-size: 16px;
`;
