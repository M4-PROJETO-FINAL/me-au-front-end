import ReservationContextProvider from "../../contexts/ReservationContext";

const Reservation = () => {
  return (
    <ReservationContextProvider>
      <div>Reservation</div>
    </ReservationContextProvider>
  );
};

export default Reservation;
