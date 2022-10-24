import { FC } from "react";

import { Flex, FlexProps } from "@react-yuki/ui";

export const SlideContainer: FC<FlexProps> = (props) => (
  <Flex
    {...props}
    __css={{
      position: "relative",
      ".swiper-container": {
        width: "100%",
        height: "20rem",
      },
      ".swiper-pagination": {
        "&.swiper-pagination-fraction": {
          color: "black",
          fontWeight: 5,
        },
      },
      ".swiper-pagination-bullet-active.swiper-pagination-bullet": {
        bg: "gray.9",
        opacity: 1,
      },
      ".swiper-pagination-bullet": {
        bg: "black",
        opacity: 1,
      },
      ".swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        bg: "dark",
      },
    }}
  />
);
