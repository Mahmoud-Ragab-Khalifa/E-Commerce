import ProductsCarousel from "@/components/ProductsList/ProductsCarousel";
import { Button } from "@/components/ui/button";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

const ProductsList = () => {
  const locale = useLocale();

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

        <ProductsCarousel />
      </div>
    </div>
  );
};

export default ProductsList;
