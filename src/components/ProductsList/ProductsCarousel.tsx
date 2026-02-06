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

      <CarouselPrevious
        className="ltr:left-2 rtl:right-2 rtl:rotate-180"
        variant={"ghost"}
        size={"icon-lg"}
      />
      <CarouselNext
        className="ltr:right-2 rtl:right-full rtl:-mr-10 rtl:rotate-180"
        variant={"ghost"}
        size={"icon"}
      />
    </Carousel>
  );
};

export default ProductsCarousel;
