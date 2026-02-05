import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Button } from "../ui/button";

const ProductCard = () => {
  return (
    <div className="bg-card dark:bg-card rounded-md select-none text-center">
      <Image
        alt="product"
        src={"/images/thumbnail.webp"}
        width={300}
        height={300}
      />
      <div className="p-4 flex flex-col gap-1 items-center text-light dark:text-dark">
        <h3 className="leading-normal">Essence Mascara Lash Princess</h3>
        <span className="font-bold">$9.99</span>
        <Rating size="small" value={3.2} readOnly precision={0.1} />
        <Button
          variant={"default"}
          className="w-full mt-4 bg-light hover:bg-light/95 dark:bg-dark dark:hover:bg-dark/80"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
