import Image from "next/image";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

import ProductCardActions from "./ProductCardActions";
import { Link } from "@/i18n/navigation";
import Rating from "./Rating";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
}

const ProductCard = ({ id, image, title, price, rating }: ProductCardProps) => {
  return (
    <div
      className={`${geist.className} bg-card dark:bg-card rounded-md select-none text-center relative overflow-hidden group transition duration-500 border md:hover:border-main-color md:hover:dark:border-neutral-600 animate-fade-in`}
      dir="ltr"
    >
      <ProductCardActions id={id} />

      <Link href={`/products/${id}`} aria-label="Product Image">
        <Image
          alt="product"
          src={image}
          width={300}
          height={300}
          className="mx-auto cursor-pointer transition-transform duration-500 group-hover:scale-110 focus:ring"
        />
      </Link>
      <div className="px-4 pb-4 flex flex-col items-center text-light dark:text-dark">
        <p className="px-4 text-center w-64 sm:w-60 whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
        <span className="font-bold block my-1">${price}</span>
        <Rating rating={rating} />

        <div className="mt-4 w-full">
          <AddToCartButton product={{ id, title, price, image }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
