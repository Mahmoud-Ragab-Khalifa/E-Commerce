import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "next-intl";

import ProductCard from "./ProductCard";

const ProductsCarousel = () => {
  const locale = useLocale();
  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  return (
    <Carousel dir={dir} opts={{ direction: dir }}>
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, idx) => (
          <CarouselItem
            key={idx}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="ltr:left-4 rtl:right-4 shadow-sm dark:shadow-neutral-300 disabled:shadow-none sm:rounded-md bg-main-color! dark:bg-[#253853]! text-white! disabled:opacity-35! rtl:rotate-180" />
      <CarouselNext className="ltr:right-4 rtl:right-full rtl:-mr-12 shadow-sm dark:shadow-neutral-300 disabled:shadow-none sm:rounded-md bg-main-color! dark:bg-[#253853]! text-white! disabled:opacity-35! rtl:rotate-180" />
    </Carousel>
  );
};

export default ProductsCarousel;
