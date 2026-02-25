import { useTranslations } from "next-intl";
import AddToCartButton from "./AddToCartButton";
import ImageSelection from "./ImageSelection";
import OptionAndType from "./OptionAndType";
import Rating from "./Rating";

interface ProductDetailsProbs {
  id: number;
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
  id,
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
  const t = useTranslations("productDetails");

  return (
    <div className="flex flex-col gap-8 md:flex-row md-gap-4 lg:gap-10 md:items-center">
      <ImageSelection images={images} />

      <div className="flex-1 md:pt-6 sm:ps-20">
        <h2 className="font-bold text-xl md:text-2xl text-light dark:text-dark">
          {title}
        </h2>

        <p className="text-[#4b5563] mt-3">
          {t("category")}:{" "}
          <span className="font-bold text-light dark:text-dark capitalize">
            {category}
          </span>
        </p>

        <p className="text-[#4b5563] my-0.5">
          {t("brand")}:{" "}
          <span className="font-bold text-light dark:text-dark">
            {brand || `${title.slice(0)}`}
          </span>
        </p>

        <p className="text-[#4b5563]">
          {t("code")}:{" "}
          <span className="font-bold text-light dark:text-dark">{barcode}</span>
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="font-bold text-3xl text-light dark:text-dark">
            ${Number((price - (price * discountPercentage) / 100).toFixed(2))}
          </span>
          <span className="font-normal line-through text-xl text-[#e94560]">
            ${price}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-[#4b5563]">{t("rated")}: </span>
          <Rating rating={rating} />
        </div>

        <OptionAndType />

        <p className="mt-4 text-[#4b5563]">
          {t("warranty")}:{" "}
          <span className="font-bold text-light dark:text-dark capitalize">
            {warrantyInformation}
          </span>
        </p>

        <p className="mt-1 text-[#4b5563]">
          {t("availability")}:{" "}
          <span className="font-bold text-light dark:text-dark capitalize">
            {availabilityStatus}
          </span>
        </p>

        <div className={`w-full mt-4 sm:max-w-81.25 md:mt-9 xl:mt-11`}>
          <AddToCartButton
            product={{
              id: Number(id),
              title: title,
              price: price,
              image: images[0],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
