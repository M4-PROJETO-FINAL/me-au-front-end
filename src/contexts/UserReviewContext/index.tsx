import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { IReservation } from "../../interfaces/Reservations";
import { IProviderProps, IUser } from "../../interfaces/User";
import { api } from "../../services";

interface IUserReviewProvider {
  createReview: (data: IReviewRequest) => void;
  isOpenReviewModal: boolean;
  openReviewModal: (reservationId: string) => void;
  closeReviewModal: () => void;
  selectedReservationId?: string;
  isReviewed: (reservationId: string) => boolean;
}

export interface IReviewRequest {
  review_text: string;
  stars: number;
  reservation_id: string;
}

export interface IAllReviews {
  review_text: string;
  stars: number;
  reservation: IReservation;
  user: IUser;
}

const UserReviewContext = createContext({} as IUserReviewProvider);

export const UserReviewContextProvider = ({ children }: IProviderProps) => {
  const { t } = useTranslation();
  const [selectedReservationId, setSelectedReservationId] = useState<string>();
  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);
  const [allReviews, setAllReviews] = useState<IAllReviews[]>();

  const createReview = (data: IReviewRequest) => {
    api
      .post("/reviews/", data)
      .then(() => toast.success(`${t("Avaliação feita com sucesso")}`))
      .catch((e) => {
        console.log(e);
        toast.error(`${t("Não foi possível realizar a avaliação.")}`);
      });
  };

  useEffect(() => {
    api
      .get("/reviews")
      .then((res) => {
        setAllReviews(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const isReviewed = (reservationId: string) => {
    return (
      allReviews?.some((review) => review?.reservation?.id === reservationId) ||
      false
    );
  };

  const openReviewModal = (reservationId: string) => {
    console.log("here");
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
        isReviewed,
      }}
    >
      {children}
    </UserReviewContext.Provider>
  );
};

export const UseUserReviewContext = () => useContext(UserReviewContext);
