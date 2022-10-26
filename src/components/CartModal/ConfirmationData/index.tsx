import { useTranslation } from "react-i18next";

import quartoDog from "../../../assets/RoomPictures/quartoDog.png";
import { IRoom } from "../../../interfaces/Reservations";
import { StyledConfirmationData } from "./styles";

interface IPetRoom {
  pet_id: string;
  room_id: string;
}

interface IReservationRequest {
  checkin: string;
  checkout: string;
  room_type_id: string;
  pets_rooms: IPetRoom[];
  services: string[];
}

const ConfirmationData = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const reservationObject: IReservationRequest = {
    checkin: "2022-10-22",
    checkout: "2022-10-25",
    room_type_id: "uuid",
    pets_rooms: [
      {
        pet_id: "uuid",
        room_id: "uuid",
      },
      {
        pet_id: "uuid2",
        room_id: "uuid2",
      },
    ],
    services: ["uuid", "uuid2", "uuid3"],
  };

  const diffInMs =
    new Date(reservationObject.checkout).getTime() -
    new Date(reservationObject.checkin).getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  const room: IRoom = {
    // obtido por requisição a partir do reservationObject.room_type_id
    urlImage: quartoDog,
    title: "Quarto Privativo (cães)",
    description:
      "Busca conforto e privacidade para o seu cãozinho? O quarto privativo é a opção ideal!",
    tag: "dogs",
    capacity: 2,
    includedService: "passeios diários",
    price: 250,
  };

  const services: any = [
    // obtido por requisição: um service pra cada id em reservationObject.services
    { id: "1", name: "serviço 1", price: 50 },
    { id: "2", name: "serviço 2", price: 80 },
  ];

  const reservationPrice = room.price * diffInDays;
  const servicesPrice = services.reduce(
    (total, service) => total + service.price,
    0,
  );

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
