import styled from "styled-components";

interface IPropsPetItem {
  selected: boolean;
}

export const PetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
  width: 100%;
`;

export const PetItem = styled.div<IPropsPetItem>`
  max-width: 500px;
  height: 60px;
  width: 90%;
  cursor: pointer;
  z-index: 999;
  display: grid;
  grid-template-areas: "photo titleName icons";
  grid-template-columns: 70px auto 130px;
  padding: 0.5rem;
  border-radius: 7px;
  background-color: ${({ selected }) => (selected ? "#329892" : "#9fd4d1")};

  & > .image__container {
    width: 50px;
    grid-area: photo;
  }

  & > h3 {
    grid-area: titleName;

    font-family: "Public Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    justify-self: flex-start;
    align-self: center;
    color: #ffffff;
  }
  .pet__icon {
    width: 26px;
    height: 26px;
    @media screen and (min-width: 1000px) {
      width: auto;
      height: auto;
    }
  }
  @media screen and (min-width: 1000px) {
    width: 80%;

    & > h3 {
      font-weight: 600;
      font-size: 18px;
    }
  }
`;

export const PetIcons = styled.li`
  display: flex;
  grid-area: icons;
  align-items: center;
  justify-self: end;
`;

export const NotPetsContainer = styled.div`
  text-justify: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
