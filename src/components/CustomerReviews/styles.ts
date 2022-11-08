import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 2rem 0;
  padding-left: 2rem;
  font-family: "Public Sans", sans-serif;

  h3 {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    .reviewCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 240px;
      max-width: 320px;
      width: 28%;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        z-index: 2;
      }

      .cardBackground {
        background: rgba(var(--logoOrange), 1);
        border-radius: 34px;
        margin-top: -60px;
        padding-top: 60px;
        padding-bottom: 2rem;

        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        h5 {
          margin-top: 1rem;
        }

        .stars {
          margin-top: 1rem;
          display: flex;
          gap: 2px;
        }

        p {
          margin-top: 1rem;
          width: 75%;
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
`;
