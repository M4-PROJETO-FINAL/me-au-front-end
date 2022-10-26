export interface IPet {
  id: string;
  age: number;
  isDocile: boolean;
  isNeutered: boolean;
  isVaccinated: boolean;
  name: string;
  type: string;
}

export interface IRoom {
  urlImage: string;
  title: string;
  description: string;
  tag: "dogs" | "cats" | "shared";
  capacity: number;
  includedService: string;
  price: number;
}
