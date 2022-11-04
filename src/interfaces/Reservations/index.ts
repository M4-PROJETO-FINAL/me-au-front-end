export interface IPet {
  id: string;
  name: string;
  type: string;
  age: number;
  docile: boolean;
  neutered: boolean;
  vaccinated: boolean;
}

export type RoomType = "dogs" | "cats" | "shared";

export interface IRoom {
  id: string;
  urlImage: string;
  title: string;
  description: string;
  tag: RoomType;
  capacity: number;
  includedService: string;
  price: number;
}

export interface IPetRoom {
  pet_id: string;
  room_type_id: string;
}

export interface IServiceAmount {
  service_id: string;
  amount: number;
}

export interface IReservationRequest {
  checkin: string;
  checkout: string;
  pets_rooms: IPetRoom[];
  services: IServiceAmount[];
}

export interface IReservation extends IReservationRequest {
  id: string;
  created_at: string;
  updated_at: string;
}
export interface IService {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: number;
}
