import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import * as yup from "yup";

import { ReactComponent as Ball } from "../../assets/Icons/ball.svg";
import { ReactComponent as Bone } from "../../assets/Icons/bone.svg";
import catToyPng from "../../assets/Icons/catToy.png";
import dogToyPng from "../../assets/Icons/dogToy.png";
import Calendar from "../../components/Calendar";
import CartModal from "../../components/CartModal";
import { useUserContext } from "../../contexts/UserContext";
import { IRoom } from "../Accommodations";
import RoomInfoTooltip from "./RoomInfoTooltip";
import { StyledRoomSection } from "./styles";

interface IReservationProps {
  room: IRoom;
}

interface IFormDates {
  checkin: string;
  checkout: string;
}

const Reservation = ({ room }: IReservationProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isCatRoom = room.tag === "cats";
  const { user, openFormLogin } = useUserContext();
  const { handleCloseCartModal, isOpenCartModal, handleOpenCartModal } =
    useUserContext();
  const [openTooltip, setOpenTooltip] = useState(false);

  const checkLoginAndOpenModal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verificar se tem data e checkin selecionados --- pegar o contexto dessa data e checkin ( não consegui fazer form yup nesse calendar)
    if (user) {
      handleOpenCartModal();
      return;
    }

    // Caso o usuário não estiver logado
    toast.info("Faça o login para realizar o agendamento!");
    openFormLogin();
  };

  return (
    <>
      <StyledRoomSection>
        <div className="container">
          <div className="row">
            <Link to="/accommodations/all">
              <FaArrowLeft size={42} />
            </Link>
            <div className="roomTitle">{t(`Nome dos quartos.${room.tag}`)}</div>
          </div>

          <div className="main">
            <div className="top">
              {isMobile && (
                <div className="toyImgMobileContainer">
                  <img
                    onClick={() => setOpenTooltip(true)}
                    className="toyImgMobile"
                    src={isCatRoom ? catToyPng : dogToyPng}
                    alt=""
                  />
                </div>
              )}
              <img
                onClick={() => setOpenTooltip(true)}
                className="roomImg"
                src={room.urlImage}
                alt=""
              />
              <form onSubmit={(e) => checkLoginAndOpenModal(e)}>
                <Calendar />
                <TextField
                  label="Quantos pets?"
                  type="number"
                  InputProps={{ style: { width: "280px" } }}
                />
                <button className="reservationBtn">Agende agora mesmo!</button>
              </form>
            </div>
            <div className="bottom">
              <div className="col left">
                <p>
                  Acomoda até{" "}
                  {`${room.capacity} ${isCatRoom ? "gatos" : "cães"}`}
                </p>
                {isCatRoom ? <Ball /> : <Bone />}
              </div>
              <div className="col mid">
                <p>Check-in às 07h e {"\n"} checkout às 17h</p>
                {isCatRoom ? <Ball /> : <Bone />}
              </div>
              <div className="col right">
                <p>Incluso: {room.includedService}</p>
                {isCatRoom ? <Ball /> : <Bone />}
              </div>
            </div>
          </div>
          <div className="toyContainer">
            <img
              className="toyImg"
              src={isCatRoom ? catToyPng : dogToyPng}
              alt=""
            />
          </div>
        </div>
      </StyledRoomSection>
      <CartModal
        openCartModal={isOpenCartModal}
        handleClose={handleCloseCartModal}
        handleOpen={handleOpenCartModal}
      />
      {openTooltip && (
        <RoomInfoTooltip setOpenTooltip={setOpenTooltip} room={room} />
      )}
    </>
  );
};

export default Reservation;
