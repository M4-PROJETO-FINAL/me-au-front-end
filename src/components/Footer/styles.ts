import { Container } from "@mui/material";
import styled from "styled-components";

import bg_footer from "../../assets/bg_footer.svg";
import bg_footer_mobile from "../../assets/bg_footerMobile.svg";

export const ContainerFooter = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  height: 55vh;
  @media screen and (max-width: 768px) {
    height: 68vh;
    padding-top: 194px;
  }

  max-width: 100vw;

  background-image: url(${bg_footer});

  @media screen and (max-width: 426px) {
    background-image: url(${bg_footer_mobile});
    height: 65vh;
    padding-top: 100px;
  }
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .chip--footer {
    position: relative;
    bottom: -50px;
  }
`;
