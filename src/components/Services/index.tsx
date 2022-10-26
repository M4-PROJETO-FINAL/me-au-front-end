import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Banho from "../../assets/ServicesPictures/banho&tosa.png";
import Massagem from "../../assets/ServicesPictures/massagem.png";
import Natacao from "../../assets/ServicesPictures/natacao.png";
import Passeio from "../../assets/ServicesPictures/passeio.png";
import Recreacao from "../../assets/ServicesPictures/recreacao.png";
import Vacinacao from "../../assets/ServicesPictures/vacinacao.png";
import { StyledSection } from "./styles";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Services = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <StyledSection>
      <h3>Serviços</h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={isDesktop ? 4 : isTablet ? 3 : isMobile ? 1 : 2}
        initialSlide={3}
        spaceBetween={50}
        pagination={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Banho} alt="" />
          </div>
          <div className="cardBackground">
            <h5>Banho</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Massagem} />
          </div>
          <div className="cardBackground">
            <h5>Massagem</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Natacao} />
          </div>
          <div className="cardBackground">
            <h5>Natação</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Passeio} />
          </div>
          <div className="cardBackground">
            <h5>Passeio</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Recreacao} />
          </div>
          <div className="cardBackground">
            <h5>Recreação</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Vacinacao} />
          </div>
          <div className="cardBackground">
            <h5>Vacinação</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSection>
  );
};

export default Services;
