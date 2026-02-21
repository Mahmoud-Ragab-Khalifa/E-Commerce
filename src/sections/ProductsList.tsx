import ProductsCarousel from "@/components/ProductsList/ProductsCarousel";
import { Link } from "@/i18n/navigation";
import { GetProductsProbs } from "@/lib/types";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const ProductsList = ({ limit, skip, category }: GetProductsProbs) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-light dark:text-dark text-[27px] md:text-[32px] font-bold capitalize">
            {category}
          </h1>

          <Link
            href={`/products/category/${category}`}
            className="flex items-center gap-0.5 text-sm relative group py-0.5"
          >
            <span className="absolute bottom-0 start-0 rounded-full w-0 h-0.5 group-hover:w-full bg-light dark:bg-dark transition-all duration-300"></span>
            {t("moreProducts")}
            {locale === "ar" ? (
              <ArrowLeft size={14} />
            ) : (
              <ArrowRight size={14} />
            )}
          </Link>
        </div>

        <ProductsCarousel limit={limit} skip={skip} category={category} />
      </div>
    </div>
  );
};

export default ProductsList;
