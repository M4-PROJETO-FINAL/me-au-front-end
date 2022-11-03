import quartoCat from "../assets/RoomPictures/quartoCat.png";
import quartoComp from "../assets/RoomPictures/quartoComp.png";
import quartoDog from "../assets/RoomPictures/quartoDog.png";
import { IRoom, IService } from "../interfaces/Reservations";

export const rooms: IRoom[] = [
  {
    id: "1",
    urlImage: quartoComp,
    title: `"RoomServices.Quarto Compartilhado")}`,
    description: `$
      "RoomServices.Ótimo custo benefício, essa opção é ideal para você que deseja que o seu pet interaja com outros catioros!",
    )}`,
    tag: "shared",
    capacity: 30,
    includedService: `$"RoomServices.passeios diários")}`,
    price: 120,
  },

  {
    id: "2",
    urlImage: quartoDog,
    title: `$"RoomServices.Quarto Privativo (cães)")}`,
    description: `$
      "RoomServices.Busca conforto e privacidade para o seu cãozinho? O quarto privativo é a opção ideal!",
    )}`,
    tag: "dogs",
    capacity: 2,
    includedService: `$"RoomServices.passeios diários")}`,
    price: 250,
  },

  {
    id: "3",
    urlImage: quartoCat,
    title: `$"RoomServices.Quarto Privativo (gatos)")}`,
    description: `$
      "RoomServices.Quarto privativo de alto padrão para o seu felino aproveitar com classe!",
    )}`,
    tag: "cats",
    capacity: 2,
    includedService: `$"RoomServices.1 petisco por dia")}`,
    price: 250,
  },
];

export const services: IService[] = [
  {
    id: "1",
    name: `$"AddServices.Vacina")}`,
    tag: "vaccine",
    description: "",
    price: 0,
  },
  {
    id: "2",
    name: `$"AddServices.Banho")}`,
    tag: "bath",
    description: "",
    price: 30,
  },
  {
    id: "3",
    name: `"AddServices.Tosa")}`,
    tag: "grooming",
    description: "",
    price: 30,
  },
  {
    id: "4",
    name: `$"AddServices.Massagem")}`,
    tag: "massage",
    description: "",
    price: 60,
  },
  {
    id: "5",
    name: `$"AddServices.Natação")}`,
    tag: "swimming",
    description: "",
    price: 50,
  },
  {
    id: "6",
    name: `"AddServices.Ração}`,
    tag: "premiumFood",
    description: "",
    price: 10,
  },
];
