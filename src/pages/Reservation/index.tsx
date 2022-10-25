import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";

import { ReactComponent as Ball } from "../../assets/Icons/ball.svg";
import { ReactComponent as Bone } from "../../assets/Icons/bone.svg";
import catToyPng from "../../assets/Icons/catToy.png";
import dogToyPng from "../../assets/Icons/dogToy.png";
import Calendar from "../../components/Calendar";
import CartModal from "../../components/CartModal";
import { IRoom } from "../Accommodations";
import RoomInfoTooltip from "./RoomInfoTooltip";
import { StyledRoomSection } from "./styles";

interface IReservationProps {
  room: IRoom;
}

const Reservation = ({ room }: IReservationProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isCatRoom = room.tag === "cats";

  const [openCartModal, setOpenCartModal] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);
  const handleOpen = () => setOpenCartModal(true);
  const handleClose = () => setOpenCartModal(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFunction = () => {
    handleOpen();
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
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <Calendar />
                <TextField
                  label="Quantos pets?"
                  type="number"
                  InputProps={{ style: { width: "280px" } }}
                />
                <button
                  className="reservationBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpen();
                  }}
                >
                  Agende agora mesmo!
                </button>
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
        openCartModal={openCartModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      {openTooltip && (
        <RoomInfoTooltip setOpenTooltip={setOpenTooltip} room={room} />
      )}
    </>
  );
};

export default Reservation;
