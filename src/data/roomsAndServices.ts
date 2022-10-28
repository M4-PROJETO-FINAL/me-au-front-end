import quartoCat from "../assets/RoomPictures/quartoCat.png";
import quartoComp from "../assets/RoomPictures/quartoComp.png";
import quartoDog from "../assets/RoomPictures/quartoDog.png";
import { IRoom, IService } from "../interfaces/Reservations";

export const rooms: IRoom[] = [
  {
    id: "1",
    urlImage: quartoComp,
    title: "Quarto Compartilhado",
    description:
      "Ótimo custo benefício, essa opção é ideal para você que deseja que o seu pet interaja com outros catioros!",
    tag: "shared",
    capacity: 30,
    includedService: "passeios diários",
    price: 120,
  },

  {
    id: "2",
    urlImage: quartoDog,
    title: "Quarto Privativo (cães)",
    description:
      "Busca conforto e privacidade para o seu cãozinho? O quarto privativo é a opção ideal!",
    tag: "dogs",
    capacity: 2,
    includedService: "passeios diários",
    price: 250,
  },

  {
    id: "3",
    urlImage: quartoCat,
    title: "Quarto Privativo (gatos)",
    description:
      "Quarto privativo de alto padrão para o seu felino aproveitar com classe!",
    tag: "cats",
    capacity: 2,
    includedService: "1 petisco por dia",
    price: 250,
  },
];

export const services: IService[] = [
  { id: "1", name: "Vacina", tag: "vaccine", description: "", price: 50 },
  { id: "2", name: "Banho", tag: "bath", description: "", price: 30 },
  { id: "3", name: "Tosa", tag: "grooming", description: "", price: 30 },
  { id: "4", name: "Massagem", tag: "massage", description: "", price: 60 },
  { id: "5", name: "Natação", tag: "swimming", description: "", price: 50 },
  { id: "6", name: "Ração", tag: "premiumFood", description: "", price: 10 },
];
