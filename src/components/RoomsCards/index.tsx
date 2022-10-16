import quartoCat from "../../assets/quartoCat.png";
import quartoComp from "../../assets/quartoComp.png";
import quartoDog from "../../assets/quartoDog.png";
import { RoomSection } from "./styles";

interface IRoom {
  urlImage: string;
  title: string;
  description: string;
  extra?: string;
}

const SectionRooms = () => {
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
            <img src={room.urlImage} alt={room.title} />
            <div>
              <h3>{room.title}</h3>
              {room.extra && <span>{room.extra}</span>}
              <p>{room.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </RoomSection>
  );
};

export default SectionRooms;
