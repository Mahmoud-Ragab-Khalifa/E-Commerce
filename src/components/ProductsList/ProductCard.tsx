import Image from "next/image";
import { Button } from "../ui/button";
import { Geist, Tajawal } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["500"],
});

import { useLocale, useTranslations } from "next-intl";
import ProductCardActions from "./ProductCardActions";
import { Link } from "@/i18n/navigation";
import Rating from "./Rating";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
}

const ProductCard = ({ id, image, title, price, rating }: ProductCardProps) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div
      className={`${geist.className} bg-card dark:bg-card rounded-md select-none text-center relative overflow-hidden group transition duration-500 border md:hover:border-main-color md:hover:dark:border-neutral-600 animate-fade-in`}
      dir="ltr"
    >
      <ProductCardActions id={id} />

      <Link href={`/products/${id}`}>
        <Image
          alt="product"
          src={image}
          width={300}
          height={300}
          className="mx-auto cursor-pointer transition-transform duration-500 group-hover:scale-110"
        />
      </Link>
      <div className="p-4 flex flex-col items-center text-light dark:text-dark">
        <h3 className="leading-normal h-12 flex flex-col items-center justify-center">
          {title}
        </h3>
        <span className="font-bold block my-1">${price}</span>
        <Rating rating={rating} />
        <Button
          variant={"default"}
          className={`w-full mt-4 bg-light hover:bg-light/95 dark:bg-dark/80 dark:hover:bg-dark/90 
            ${locale === "ar" ? tajawal.className : geist.className}`}
        >
          {t("addToCart")}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
