import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

interface PromotionalCardProbs {
  title: string;
  subTitle: string;
  isSale: boolean;
  desc: string;
  image: string;
}

const PromotionalCard = ({
  title,
  subTitle,
  isSale,
  desc,
  image,
}: PromotionalCardProbs) => {
  return (
    <div
      className="text-light dark:text-dark bg-card dark:bg-card py-4 px-6 rounded-md flex-1 
      md:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-32px)/3)] flex items-center justify-around overflow-hidden
      transition-transform duration-300 hover:-translate-y-3 relative group"
    >
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-0 h-0.5 bg-main-color dark:bg-neutral-500 rounded-b-md group-hover:w-full transition-all duration-500" />

      <div className="whitespace-nowrap font-medium">
        <h3 className="uppercase font-bold">{title}</h3>

        <p className="my-1">{subTitle}</p>

        {isSale ? (
          <p className="text-[#e94560]">{desc}</p>
        ) : (
          <span className="block">{desc}</span>
        )}

        <Button variant={"link"} className="gap-1! items-center! p-0! mt-6">
          Shop Now <ArrowRight />
        </Button>
      </div>

      <Image alt="image" src={image} width={140} height={140} />
    </div>
  );
};

export default PromotionalCard;
