import { Swiper, SwiperSlide } from "swiper/react";

export interface IService {
  serviceName: string;
  serviceImg: string;
}

interface IServiceProps {
  serviceData: IService;
}

const Service = ({ serviceData }: IServiceProps) => {
  return (
    <SwiperSlide>
      <div className="imgContainer">
        <img src={serviceData.serviceImg} alt="" />
      </div>
      <div className="cardBackground">
        <h5>{serviceData.serviceName}</h5>
      </div>
    </SwiperSlide>
  );
};

export default Service;
