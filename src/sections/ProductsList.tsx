import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

const ProductsList = () => {
  const locale = useLocale();
  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 mb-56 flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-light dark:text-dark text-[27px] md:text-[32px] font-bold">
            Deals Of The Day
          </h1>
          <Button
            variant={"link"}
            className="flex items-center w-fit p-0! gap-0.5!"
          >
            More Products {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
          </Button>
        </div>
        <Carousel dir={dir} opts={{ direction: dir }}>
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="bg-card dark:bg-card rounded-md h-80 p-4 select-none">
                  Hello
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 shadow-sm dark:shadow-neutral-300 disabled:shadow-none sm:rounded-md bg-main-color! dark:bg-[#253853]! text-white! disabled:opacity-35!" />
          <CarouselNext className="right-4 shadow-sm dark:shadow-neutral-300 disabled:shadow-none sm:rounded-md bg-main-color! dark:bg-[#253853]! text-white! disabled:opacity-35!" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductsList;
