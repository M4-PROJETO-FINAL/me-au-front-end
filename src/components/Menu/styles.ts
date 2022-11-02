import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  padding: 2rem;

  width: 100%;

  border-radius: 15px;

  cursor: pointer;

  background-color: #e6c5b2;

  @media screen and (max-width: 426px) {
    padding: 2rem 0.5rem;
  }
`;

export const ProfileTab = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 15.688rem;
  height: 5.313rem;

  background-color: #fff5ef;

  &:hover {
    background-color: #ffddca;
  }

  &:focus {
    background-color: #ffddca;
  }

  border-radius: 15px;

  div {
    p:nth-child(1) {
      font-family: "Nunito";
      font-weight: 700;
    }

    &:nth-child(2) {
      font-family: "Nunito";
      font-weight: 300;
    }

    display: flex;
    flex-direction: column;
  }
`;

export const MenuTabs = styled.button`
  display: flex;
  align-items: center;

  width: 15.625rem;
  height: 4.375rem;

  border-radius: 15px;

  padding: 0 1rem;
  padding-right: 3rem;

  gap: 1rem;

  transition: all 250ms;

  font-family: "Nunito";
  font-weight: 700;

  background-color: #fff5ef;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    background-color: #ffddca;
  }

  &:focus {
    background-color: #ffddca;
  }
`;

export const Paragraph = styled.p`
  padding-left: 1rem;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media screen and (max-width: 426px) {
    display: flex;
    flex-direction: row;

    width: 100%;

    overflow-x: auto;

    gap: 0.5rem;
  }
`;
