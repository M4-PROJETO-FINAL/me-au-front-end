import { useTranslation } from "react-i18next";

import dayjs from "dayjs";

import {
  useReservationContext,
  serviceNamesRelations,
} from "../../../contexts/ReservationsContext/ReservationCreateContext";
import { rooms } from "../../../data/roomsAndServices";
import { IReservationRequest } from "../../../interfaces/Reservations";
import { StyledConfirmationData } from "./styles";

const ConfirmationData = () => {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const { generateRequestObject, selectedRoomType, services, allServices } =
    useReservationContext();
  const reservationObject: IReservationRequest = generateRequestObject();

  const diffInMs =
    new Date(reservationObject.checkout).getTime() -
    new Date(reservationObject.checkin).getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  const room = rooms.find((room) => room.tag === selectedRoomType);

  if (!room) {
    // impossível
    return <></>;
  }

  const serviceNames = {
    Tosa: t("AddServices.Tosa"),
    Banho: t("AddServices.Banho"),
    Ração: t("AddServices.Ração"),
    Vacina: t("AddServices.Vacina"),
    Natação: t("AddServices.Natação"),
    Massagem: t("AddServices.Massagem"),
  };

  const reservationPrice = room.price * diffInDays;

  const servicesTotalPrice = Object.keys(services).reduce((total, tag) => {
    const actualService = allServices.find(
      (serv) => serv.name === serviceNamesRelations[tag],
    );
    if (!services[tag] || !actualService) return total;
    const price = +actualService.price;

    const amount = services[tag];
    return total + price * amount;
  }, 0);

  const dateFormat = lang === "pt" ? "DD/MM/YYYY" : "MM/DD/YYYY";

  return (
    <StyledConfirmationData>
      <h2 className="confirmationTitle">{t("Confirmação dos dados")}</h2>
      <div className="mainInfo">
        <div className="leftInfo">
          <img className="roomImg" src={room.urlImage} alt="" />
        </div>
        <div className="rightInfo">
          <section className="roomReservationInfo">
            <p>
              {t("Tipo de quarto")}:{" "}
              {(() => {
                if (room.title === "Quarto Compartilhado") {
                  return (
                    <span>
                      {lang === "pt" && room.title === "Quarto Compartilhado"
                        ? "Quarto Compartilhado"
                        : "Shared Room"}
                    </span>
                  );
                } else if (room.title === "Quarto Privativo (cães)") {
                  return (
                    <span>
                      {lang === "pt" && room.title === "Quarto Privativo (cães)"
                        ? "Quarto Privativo (cães)"
                        : "Private Room (dogs)"}
                    </span>
                  );
                } else if (room.title === "Quarto Privativo (gatos)") {
                  return (
                    <span>
                      {lang === "pt" &&
                      room.title === "Quarto Privativo (gatos)"
                        ? "Quarto Privativo (gatos)"
                        : "Private Room (cats)"}
                    </span>
                  );
                }
              })()}
            </p>
            <p>
              {t("Data de checkin")}:{" "}
              <span>{dayjs(reservationObject.checkin).format(dateFormat)}</span>{" "}
            </p>
            <p>
              {t("Data de checkout")}:{" "}
              <span>
                {dayjs(reservationObject.checkout).format(dateFormat)}
              </span>{" "}
            </p>
            <p>
              {t("Nº de pets")}:{" "}
              <span>{reservationObject.pet_rooms.length}</span>
            </p>
            <p>
              {t("Nº de noites")}: <span>{diffInDays}</span>
            </p>
            <p>
              {t("Total diária")}:{" "}
              <span>
                {" "}
                {lang === "pt" ? "R" : ""}${reservationPrice}
              </span>{" "}
            </p>
          </section>
          <section className="servicesInfo">
            <p>{t("AddServices.Serviços adicionais")}:</p>
            {reservationObject.services.map((service) => {
              const actualService = allServices.find(
                (serv) => serv.id === service.service_id,
              );
              if (!actualService) return <></>;

              return (
                <p key={service.service_id}>
                  {serviceNames[actualService.name]}:{" "}
                  {actualService.name === "Vacina"
                    ? `${t("AddServices.(A combinar)")}`
                    : `${lang === "pt" ? "R" : ""}$${actualService.price} × ${
                        service.amount || 0
                      } = ${lang === "pt" ? "R" : ""}$${
                        +actualService.price * service.amount
                      }`}
                </p>
              );
            })}
          </section>
          <section className="totalInfo">
            <p>
              <b>Total:</b> {lang === "pt" ? "R" : ""}$
              {servicesTotalPrice + reservationPrice}{" "}
            </p>
          </section>
        </div>
      </div>
    </StyledConfirmationData>
  );
};

export default ConfirmationData;
