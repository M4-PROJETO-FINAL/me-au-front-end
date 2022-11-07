import { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import { Box, Rating } from "@mui/material";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

interface IHoverRatingProps {
  reviewStars: number | null;
  setReviewStars: (newValue: number | null) => void;
}

export default function HoverRating({
  setReviewStars,
  reviewStars,
}: IHoverRatingProps) {
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        minWidth: "300px",
        justifyContent: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={reviewStars}
        precision={0.5}
        onChange={(event, newValue) => {
          setReviewStars(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {reviewStars !== null && (
        <Box sx={{ ml: 2, minWidth: "80px" }}>
          {labels[hover !== -1 ? hover : reviewStars]}
        </Box>
      )}
    </Box>
  );
}
