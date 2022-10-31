import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;

  h1 {
    font-weight: 400;
    font-size: 40px;
  }

  .Gap {
    gap: 1rem;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  width: 75%;
  max-width: 50rem;

  padding: 2rem;

  background: rgba(var(--logoOrange), 1);

  border-radius: 7px;

  div {
    display: flex;

    gap: 2rem;
  }

  input {
    height: 1.4375em;
  }

  @media screen and (max-width: 600px) {
    margin: 3rem;
  }

  .sc-dIfARi {
    width: 100%;
    max-width: 35rem;
  }

  .sc-bjfHbI {
    width: 100%;
    max-width: 35rem;
  }

  .MuiFormControl-root-cIKZZJ {
    margin: 0.5rem;
  }
`;

export const HappyDog = styled.div`
  position: relative;

  margin: 2rem 0 2rem 0;

  img:nth-child(1) {
    width: 5.813rem;
    height: 5.5rem;

    position: absolute;

    top: -3.438rem;
    left: -3.125rem;
  }

  img:nth-child(2) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Map = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0 2rem 0;

  width: 75%;
  max-width: 50rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;

    img {
      display: none;
    }
  }
`;

export const SocialIcons = styled.img`
  cursor: pointer;
`;
