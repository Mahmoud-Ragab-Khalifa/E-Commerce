import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Button } from "../ui/button";
import { Geist, Tajawal } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["500"],
});

import StarIcon from "@mui/icons-material/Star";
import { useLocale, useTranslations } from "next-intl";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
}

const ProductCard = ({ image, title, price, rating }: ProductCardProps) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div
      className={`${geist.className} bg-card dark:bg-card rounded-md select-none text-center`}
      dir="ltr"
    >
      <Image
        alt="product"
        src={image}
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="p-4 flex flex-col items-center text-light dark:text-dark">
        <h3 className="leading-normal h-12 flex flex-col items-center justify-center">
          {title}
        </h3>
        <span className="font-bold block my-1">${price}</span>
        <Rating
          size="small"
          value={rating}
          readOnly
          precision={0.1}
          emptyIcon={
            <StarIcon fontSize="inherit" className="dark:text-neutral-950" />
          }
        />
        <Button
          variant={"default"}
          className={`w-full mt-4 bg-light hover:bg-light/95 dark:bg-dark/80 dark:hover:bg-dark/90 ${locale === "ar" ? tajawal.className : geist.className}`}
        >
          {t("addToCart")}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
