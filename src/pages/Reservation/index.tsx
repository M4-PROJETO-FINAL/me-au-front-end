import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TextField } from "@mui/material";

import { ReactComponent as Ball } from "../../assets/Icons/ball.svg";
import { ReactComponent as Bone } from "../../assets/Icons/bone.svg";
import catToyPng from "../../assets/Icons/catToy.png";
import dogToyPng from "../../assets/Icons/dogToy.png";
import Calendar from "../../components/Calendar";
import { IRoom } from "../Accommodations";
import { StyledRoomSection } from "./styles";

interface IReservationProps {
  room: IRoom;
}

const Reservation = ({ room }: IReservationProps) => {
  const { t } = useTranslation();
  const isCatRoom = room.tag === "cats";

  return (
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
            <img src={room.urlImage} alt="" />
            <form action="">
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
                Acomoda até {`${room.capacity} ${isCatRoom ? "gatos" : "cães"}`}
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
  );
};

export default Reservation;
