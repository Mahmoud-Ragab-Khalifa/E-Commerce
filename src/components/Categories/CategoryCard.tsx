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
        className="mx-auto transition-transform duration-300 group-hover:scale-[1.1] group-hover:rotate-[-5deg] group-active:scale-[1.1] group-active:rotate-[-5deg]"
        alt={"gaming"}
        src={image}
        width={150}
        height={150}
      />
      <Button
        variant={"default"}
        size={"lg"}
        className="w-full font-bold transition-colors duration-500
           text-light dark:text-dark
           group-hover:text-neutral-100 group-active:text-neutral-100 group-hover:dark:bg-[#253853]
           bg-neutral-200 dark:bg-accent group-hover:bg-light group-active:bg-light 
           hover:bg-light/95 group-active:dark:bg-[#253853]"
      >
        {category}
      </Button>
    </div>
  );
};

export default CategoryCard;
