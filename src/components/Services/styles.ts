import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 4rem auto;
  padding-left: 2rem;
  font-family: "Public Sans", sans-serif;
  max-width: 1200px;

  h3 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 2rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  .ulContainer {
    width: 100%;
    max-width: 100%;
    overflow: auto;
    height: 25rem;
  }

  ul {
    min-width: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 330px;
    width: 330px;
    border-radius: 50%;
    border: 1px solid #ff8947;

    @media screen and (max-width: 500px) {
      height: 280px;
      width: 280px;

      img {
        height: 260px;
        width: 260px;
      }
    }
  }

  .cardBackground {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    height: 40px;
    background: #ff8947;
    color: white;
    font-weight: 600;
    border-radius: 50px;
    position: relative;
    bottom: 330px;

    @media screen and (max-width: 500px) {
      bottom: 280px;
    }
  }
`;
