import { useParams } from "react-router-dom";

import SectionRooms from "../../components/RoomsCards";
import TitleRooms from "../../components/RoomsTitles";
import { ReservationContextProvider } from "../../contexts/ReservationContext";
import { rooms } from "../../data/roomsAndServices";
import Reservation from "../Reservation";

const Accommodations = () => {
  const { tag } = useParams();
  return (
    <ReservationContextProvider>
      <TitleRooms />
      {tag === "all" ? (
        <SectionRooms rooms={rooms} />
      ) : (
        <Reservation
          room={rooms.find((room) => room.tag === tag) || rooms[0]}
        />
      )}
    </ReservationContextProvider>
  );
};

export default Accommodations;
