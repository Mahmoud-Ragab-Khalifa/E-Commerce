import { Button } from "@/components/ui/button";
import Image from "next/image";

const Gift = () => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-4 md:flex-row items-center justify-center  p-4 lg:p-6 bg-card text-light dark:text-dark rounded-md">
        <Image
          alt="gift"
          src={"/images/gift.jfif"}
          width={192}
          height={128}
          className="rounded-md"
        />

        <div className="flex flex-1 flex-col gap-3 justify-center items-center text-center">
          <p className="text-2xl lg:text-4xl xl:text-5xl font-medium lg:font-bold">
            GIFT <span className="text-[#e94560]">50% OFF</span> PERFECT STYLES
          </p>
          <p className="text-sm lg:text-xl leading-snug">
            Only until the end of this week. Terms and conditions apply
          </p>
        </div>

        <Button className="mx-auto max-w-50 xl:w-60">Discover Now</Button>
      </div>
    </div>
  );
};

export default Gift;
