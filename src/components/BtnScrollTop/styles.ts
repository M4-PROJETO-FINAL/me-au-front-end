import styled from "styled-components";


export const BtnScroll = styled.button`
  position: fixed; 
  background: transparent;
  bottom: 80px;
  right: 20px;
  align-items: center;
  height: 20px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: bounce-in-fwd 1.1s both;
  transition: opacity 0.4s;
  opacity: 0.8;

  &:hover {
    opacity: 1
  }


@keyframes bounce-in-fwd {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: scale(0.84);
            transform: scale(0.84);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  89% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

`