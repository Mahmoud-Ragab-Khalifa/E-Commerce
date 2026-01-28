import { Button } from "@/components/ui/button";

import Image from "next/image";

interface SwiperCardProps {
  category: string;
  image: string;
}

const SwipperCard = ({ category, image }: SwiperCardProps) => {
  return (
    <div className="card select-none overflow-hidden flex flex-col md:flex-row justify-between items-center">
      <div className="content text-center md:text-start flex-1 p-4 md:ps-16 xl:ps-24 text-light dark:text-dark min-w-75">
        <p className="text-[24px] md:text-[30px] whitespace-nowrap font-medium">
          Lifestyle Collection
        </p>
        <h1 className="text-[44px] md:text-[60px] font-bold leading-none">
          {category}
        </h1>
        <p className="text-[24px] md:text-[30px] whitespace-nowrap font-medium">
          Sale Up To <span className="text-[#e94560]">10% Off</span>
        </p>
        <p className="text-[16px] mb-4">
          Get Free Shipping on orders over $99.00
        </p>
        <Button variant={"default"} size={"lg"}>
          Shop Now
        </Button>
      </div>
      <Image src={image} alt="man" width={500} height={500} />
    </div>
  );
};

export default SwipperCard;
