import React, { useRef, useState } from "react";

import { useMediaQuery } from "react-responsive";

import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Banho from "../../assets/ServicesPictures/banho&tosa.png";
import Massagem from "../../assets/ServicesPictures/massagem.png";
import Natacao from "../../assets/ServicesPictures/natacao.png";
import Passeio from "../../assets/ServicesPictures/passeio.png";
import Recreacao from "../../assets/ServicesPictures/recreacao.png";
import Vacinacao from "../../assets/ServicesPictures/vacinacao.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Services = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <>
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
          <img src={Massagem} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Natacao} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Passeio} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Recreacao} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Vacinacao} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Services;
