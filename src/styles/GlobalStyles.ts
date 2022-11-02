import { createGlobalStyle, css } from "styled-components";

export const swiperStyle = css`
  /* stylelint-disable */

  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 1.875rem;
    /* Fix of Webkit flickering */
    z-index: 1;
    height: 25rem;
  }

  .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }

  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }

  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }

  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }

  .swiper-slide-invisible-blank {
    visibility: hidden;
  }

  /* Auto Height */

  .swiper-container-autoheight {
    height: auto;
    .swiper-slide {
      height: auto;
    }
    .swiper-wrapper {
      align-items: flex-start;
      transition-property: transform, height;
    }
  }

  /* 3D Effects */

  .swiper-container-3d {
    perspective: 1200px;
    .swiper-wrapper,
    .swiper-slide,
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom,
    .swiper-cube-shadow {
      transform-style: preserve-3d;
    }
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .swiper-slide-shadow-left {
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-right {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-top {
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-bottom {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
  }

  /* IE10 Windows Phone 8 Fixes */

  .swiper-container-wp8-horizontal {
    touch-action: pan-y;
    > .swiper-wrapper {
      touch-action: pan-y;
    }
  }

  .swiper-container-wp8-vertical {
    touch-action: pan-x;
    > .swiper-wrapper {
      touch-action: pan-x;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    margin-top: -22px !important;
    z-index: 10;
    cursor: pointer;
    background-size: 50px 50px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23ffffff'/></svg>");
    left: 10px;
    right: auto;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23ffffff'/></svg>");
    right: 10px;
    left: auto;
  }

  .swiper-button-prev.swiper-button-white,
  .swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next.swiper-button-white,
  .swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-prev.swiper-button-black,
  .swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next.swiper-button-black,
  .swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-lock {
    display: none;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    &.swiper-pagination-hidden {
      opacity: 0;
    }
  }

  /* Common Styles */

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }

  /* Bullets */

  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
    .swiper-pagination-bullet {
      transform: scale(0.33);
      position: relative;
    }
    .swiper-pagination-bullet-active,
    .swiper-pagination-bullet-active-main {
      transform: scale(1);
    }
    .swiper-pagination-bullet-active-prev {
      transform: scale(0.66);
    }
    .swiper-pagination-bullet-active-prev-prev {
      transform: scale(0.33);
    }
    .swiper-pagination-bullet-active-next {
      transform: scale(0.66);
    }
    .swiper-pagination-bullet-active-next-next {
      transform: scale(0.33);
    }
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
  }

  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-appearance: none;
    appearance: none;
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
  }

  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
    .swiper-pagination-bullet {
      margin: 6px 0;
      display: block;
    }
    &.swiper-pagination-bullets-dynamic {
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      .swiper-pagination-bullet {
        display: inline-block;
        transition: 200ms transform, 200ms top;
      }
    }
  }

  .swiper-container-horizontal {
    > .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        margin: 0 4px;
      }
      &.swiper-pagination-bullets-dynamic {
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        .swiper-pagination-bullet {
          transition: 200ms transform, 200ms left;
        }
      }
    }
    &.swiper-container-rtl
      > .swiper-pagination-bullets-dynamic
      .swiper-pagination-bullet {
      transition: 200ms transform, 200ms right;
    }
  }

  /* Progress */

  .swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    .swiper-pagination-progressbar-fill {
      background: #007aff;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: scale(0);
      transform-origin: left top;
    }
  }

  .swiper-container-rtl
    .swiper-pagination-progressbar
    .swiper-pagination-progressbar-fill {
    transform-origin: right top;
  }

  .swiper-container-horizontal > .swiper-pagination-progressbar {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
  }

  .swiper-container-vertical > .swiper-pagination-progressbar {
    &.swiper-pagination-progressbar-opposite {
      width: 100%;
      height: 4px;
      left: 0;
      top: 0;
    }
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }

  .swiper-container-horizontal
    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }

  .swiper-pagination-white .swiper-pagination-bullet-active {
    background: #ffffff;
  }

  .swiper-pagination-progressbar.swiper-pagination-white {
    background: rgba(255, 255, 255, 0.25);
    .swiper-pagination-progressbar-fill {
      background: #ffffff;
    }
  }

  .swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000000;
  }

  .swiper-pagination-progressbar.swiper-pagination-black {
    background: rgba(0, 0, 0, 0.25);
    .swiper-pagination-progressbar-fill {
      background: #000000;
    }
  }

  .swiper-pagination-lock {
    display: none;
  }

  /* Scrollbar */

  .swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    background: rgba(0, 0, 0, 0.1);
  }

  .swiper-container-horizontal > .swiper-scrollbar {
    position: absolute;
    left: 2%;
    bottom: 16px;
    z-index: 50;
    height: 8px;
    width: 96%;
  }

  .swiper-container-vertical > .swiper-scrollbar {
    position: absolute;
    right: 10px;
    top: 5%;
    z-index: 50;
    width: 8px;
    height: 90%;
  }

  .swiper-scrollbar-drag {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .swiper-scrollbar-cursor-drag {
    cursor: move;
  }

  .swiper-scrollbar-lock {
    display: none;
  }

  .swiper-zoom-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    > {
      img,
      svg,
      canvas {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }

  .swiper-slide-zoomed {
    cursor: move;
  }

  /* Preloader */

  .swiper-lazy-preloader {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    width: 42px;
    height: 42px;
    margin-top: -21px;
    margin-left: -21px;
    animation: swiper-preloader-spin 1s steps(12, end) infinite;
    transform-origin: 50%;
    &:after {
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 100%;
      content: "";
    }
  }

  .swiper-lazy-preloader-white:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }

  @keyframes swiper-preloader-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  /* a11y */
  .swiper-container .swiper-notification {
    position: absolute;
    z-index: -1000;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
  }

  .swiper-container-fade {
    &.swiper-container-free-mode .swiper-slide {
      transition-timing-function: ease-out;
    }
    .swiper-slide {
      pointer-events: none;
      transition-property: opacity;
      .swiper-slide {
        pointer-events: none;
      }
    }
    .swiper-slide-active {
      pointer-events: auto;
      .swiper-slide-active {
        pointer-events: auto;
      }
    }
  }

  /* stylelint-enable */
`;

