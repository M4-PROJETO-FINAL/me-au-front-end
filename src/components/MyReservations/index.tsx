import { ReservationCancelContextProvider } from "../../contexts/ReservationsContext/ReservationCancelAndList";
import Reservations from "./Reservation";

const MyReservations = () => {
  return (
    <ReservationCancelContextProvider>
      <Reservations />
    </ReservationCancelContextProvider>
  );
};

export default MyReservations;
