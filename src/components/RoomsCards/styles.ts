import styled from "styled-components";

export const RoomSection = styled.section`
  width: 95%;
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 80px;

    .divRoomCard-item-1 {
      order: 2;
      width: 100%;
      height: 90%;

      @media screen and (min-width: 500px) {
        order: 1;

        height: 50%;
      }
    }

    .divRoomCard-item-2 {
      order: 1;
      width: 100%;

      div {
        border: 1px solid rgba(70, 135, 131, 0.25);
        filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.25));
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        width: 100%;
        flex-direction: column;
      }

      p {
        display: none;
      }

      @media screen and (min-width: 500px) {
        order: 2;
        line-height: 23.5px;

        height: 35%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;

        div {
          height: 4rem;
          width: 80%;
        }

        p {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60%;
          font-size: 20px;
          font-weight: 400;
          width: 80%;
          color: rgba(var(--black), 1);
        }
      }
    }

    .divRoomCard-item-3 {
      order: 3;
      display: flex;
      align-self: end;
      align-items: center;
      border-radius: 0.9375rem;
      margin-top: -68px;
      background-color: rgba(var(--aquaLight), 1);
      & > button {
        padding: 1.5rem 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span {
        display: none;
      }

      img {
        width: 26px;
        height: 28px;
      }

      @media screen and (min-width: 500px) {
        margin-top: 0px;
        align-self: unset;

        img {
          display: none;
        }

        span {
          display: initial;
          color: white;
          font-family: Public Sans;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0em;
          text-align: left;
          width: 290px;
          height: 30px;
          padding: 1rem;
        }
      }
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      min-width: 290px;
      max-width: 430px;
      width: 18.125rem;

      min-height: 275px;
      max-height: 632px;
      height: 17.5rem;
      gap: 15px;

      background-color: #ffddca;
      border-radius: 5px;

      :nth-child(2) {
        background-color: #d2edec;

        @media screen and (min-width: 500px) {
          .divRoomCard-item-1 {
            order: 3;
            height: 51.5%;
          }

          .divRoomCard-item-2 {
            order: 1;
            margin-top: 10px;
          }

          .divRoomCard-item-3 {
            order: 2;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;
      }

      h3 {
        font-weight: 700;
        font-size: 1.5rem;
      }

      @media screen and (min-width: 500px) {
        width: 20rem;
        height: 38rem;
      }
    }
  }
`;
