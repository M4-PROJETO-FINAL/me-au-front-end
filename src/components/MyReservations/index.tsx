import { ReservationCancelContextProvider } from "../../contexts/ReservationsContext/ReservationCancelAndList";
import Reservations from "./Reservation";

const MyReservations = () => (
  <ReservationCancelContextProvider>
    <Reservations />
  </ReservationCancelContextProvider>
);

export default MyReservations;
