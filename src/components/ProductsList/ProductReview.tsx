import { Review } from "@/lib/types";
import { User } from "lucide-react";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface ProductReviewProbs {
  reviews: Review[];
}

import { Button } from "@/components/ui/button";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

import { Textarea } from "@/components/ui/textarea";

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
            <span className="text-xs">({rating})</span>
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
    <div className="flex flex-col gap-8 lg:gap-14">
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

      <div>
        <h1 className="text-xl md:text-2xl mb-6">
          Write a Review for this product
        </h1>

        <div className="flex items-center gap-5 mb-6">
          <p className="relative">
            Your Rating{" "}
            <span className="absolute -end-3 top-0 text-red-600">*</span>
          </p>

          <Rating
            name="half-rating"
            defaultValue={0.5}
            precision={0.5}
            size="small"
            emptyIcon={
              <StarIcon fontSize="inherit" className="dark:text-neutral-700" />
            }
          />
        </div>

        <div className="w-full max-w-md">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="feedback">
                      <p className="relative">
                        Your Review{" "}
                        <span className="absolute -end-3 top-0 text-red-600">
                          *
                        </span>
                      </p>
                    </FieldLabel>
                    <Textarea
                      id="feedback"
                      placeholder="Write a review here..."
                      className="resize-none h-36 border-neutral-300 dark:border-accent"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button variant={"outline"} size={"lg"} className="-mt-3">
                  Submit
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
