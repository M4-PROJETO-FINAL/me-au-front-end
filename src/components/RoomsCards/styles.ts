import styled from "styled-components";

export const RoomSection = styled.section`
  width: 95%;
  font-family: "Nunito", sans-serif;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 290px;
      max-width: 430px;

      img {
        width: 285px;
        height: 214px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;
