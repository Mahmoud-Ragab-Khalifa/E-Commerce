import { Review } from "@/lib/types";
import { User } from "lucide-react";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface ProductReviewProbs {
  reviews: Review[];
}

const UserCard = ({ reviewerName, rating, comment }: Review) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-center rounded-full bg-card dark:bg-card w-12 h-12">
          <User size={35} />
        </div>
        <div className="flex flex-col gap-0.5 text-light dark:text-dark">
          <h2>{reviewerName}</h2>
          <div className="flex gap-2 items-end">
            <Rating
              size="small"
              value={rating}
              readOnly
              precision={0.1}
              emptyIcon={
                <StarIcon
                  fontSize="inherit"
                  className="dark:text-neutral-700"
                />
              }
            />
            <span className="text-xs">{rating}</span>
          </div>
        </div>
      </div>

      <p className="md:max-w-2/3 xl:max-w-1/2 leading-tight text-sm">
        {comment}
      </p>
    </div>
  );
};

const ProductReview = ({ reviews }: ProductReviewProbs) => {
  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review, idx) => (
        <UserCard
          key={idx}
          reviewerName={review.reviewerName}
          rating={review.rating}
          comment={review.comment}
        />
      ))}
    </div>
  );
};

export default ProductReview;
