import { RiCloseCircleFill } from "react-icons/ri";

import { ReactComponent as Ball } from "../../../assets/Icons/ball.svg";
import { ReactComponent as Bone } from "../../../assets/Icons/bone.svg";
import { IRoom } from "../../Accommodations";
import { StyledTooltip } from "./styles";

interface ITooltipProps {
  setOpenTooltip: React.Dispatch<React.SetStateAction<boolean>>;
  room: IRoom;
}

const RoomInfoTooltip = ({ setOpenTooltip, room }: ITooltipProps) => {
  const isCatRoom = room.tag === "cats";

  return (
    <StyledTooltip>
      <div className="tooltipWindow">
        <div className="closeContainer">
          <RiCloseCircleFill
            onClick={() => setOpenTooltip(false)}
            size="50px"
            color="#ff8947"
            stroke="#ffffff"
          />
        </div>

        <p>Acomoda até {`${room.capacity} ${isCatRoom ? "gatos" : "cães"}`}</p>
        {isCatRoom ? <Ball /> : <Bone />}

        <p>Check-in às 07h e {"\n"} checkout às 17h</p>
        {isCatRoom ? <Ball /> : <Bone />}

        <p>Incluso: {room.includedService}</p>
      </div>
    </StyledTooltip>
  );
};

export default RoomInfoTooltip;
