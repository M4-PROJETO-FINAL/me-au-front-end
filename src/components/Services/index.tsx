import Swiper, { ReactIdSwiperProps } from "react-id-swiper";

import { FlexProps } from "@react-yuki/ui";
import { SwiperModule } from "swiper/types";

import Banho from "../../assets/ServicesPictures/banho&tosa.png";
import Massagem from "../../assets/ServicesPictures/massagem.png";
import Natacao from "../../assets/ServicesPictures/natacao.png";
import Passeio from "../../assets/ServicesPictures/passeio.png";
import Recreacao from "../../assets/ServicesPictures/recreacao.png";
import Vacinacao from "../../assets/ServicesPictures/vacinacao.png";
import Service, { IService } from "./Service";
import { StyledSection } from "./styles";
import { SlideContainer } from "./swiperStyles";

interface IServicesProps extends FlexProps {
  params?: ReactIdSwiperProps | ReactIdSwiperProps[];
  modules: SwiperModule | SwiperModule[];
}

const Services = ({ params }: IServicesProps) => {
  const services: IService[] = [
    {
      serviceName: "Passeios",
      serviceImg: Passeio,
    },
    {
      serviceName: "Banho & Tosa",
      serviceImg: Banho,
    },
    {
      serviceName: "Recreação",
      serviceImg: Recreacao,
    },
    {
      serviceName: "Vacinação",
      serviceImg: Vacinacao,
    },
    {
      serviceName: "Natação",
      serviceImg: Natacao,
    },
    {
      serviceName: "Massagem",
      serviceImg: Massagem,
    },
  ];

  return (
    <StyledSection>
      <h3>Serviços</h3>
      <SlideContainer>
        <div className="ulContainer">
          <Swiper {...params}>
            {services.map((service, idx) => (
              <Service key={idx} serviceData={service} />
            ))}
          </Swiper>
        </div>
      </SlideContainer>
    </StyledSection>
  );
};

export default Services;
