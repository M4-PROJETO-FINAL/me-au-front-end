import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import clickRoom from "../../assets/clickRoom.svg";
import { useReservationContext } from "../../contexts/ReservationContext";
import { IRoom } from "../../interfaces/Reservations";
import { Button } from "../Button/style";
import { RoomSection } from "./styles";

interface ISectionRoomsProps {
  rooms: IRoom[];
}

const SectionRooms = ({ rooms }: ISectionRoomsProps) => {
  const { setSelectedRoomType } = useReservationContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <RoomSection>
      <ul>
        {rooms.map((room, id) => (
          <li key={id}>
            <div className="divRoomCard-item-1">
              <img
                onClick={() => {
                  setSelectedRoomType(room.tag);
                  navigate(`/accommodations/${room.tag}`);
                }}
                src={room.urlImage}
                alt={room.title}
              />
            </div>
            <div className="divRoomCard-item-2">
              <div className="titleCardRoom">
                <h3>{t(`Nome dos quartos.${room.tag}`)}</h3>
              </div>
              <p>{t(`Descrição dos quartos.${room.tag}`)}</p>
            </div>
            <div className="divRoomCard-item-3">
              <Button
                backgroundColor="rgba(var(--aquaLight), 1)"
                color="rgba(var(--white), 1)"
                height="2.5rem"
                width="100%"
                fontSize=".875rem"
                fontWeight="600"
                borderRadius=".9375rem"
                onClick={() => setSelectedRoomType(room.tag)}
              >
                <Link to={`/accommodations/${room.tag}`}>
                  <span>{t("Clique para agendar")}</span>
                  <img src={clickRoom} alt="#" />
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </RoomSection>
  );
};

export default SectionRooms;
