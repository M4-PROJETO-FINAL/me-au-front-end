import { Link, useNavigate } from "react-router-dom";

import { IRoom } from "../../pages/Accommodations";
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
            <img
              onClick={() => navigate(`/accommodations/${room.tag}`)}
              src={room.urlImage}
              alt={room.title}
            />
            <div>
              <h3>{room.title}</h3>
              <p>{room.description}</p>
            </div>
            <Link to={`/accommodations/${room.tag}`}>
              Clique aqui para agendar
            </Link>
          </li>
        ))}
      </ul>
    </RoomSection>
  );
};

export default SectionRooms;
