import Image from "next/image";
import { Button } from "../ui/button";

interface CategoryCardProbs {
  category: string;
  image: string;
}

const CategoryCard = ({ category, image }: CategoryCardProbs) => {
  return (
    <div className="group bg-card dark:bg-card rounded-md text-center p-4 max-h-62.5">
      <Image
        className="mx-auto transition-transform duration-300 group-hover:scale-[1.1] group-hover:rotate-[-5deg]"
        alt={"gaming"}
        src={image}
        width={150}
        height={150}
      />
      <Button
        variant={"default"}
        size={"lg"}
        className="w-full font-bold! bg-neutral-200 text-light group-hover:bg-light dark:text-dark
          transition-colors duration-500 group-hover:text-neutral-100 group-hover:dark:bg-[#253853] dark:bg-accent hover:bg-light/95"
      >
        {category}
      </Button>
    </div>
  );
};

export default CategoryCard;
