import styled from "styled-components";

export const ContainerReservations = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  width: 100%;
  height: 52.813rem;

  overflow: scroll;
  background-color: #fff5ef;
  font-family: "Nunito";
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 20%);
  @media screen and (max-width: 768px) {
    height: 100vh;
    width: fit-content;
  }

  .card--reservations {
    width: 327px;
    min-width: 228px;
    height: 340px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;

    @media screen and (max-width: 430px) {
      height: 309px;
    }
  }

  .card--title {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #e5c5b2;
    height: 50px;
    font-weight: 700;
  }

  .card--image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 142px;
    width: 100%;

    img {
      width: 200px;
      height: 115px;
      border-radius: 6px;
      object-fit: cover;
    }
  }

  .card--info {
    display: flex;
    margin-top: 5px;

    @media screen and (max-width: 700px) {
      font-size: 13px;
    }

    p {
      width: 100px;
      margin: 0 0 10px 64px;

      @media screen and (max-width: 350px) {
        margin: 0 0 5px 18px;
      }

      @media screen and (min-width: 350px) {
        margin: 0 0 5px 46px;
      }
    }
  }
  .card--button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-top: 5px;
    padding-bottom: 8px;

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
