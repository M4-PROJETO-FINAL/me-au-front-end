import { Link, useNavigate } from "react-router-dom";

import clickRoom from "../../assets/clickRoom.svg";
import { IRoom } from "../../pages/Accommodations";
import { Button } from "../Button/style";
import { RoomSection } from "./styles";

interface ISectionRoomsProps {
  rooms: IRoom[];
}

const SectionRooms = ({ rooms }: ISectionRoomsProps) => {
  const navigate = useNavigate();
  return (
    <RoomSection>
      <ul>
        {rooms.map((room, id) => (
          <li key={id}>
            <div className="divRoomCard-item-1">
              <img
                onClick={() => navigate(`/accommodations/${room.tag}`)}
                src={room.urlImage}
                alt={room.title}
              />
            </div>
            <div className="divRoomCard-item-2">
              <div className="titleCardRoom">
                <h3>{room.title}</h3>
              </div>
              <p>{room.description}</p>
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
                onClick={() =>
                  console.log("Aqui deveria abrir a pag do quarto")
                }
              >
                <Link to={`/accommodations/${room.tag}`}>
                  <span>Clique aqui para agendar!</span>
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
