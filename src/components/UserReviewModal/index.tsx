import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";

import { Button, Dialog, TextField } from "@mui/material";

import { UseUserReviewContext } from "../../contexts/UserReviewContext";
import HoverRating from "./RatingStars";
import { ButtonBack, ContainerUserReviewModal } from "./styles";

const UserReviewModal = () => {
  const { isOpenReviewModal, setIsOpenReviewModal, createReview } =
    UseUserReviewContext();
  const [reviewStars, setReviewStars] = useState<number | null>(2);
  const [textReview, setTextReview] = useState<string | null>();

  const postReview = (e) => {
    //call API Context
    e.preventDefault();
    const reviewObject = {
      text_review: textReview,
      review_stars: reviewStars,
    };
    console.log(reviewObject);
  };

  return (
    <Dialog
      open={isOpenReviewModal}
      onClose={() => setIsOpenReviewModal(false)}
      disableScrollLock={true}
    >
      <ContainerUserReviewModal>
        <ButtonBack onClick={() => setIsOpenReviewModal(false)}>
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
