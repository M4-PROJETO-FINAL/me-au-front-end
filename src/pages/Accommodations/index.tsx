import { useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import SectionRooms from "../../components/RoomsCards";
import TitleRooms from "../../components/RoomsTitles";
import { ReservationContextProvider } from "../../contexts/ReservationsContext/ReservationCreateContext";
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
      <Footer />
    </ReservationContextProvider>
  );
};

export default Accommodations;
