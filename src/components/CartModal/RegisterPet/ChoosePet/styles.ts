import styled from "styled-components";

export const PetList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
  width: 100%;
`;

export const PetItem = styled.li`
  background-color: #e5c5b2;
  width: 80%;
  max-width: 500px;
  height: 60px;
  /* display: flex; */
  display: grid;
  grid-template-areas: "photo titleName icons";
  grid-template-columns: 70px auto 130px;
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 0.5rem;
  border-radius: 7px;
  & > .image__container {
    width: 50px;
    grid-area: photo;
  }

  & > h3 {
    grid-area: titleName;

    font-family: "Public Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 29px;
    justify-self: flex-start;
    align-self: center;
    color: #ffffff;
  }
`;

export const PetIcons = styled.li`
  display: flex;
  grid-area: icons;

  justify-self: end;
`;

export const NotPetsContainer = styled.div`
  text-justify: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