const GlobalStyle = createGlobalStyle`
:root {
	--white: 255, 255, 255; // #ffff

    --black: 0,0,0; // #000

    --gray1: 33, 37, 41; // #212529
    --gray2: 52, 58, 64; // #343A40
    --gray3: 173, 181, 189; // #ADB5BD
    --gray4:  233, 236, 239; // #E9ECEF

    --success: 86, 207, 142; // #56CF8E
    --red: 255, 0, 0; // #ff0000

    --aquaLight: 101, 193, 188; // #65C1BC
    --aquaLighter: 210, 237, 236; // #D2EDEC
    --aquaDark: 70, 135, 131; // #468783

    --orange: 255, 137, 71; // #FF8947
    --orangeLight: 255, 221, 202; // #FFDDCA
    --logoOrange: 255, 245, 239; // #FFF5EF;
    --orangeLighter: 255, 237, 228; // #FFEDE4

    --bodyBackground: 247, 246, 243; // #f7f6f3
    --backgroundTransparent: 0, 0, 0, 0.32;
}

* {
    box-sizing: border-box;

}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
    -webkit-font-smoothing: antialiased;

    font-family: 'Nunito', sans-serif;

    overflow-y: auto;
    overflow-x: hidden;

    width: 100vw;
    height: 100vh;

    background: rgba(var(--bodyBackground), 1);
    // used because material UI modals add 17px in the body when they are oppened.
    padding-right: 0px !important;  

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
    cursor: pointer;
    border: 0;
}

input {
    border: 0;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

${swiperStyle}
`;

export default GlobalStyle;
