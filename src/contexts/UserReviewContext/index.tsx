import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import { IProviderProps } from "../../interfaces/User";
import { api } from "../../services";

interface IUserReviewProvider {
  createReview: (data: IReviewRequest) => void;
  isOpenReviewModal: boolean;
  openReviewModal: (reservationId: string) => void;
  closeReviewModal: () => void;
  selectedReservationId?: string;
}

export interface IReviewRequest {
  text_review: string;
  stars: number;
  reservation_id: string;
}

const UserReviewContext = createContext({} as IUserReviewProvider);

export const UserReviewContextProvider = ({ children }: IProviderProps) => {
  const [selectedReservationId, setSelectedReservationId] = useState<string>();
  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);

  const createReview = (data: IReviewRequest) => {
    api
      .post("/reviews", data)
      .then(() => toast.success("Avaliação feita com sucesso"))
      .catch(() => toast.error("Não foi possível realizar a avaliação."));
  };

  const openReviewModal = (reservationId: string) => {
    setIsOpenReviewModal(true);
    setSelectedReservationId(reservationId);
  };

  const closeReviewModal = () => {
    setIsOpenReviewModal(false);
  };

  return (
    <UserReviewContext.Provider
      value={{
        createReview,
        closeReviewModal,
        isOpenReviewModal,
        openReviewModal,
        selectedReservationId,
      }}
    >
      {children}
    </UserReviewContext.Provider>
  );
};

export const UseUserReviewContext = () => useContext(UserReviewContext);
