import { useState } from "react";
import { useTranslation } from "react-i18next";

import StarIcon from "@mui/icons-material/Star";
import { Box, Rating } from "@mui/material";

interface IHoverRatingProps {
  reviewStars: number | null;
  setReviewStars: (newValue: number | null) => void;
}

export default function HoverRating({
  setReviewStars,
  reviewStars,
}: IHoverRatingProps) {
  const [hover, setHover] = useState(-1);
  const { t } = useTranslation();
  const labels: { [index: string]: string } = {
    0.5: t("Horrível"),
    1: `${t("Horrível")}+`,
    1.5: t("Ruim"),
    2: `${t("Ruim")}+`,
    2.5: "Ok",
    3: "Ok+",
    3.5: t("Bom"),
    4: `${t("Bom")}+`,
    4.5: t("Ótimo"),
    5: `${t("Ótimo")}+`,
  };

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
        <Box sx={{ ml: 2, minWidth: "90px" }}>
          {labels[hover !== -1 ? hover : reviewStars]}
        </Box>
      )}
    </Box>
  );
}
