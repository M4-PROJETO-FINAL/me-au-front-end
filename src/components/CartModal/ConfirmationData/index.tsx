import { useTranslation } from "react-i18next";

import dayjs from "dayjs";

import { useReservationContext } from "../../../contexts/ReservationContext";
import {
  rooms,
  services as servicesData,
} from "../../../data/roomsAndServices";
import { IReservationRequest } from "../../../interfaces/Reservations";
import { StyledConfirmationData } from "./styles";

const ConfirmationData = () => {
  const {
    i18n: { language: lang },
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

  const dateFormat = lang === "pt" ? "DD/MM/YYYY" : "MM/DD/YYYY";

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
              Data de checkin:{" "}
              <span>{dayjs(reservationObject.checkin).format(dateFormat)}</span>{" "}
            </p>
            <p>
              Data de checkout:{" "}
              <span>
                {dayjs(reservationObject.checkout).format(dateFormat)}
              </span>{" "}
            </p>
            <p>
              Nº de pets: <span>{reservationObject.pets_rooms.length}</span>
            </p>
            <p>
              Nº de noites: <span>{diffInDays}</span>
            </p>
            <p>
              Total diária:{" "}
              <span>
                {" "}
                {lang === "pt" ? "R" : ""}${reservationPrice}
              </span>{" "}
            </p>
          </section>
          <section className="servicesInfo">
            <p>Serviços adicionais:</p>
            {services.map((service) => (
              <p key={service.id}>
                {service.name}:{" "}
                {service.name === "Vacina"
                  ? "preço a combinar"
                  : `${lang === "pt" ? "R" : ""}$${service.price} × ${
                      reservationObject.services.find(
                        (r) => r.service_id === service.tag,
                      )?.amount || 0
                    } = ${lang === "pt" ? "R" : ""}$${
                      service.price *
                      (reservationObject.services.find(
                        (r) => r.service_id === service.tag,
                      )?.amount || 0)
                    }`}
              </p>
            ))}
          </section>
          <section className="totalInfo">
            <p>
              <b>Total:</b> {lang === "pt" ? "R" : ""}$
              {servicesPrice + reservationPrice}{" "}
            </p>
          </section>
        </div>
      </div>
    </StyledConfirmationData>
  );
};

export default ConfirmationData;
