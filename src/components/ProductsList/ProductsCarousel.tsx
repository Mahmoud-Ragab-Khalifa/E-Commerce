import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useLocale } from "next-intl";

import Products from "./Products";

const ProductsCarousel = () => {
  const locale = useLocale();
  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  return (
    <Carousel dir={dir} opts={{ direction: dir, dragFree: true }}>
      <CarouselContent>
        <Products />
      </CarouselContent>

      <CarouselPrevious className="ltr:left-4 rtl:right-4 rounded-md bg-main-color! dark:bg-[#253853]! text-white! disabled:opacity-35! rtl:rotate-180" />
      <CarouselNext className="ltr:right-4 rtl:right-full rtl:-mr-12 rounded-md bg-main-color! dark:bg-[#253853]! text-white! disabled:opacity-35! rtl:rotate-180" />
    </Carousel>
  );
};

export default ProductsCarousel;
