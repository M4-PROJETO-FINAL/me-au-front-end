import { useTranslation } from "react-i18next";

import clickRoom from "../../assets/clickRoom.svg";
import quartoCat from "../../assets/quartoCat.png";
import quartoComp from "../../assets/quartoComp.png";
import quartoDog from "../../assets/quartoDog.png";
import { Button } from "../Button/style";
import { RoomSection } from "./styles";

interface IRoom {
  urlImage: string;
  title: string;
  description: string;
  extra?: string;
}

const SectionRooms = () => {
  const { t } = useTranslation();

  const rooms: IRoom[] = [
    {
      urlImage: quartoComp,
      title: "Quarto Compartilhado",
      description:
        "Ótimo custo benefício, essa opção é ideal para você que deseja que o seu pet interaja com outros catioros!",
    },

    {
      urlImage: quartoDog,
      title: "Quarto Privativo",
      description:
        "Busca conforto e privacidade para o seu pet? O quarto privativo é a opção ideal!",
      extra: "Apenas para cães",
    },

    {
      urlImage: quartoCat,
      title: "Quarto Privativo",
      description:
        "Quarto privativo de alto padrão para o seu felino aproveitar com classe!",
      extra: "Apenas para gatos",
    },
  ];

  return (
    <RoomSection>
      <ul>
        {rooms.map((room, id) => (
          <li key={id}>
            <div className="divRoomCard-item-1">
              <img src={room.urlImage} alt={room.title} />
            </div>
            <div className="divRoomCard-item-2">
              <div className="titleCardRoom">
                <h3>{room.title}</h3>
                {room.extra && <span>{room.extra}</span>}
              </div>
              <p>{room.description}</p>
            </div>
            <div className="divRoomCard-item-3">
              <Button
                backgroundColor="rgba(var(--aquaLight), 1)"
                color="rgba(var(--white), 1)"
                height="2.5rem"
                width="100%"
                fontSize=".875rem"
                fontWeight="600"
                borderRadius=".9375rem"
                onClick={() =>
                  console.log("Aqui deveria abrir a pag do quarto")
                }
              >
                <span>Clique aqui para agendar!</span>
                <img src={clickRoom} alt="#" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </RoomSection>
  );
};

export default SectionRooms;
