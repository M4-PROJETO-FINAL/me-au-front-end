import styled from "styled-components";

export const StyledRoomSection = styled.section`
  display: flex;
  justify-content: center;

  .container {
    width: 90%;
    max-width: 1000px;
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    a {
      padding-right: 1.5rem;
      border-right: 1px solid black;
    }

    .roomTitle {
      margin-left: 20px;
      border-radius: 7px;
      font-weight: bold;
      font-size: 20px;
    }
  }

  .main {
    background: rgba(var(--logoOrange), 1);
    padding: 20px 30px;
    margin-bottom: 50px;
    border-radius: 7px;

    .top {
      display: flex;
      justify-content: space-evenly;
      max-height: 300px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        max-height: none;
      }
      .toyImgMobileContainer {
        width: 300px;
        display: flex;
        justify-content: flex-end;
        .toyImgMobile {
          z-index: 10;
          width: 120px;
          margin-bottom: -55px;
          margin-right: -40px;
        }
      }

      .roomImg {
        border-radius: 7px;
        max-width: 90%;
        @media screen and (max-width: 768px) {
          max-width: 300px;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .reservationBtn {
          border-radius: 10px;
          padding: 1rem 2rem;
          padding-bottom: 2rem;
          height: 2rem;
          background-color: rgba(var(--aquaLight), 1);
          color: white;
          font-weight: 600;
        }
      }
    }

    .bottom {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-evenly;
      margin-top: 40px;

      @media screen and (max-width: 768px) {
        display: none;
      }

      .col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        p {
          white-space: pre-wrap;
          font-size: 18px;
        }

        svg {
        }
      }
    }
  }
  .toyContainer {
    display: flex;
    justify-content: end;
    .toyImg {
      margin-top: -180px;
      margin-right: -20px;
      width: 200px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const DialogInner = styled.div`
  max-width: 300px;
  /* background: red; */
  background: #fff5ef;
  border: #ffddca solid 5px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0px 15px 25px;
  .closeContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    svg {
      margin-right: -17px;
      margin-top: -2px;
    }
  }
`;
