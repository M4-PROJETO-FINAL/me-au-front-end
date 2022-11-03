import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { Pagination, Navigation } from "swiper";
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
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <StyledSection>
      <h3>{t("Serviços")}</h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={isDesktop ? 4 : isTablet ? 3 : isMobile ? 1 : 2}
        initialSlide={3}
        spaceBetween={50}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Banho} alt="" />
          </div>
          <div className="cardBackground">
            <h5>{t("AddServices.Banho")}</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Massagem} />
          </div>
          <div className="cardBackground">
            <h5>{t("AddServices.Massagem")}</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Natacao} />
          </div>
          <div className="cardBackground">
            <h5>{t("AddServices.Natação")}</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Passeio} />
          </div>
          <div className="cardBackground">
            <h5>{t("AddServices.Passeio")}</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Recreacao} />
          </div>
          <div className="cardBackground">
            <h5>{t("AddServices.Recreação")}</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img src={Vacinacao} />
          </div>
          <div className="cardBackground">
            <h5>{t("AddServices.Vacinação")}</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSection>
  );
};

export default Services;
