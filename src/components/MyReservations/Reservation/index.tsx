import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { Button as ButtonModal } from "@mui/material";
import dayjs from "dayjs";

import { usePetContext } from "../../../contexts/PetsContext";
import { useReservationCancelContext } from "../../../contexts/ReservationsContext/ReservationCancelAndList";
import { UseUserReviewContext } from "../../../contexts/UserReviewContext";
import { Button } from "../../Button/style";
import DeleteModal from "../../DeleteModal";
import UserReviewModal from "../../UserReviewModal";
import { ContainerReservations } from "../styles";

const Reservations = () => {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const { handleOpenDeleteModal } = usePetContext();
  const { openReviewModal, isReviewed } = UseUserReviewContext();

  const reservationStatus = {
    cancelled: t("Cancelado"),
    active: t("Ativo"),
    concluded: t("Concluido"),
    reserved: t("Reservado"),
  };

  const {
    reservations,
    cancelReservation,
    allRoomTypes,
    setSelectedReservationId,
  } = useReservationCancelContext();

  const dateFormat = lang === "pt" ? "DD/MM/YYYY" : "MM/DD/YYYY";

  return (
    <ContainerReservations>
      {reservations?.map((reservation) => (
        <div key={reservation.id} className="card--reservations">
          <div className="card--title">
            {
              allRoomTypes?.filter(
                (elem) => elem.id === reservation.pets_rooms[0].rooms_type_id,
              )[0]?.title
            }
          </div>
          <div className="card--image">
            <img
              src={
                allRoomTypes?.filter(
                  (elem) => elem.id === reservation.pets_rooms[0].rooms_type_id,
                )[0]?.image
              }
              alt={
                allRoomTypes?.filter(
                  (elem) => elem.id === reservation.pets_rooms[0].rooms_type_id,
                )[0]?.title
              }
            />
          </div>
          <div className="card--info">
            <p>Checkin:</p>
            <span>
              {dayjs(reservation.checkin.slice(0, 10)).format(dateFormat)}
            </span>
          </div>
          <div className="card--info">
            <p>Checkout:</p>
            <span>
              {dayjs(reservation.checkout.slice(0, 10)).format(dateFormat)}
            </span>
          </div>
          <div className="card--info">
            <p>Status:</p>
            <span>{reservationStatus[reservation.status]}</span>
          </div>
          <div className="card--button">
            {reservation.status === "reserved" ? (
              <Button
                backgroundColor="#AAA8A8"
                color="rgba(var(--white), 1)"
                height={isMobile ? "45px" : "50px"}
                width={isMobile ? "150px" : "180px"}
                fontSize={isMobile ? "15px" : "18px"}
                fontWeight="500"
                borderRadius="10px"
                colorHover="#757373"
                // onClick={() => cancelReservation(reservation.id)}
                onClick={() => {
                  setSelectedReservationId(reservation.id);
                  handleOpenDeleteModal();
                }}
              >
                {t("Quer cancelar?")}
              </Button>
            ) : reservation.status === "concluded" &&
              !isReviewed(reservation.id) ? (
              <Button
                backgroundColor="#FF8947"
                color="rgba(var(--white), 1)"
                height={isMobile ? "45px" : "50px"}
                width={isMobile ? "150px" : "180px"}
                fontSize={isMobile ? "15px" : "18px"}
                fontWeight="500"
                borderRadius="10px"
                colorHover="#c0581f"
                onClick={() => openReviewModal(reservation.id)}
              >
                {t("Nos avalie!")}
              </Button>
            ) : (
              <Button
                backgroundColor="#FF8947"
                color="rgba(var(--white), 1)"
                height={isMobile ? "45px" : "50px"}
                width={isMobile ? "150px" : "180px"}
                fontSize={isMobile ? "15px" : "18px"}
                fontWeight="500"
                borderRadius="10px"
                colorHover="#c0581f"
                disabled={true}
              >
                {t("Avaliado")}
              </Button>
            )}
          </div>
        </div>
      ))}
      <DeleteModal
        title={t("Cancelar a reserva")}
        description={t("Tem certeza de que deseja cancelar a reserva?")}
        btn1={t("Voltar")}
      >
        <ButtonModal
          onClick={cancelReservation}
          variant="contained"
          color="error"
        >
          {t("Confirmar")}
        </ButtonModal>
      </DeleteModal>
      <UserReviewModal />
    </ContainerReservations>
  );
};

export default Reservations;
