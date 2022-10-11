import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export interface IReview {
  customerName: string;
  customerImg: string;
  stars: number;
  reviewText: string;
}

interface IReviewProps {
  reviewData: IReview;
}

const Review = ({ reviewData }: IReviewProps) => {
  let starsCount = reviewData.stars;
  const stars = [] as JSX.Element[];
  for (let i = 0; i < 5; i++) {
    if (starsCount === 0) stars.push(<BsStar key={i} color="#FF8947" />);

    if (starsCount === 0.5) {
      stars.push(<BsStarHalf key={i} color="#FF8947" />);
      starsCount -= 0.5;
    }

    if (starsCount >= 1) {
      stars.push(<BsStarFill key={i} color="#FF8947" />);
      starsCount--;
    }
  }

  return (
    <li className="reviewCard">
      <img src={reviewData.customerImg} alt="" />
      <div className="cardBackground">
        <h5>{reviewData.customerName}</h5>
        <div className="stars"> {stars}</div>
        <p>{reviewData.reviewText}</p>
      </div>
    </li>
  );
};

export default Review;
