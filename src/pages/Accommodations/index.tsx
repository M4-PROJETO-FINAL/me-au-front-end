import { useParams } from "react-router-dom";

import quartoCat from "../../assets/RoomPictures/quartoCat.png";
import quartoComp from "../../assets/RoomPictures/quartoComp.png";
import quartoDog from "../../assets/RoomPictures/quartoDog.png";
import SectionRooms from "../../components/RoomsCards";
import TitleRooms from "../../components/RoomsTitles";
import { ReservationContextProvider } from "../../contexts/ReservationContext";
import Reservation from "../Reservation";

export interface IRoom {
  urlImage: string;
  title: string;
  description: string;
  tag: "dogs" | "cats" | "shared";
  capacity: number;
  includedService: string;
}

const Accommodations = () => {
  const { tag } = useParams();

  const rooms: IRoom[] = [
    {
      urlImage: quartoComp,
      title: "Quarto Compartilhado",
      description:
        "Ótimo custo benefício, essa opção é ideal para você que deseja que o seu pet interaja com outros catioros!",
      tag: "shared",
      capacity: 30,
      includedService: "passeios diários",
    },

    {
      urlImage: quartoDog,
      title: "Quarto Privativo (cães)",
      description:
        "Busca conforto e privacidade para o seu cãozinho? O quarto privativo é a opção ideal!",
      tag: "dogs",
      capacity: 2,
      includedService: "passeios diários",
    },

    {
      urlImage: quartoCat,
      title: "Quarto Privativo (gatos)",
      description:
        "Quarto privativo de alto padrão para o seu felino aproveitar com classe!",
      tag: "cats",
      capacity: 2,
      includedService: "1 petisco por dia",
    },
  ];

  return (
    <ReservationContextProvider>
      <TitleRooms />
      {tag === "all" ? (
        <SectionRooms rooms={rooms} />
      ) : (
        <Reservation
          room={rooms.find((room) => room.tag === tag) || rooms[0]}
        />
      )}
    </ReservationContextProvider>
  );
};

export default Accommodations;
