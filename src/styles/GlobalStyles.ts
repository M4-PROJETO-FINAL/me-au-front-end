import { createGlobalStyle } from "styled-components";

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
*{
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

    transition: all 0.25s linear;

    background: rgba(var(--bodyBackground), 1);
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
`;

export default GlobalStyle;
