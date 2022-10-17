import { useTranslation } from "react-i18next";

import petIcon from "../../assets/petIcon.svg";
import { RoomTitles } from "./styles";

const TitleRooms = () => {
  const { t } = useTranslation();

  return (
    <RoomTitles>
      <img src={petIcon} alt="petIcon" />
      <h2>{t("Acomodações e Quartos")}</h2>
    </RoomTitles>
  );
};

export default TitleRooms;
