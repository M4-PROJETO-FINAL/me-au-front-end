import { IReview } from "../../components/CustomerReviews/Review";
import { IPet, IReservation } from "../Reservations";

export interface IProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf?: string;
  profile_img?: string;
  review: IReview;
  pets: IPet[];
  reservations: IReservation[];
}
