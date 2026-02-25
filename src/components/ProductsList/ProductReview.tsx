import { Review } from "@/lib/types";
import { User } from "lucide-react";

interface ProductReviewProbs {
  reviews: Review[];
}

import { Button } from "@/components/ui/button";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

import { Textarea } from "@/components/ui/textarea";
import Rating from "./Rating";
import SetRating from "./SetRating";
import { useTranslations } from "next-intl";

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
            <Rating rating={rating} />
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
  const t = useTranslations("productDetails");

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
        <h1 className="text-xl md:text-2xl mb-6">{t("writeAReview")}</h1>

        <div className="flex items-center gap-5 mb-6">
          <p className="relative">
            {t("yourRating")}{" "}
            <span className="absolute -end-3 top-0 text-red-600">*</span>
          </p>

          <SetRating />
        </div>

        <div className="w-full max-w-md">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="feedback">
                      <p className="relative">
                        {t("yourReview")}{" "}
                        <span className="absolute -end-3 top-0 text-red-600">
                          *
                        </span>
                      </p>
                    </FieldLabel>
                    <Textarea
                      id="feedback"
                      placeholder={t("textarea")}
                      className="resize-none h-36 border-neutral-300 dark:border-accent"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button variant={"outline"} size={"lg"} className="-mt-3">
                  {t("submit")}
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
