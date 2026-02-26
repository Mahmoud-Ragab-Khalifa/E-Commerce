import { useTranslations } from "next-intl";
import AddToCartButton from "./AddToCartButton";
import ImageSelection from "./ImageSelection";
import OptionAndType from "./OptionAndType";
import Rating from "./Rating";
import ProductInfoTitle from "./ProductInfoTitle";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

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
        <h1 className="font-bold text-2xl md:text-3xl text-light dark:text-dark">
          {title}
        </h1>

        <ProductInfoTitle title={t("theCategory")} desc={category} />
        <ProductInfoTitle
          title={t("brand")}
          desc={brand || `${title.slice(0)}`}
        />
        <ProductInfoTitle title={t("code")} desc={barcode} />

        <div className={`${geist.className} mt-4 flex items-center gap-2`}>
          <span className="font-bold text-3xl text-light dark:text-dark">
            ${Number((price - (price * discountPercentage) / 100).toFixed(2))}
          </span>
          <span className="font-normal line-through text-xl text-[#e94560]">
            ${price}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="font-bold text-[#0aa2b5]">{t("rated")}</span>
          <Rating rating={rating} />
        </div>

        <OptionAndType />

        <ProductInfoTitle
          title={t("warrantyInformation")}
          desc={warrantyInformation}
        />
        <ProductInfoTitle
          title={t("availabilityStatus")}
          desc={availabilityStatus}
        />

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
