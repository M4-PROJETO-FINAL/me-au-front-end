import Reservations from "./Reservation";

const MyReservations = () => {
  return (
    <ReservationCancelContextProvider>
      <Reservations />
    </ReservationCancelContextProvider>
  );
};

export default MyReservations;
