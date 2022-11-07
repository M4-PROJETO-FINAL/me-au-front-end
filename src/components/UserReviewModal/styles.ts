import styled from "styled-components";

export const ButtonBack = styled.button`
  position: absolute;
  background-color: transparent;
  top: 1rem;
  left: 0.5rem;
  svg {
    color: #aaa8a8;
    width: 30px;
    height: 30px;
  }
`;

export const ContainerUserReviewModal = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .review__title {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    text-align: center;
  }
  .review__rating {
  }
`;
