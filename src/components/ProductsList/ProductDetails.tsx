import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "../ui/button";
import ImageSelection from "./ImageSelection";

interface ProductDetailsProbs {
  title: string;
  images: string[];
  category: string;
  brand: string;
  barcode: string;
  price: number;
  discountPercentage: number;
  rating: number;
  warrantyInformation: string;
  availabilityStatus: string;
}

const ProductDetails = ({
  images,
  title,
  category,
  barcode,
  price,
  discountPercentage,
  rating,
  warrantyInformation,
  availabilityStatus,
  brand,
}: ProductDetailsProbs) => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md-gap-4 lg:gap-10 md:items-center">
      <ImageSelection images={images} />

      <div className="flex-1 md:pt-6 sm:ps-20">
        <h2 className="font-bold text-xl md:text-2xl text-light dark:text-dark">
          {title}
        </h2>

        <p className="text-[#4b5563] mt-3">
          Category:{" "}
          <span className="font-bold text-light dark:text-dark capitalize">
            {category}
          </span>
        </p>

        <p className="text-[#4b5563] my-0.5">
          Brand:{" "}
          <span className="font-bold text-light dark:text-dark">{brand}</span>
        </p>

        <p className="text-[#4b5563]">
          Product Code:{" "}
          <span className="font-bold text-light dark:text-dark">{barcode}</span>
        </p>

        <div className="mt-4">
          <span className="font-bold text-3xl text-light dark:text-dark me-2.5">
            ${Number((price - (price * discountPercentage) / 100).toFixed(2))}
          </span>
          <span className="font-normal line-through text-xl text-[#e94560]">
            ${price}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-[#4b5563]">Rated: </span>
          <Rating
            size="small"
            value={rating}
            readOnly
            precision={0.1}
            emptyIcon={
              <StarIcon fontSize="inherit" className="dark:text-neutral-950" />
            }
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <span className="text-[#4b5563]">Option: </span>
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Button
                key={idx}
                variant={"outline"}
                size={"sm"}
                className="text-[13px]"
              >
                Option {idx + 1}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <span className="text-[#4b5563]">Type: </span>
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Button
                key={idx}
                variant={"outline"}
                size={"sm"}
                className="text-[13px]"
              >
                Type {idx + 1}
              </Button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[#4b5563]">
          Warranty Information:{" "}
          <span className="font-bold text-light dark:text-dark capitalize">
            {warrantyInformation}
          </span>
        </p>

        <p className="mt-1 text-[#4b5563]">
          Availability Status:{" "}
          <span className="font-bold text-light dark:text-dark capitalize">
            {availabilityStatus}
          </span>
        </p>

        <Button
          variant={"default"}
          className={`w-full mt-4 sm:max-w-81.25 md:mt-9 xl:mt-11 bg-light hover:bg-light/95 dark:bg-dark/80 dark:hover:bg-dark/90`}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
