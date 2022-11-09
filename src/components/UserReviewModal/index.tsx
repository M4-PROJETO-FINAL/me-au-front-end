import { FormEvent, useState } from "react";
import { IoChevronBack } from "react-icons/io5";

import { Button, Dialog, TextField } from "@mui/material";

import { UseUserReviewContext } from "../../contexts/UserReviewContext";
import HoverRating from "./RatingStars";
import { ButtonBack, ContainerUserReviewModal } from "./styles";

const UserReviewModal = () => {
  const {
    isOpenReviewModal,
    closeReviewModal,
    createReview,
    selectedReservationId,
  } = UseUserReviewContext();
  const [reviewStars, setReviewStars] = useState<number | null>(5);
  const [textReview, setTextReview] = useState<string | undefined>(undefined);
  const [messageError, setMessageError] = useState(false);

  const postReview = (e: FormEvent<HTMLFormElement>) => {
    //call API Context
    e.preventDefault();
    if (
      textReview != null &&
      reviewStars != null &&
      selectedReservationId != null
    ) {
      const reviewObject = {
        review_text: textReview,
        stars: reviewStars,
        reservation_id: selectedReservationId,
      };
      createReview(reviewObject);
      closeReviewModal();
      setMessageError(false);
    } else {
      setMessageError(true);
    }
  };

  return (
    <Dialog
      open={isOpenReviewModal}
      onClose={() => closeReviewModal()}
      disableScrollLock={true}
    >
      <ContainerUserReviewModal>
        <ButtonBack onClick={() => closeReviewModal()}>
          <IoChevronBack />
        </ButtonBack>
        <h3 className="review__title">Avalie a sua estadia</h3>
        <HoverRating
          reviewStars={reviewStars}
          setReviewStars={setReviewStars}
        />
        <form onSubmit={(e) => postReview(e)}>
          <TextField
            id="outlined-multiline-static"
            label="Deixe um comentário"
            multiline
            rows={4}
            fullWidth
            value={textReview}
            onChange={(e) => setTextReview(e.target.value)}
          />
          {messageError && <p style={{ color: "red" }}>Campo obrigatório</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", fontSize: 16, marginTop: "1rem" }}
          >
            Salvar
          </Button>
        </form>
      </ContainerUserReviewModal>
    </Dialog>
  );
};

export default UserReviewModal;
