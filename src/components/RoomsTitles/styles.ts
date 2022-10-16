import styled from "styled-components";

export const RoomTitles = styled.section`
  display: flex;
  width: 95%;
  margin: 2rem 1rem;
  height: 7rem;
  align-items: center;
  justify-content: center;
  line-height: 50px;

  h2 {
    font-family: "Nunito";
    font-size: 27px;
    font-weight: bold;

    @media screen and (min-width: 600px) {
      font-size: 30px;
    }
    @media screen and (min-width: 768px) {
      font-size: 35px;
    }
  }

  img {
    margin-right: -25px;
    margin-top: -70px;
    height: 50px;

    @media screen and (min-width: 350px) {
      margin-top: -40px;
    }

    @media screen and (min-width: 600px) {
      height: 65px;
    }
  }
`;
