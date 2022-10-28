import { useTranslation } from "react-i18next";

import quartoDog from "../../../assets/RoomPictures/quartoDog.png";
import { useReservationContext } from "../../../contexts/ReservationContext";
import {
  rooms,
  services as servicesData,
} from "../../../data/roomsAndServices";
import {
  IReservationRequest,
  IRoom,
  IService,
} from "../../../interfaces/Reservations";
import { StyledConfirmationData } from "./styles";

const ConfirmationData = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const { generateRequestObject, selectedRoomType } = useReservationContext();

  const reservationObject: IReservationRequest = generateRequestObject();
  console.log(reservationObject);

  const diffInMs =
    new Date(reservationObject.checkout).getTime() -
    new Date(reservationObject.checkin).getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  const room = rooms.find((room) => room.tag === selectedRoomType);

  if (!room) {
    // impossível
    return <></>;
  }

  const services = servicesData.filter((service) =>
    reservationObject.services.map((s) => s.service_id).includes(service.tag),
  );

  const reservationPrice = room.price * diffInDays;

  const servicesPrice = reservationObject.services.reduce((total, service) => {
    const serv = services.find((serv) => serv.tag === service.service_id);
    if (!serv) return total; // impossível
    return total + serv.price * service.amount;
  }, 0);

  return (
    <StyledConfirmationData>
      <h2 className="confirmationTitle">Confirmação dos dados</h2>
      <div className="mainInfo">
        <div className="leftInfo">
          <img className="roomImg" src={room.urlImage} alt="" />
        </div>
        <div className="rightInfo">
          <section className="roomReservationInfo">
            <p>
              Tipo de quarto: <span>{room.title}</span>{" "}
            </p>
            <p>
              Data de checkin: <span>{reservationObject.checkin}</span>{" "}
            </p>
            <p>
              Data de checkout: <span>{reservationObject.checkout}</span>{" "}
            </p>
            <p>
              Nº de pets: <span>{reservationObject.pets_rooms.length}</span>
            </p>
            <p>
              Nº de noites: <span>{diffInDays}</span>
            </p>
            <p>
              Total diária: <span> ${reservationPrice.toFixed(2)}</span>{" "}
            </p>
          </section>
          <section className="servicesInfo">
            <p>Serviços adicionais:</p>
            {services.map((service) => (
              <p key={service.id}>
                {service.name}: ${service.price.toFixed(2)}
              </p>
            ))}
          </section>
          <section className="totalInfo">
            <p>
              <b>Total:</b> ${(servicesPrice + reservationPrice).toFixed(2)}{" "}
            </p>
          </section>
        </div>
      </div>
    </StyledConfirmationData>
  );
};

export default ConfirmationData;
