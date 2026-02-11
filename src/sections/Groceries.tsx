import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import { Dancing_Script } from "next/font/google";
import { groceriesList } from "@/lib/dataLists";

const enFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const Groceries = () => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-4 mb-56">
        <div className="bg-card rounded-md">
          <h2
            className={`${enFont.className} pt-4 px-6 text-2xl lg:text-4xl font-bold bg-linear-to-r 
          from-indigo-600 via-purple-600 to-pink-600
          dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-400
          bg-clip-text text-transparent animate-pulse`}
          >
            All The Foods You Need
          </h2>
          <Carousel opts={{ dragFree: true }}>
            <CarouselContent>
              {groceriesList.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-25 lg:basis-75 m-0! p-0!"
                >
                  <Image
                    alt={item.name}
                    src={item.src}
                    width={300}
                    height={300}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Groceries;
