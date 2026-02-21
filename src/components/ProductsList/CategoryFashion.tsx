"use client";

import { useState } from "react";
import useSWR from "swr";

import FilterList from "@/components/ProductsList/FilterList";
import ProductCard from "@/components/ProductsList/ProductCard";
import ProductCardSkeleton from "@/components/ProductsList/ProductCardSkeleton";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Product } from "@/lib/types";
import { fetchProductsByCategories } from "@/services/fetchProductsByCategories";
import { useLocale } from "next-intl";

interface CategoryFashionProbs {
  title: string;
  categoriesArray: string[];
}

const CategoryFashion = ({ title, categoriesArray }: CategoryFashionProbs) => {
  const locale = useLocale();
  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  const [category, setCategory] = useState(categoriesArray[0]);

  const categoriesToFetch =
    category === "view-all" ? categoriesArray : [category];

  const {
    data: products,
    error,
    isLoading,
  } = useSWR(categoriesToFetch, () =>
    fetchProductsByCategories(categoriesToFetch),
  );

  if (error) return null;

  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col lg:flex-row gap-4 lg:items-start">
        <FilterList
          category={title}
          setCategory={setCategory}
          items={[...categoriesArray, "view-all"]}
        />

        <div className="products-carousel overflow-hidden">
          <Carousel dir={dir} opts={{ direction: dir, dragFree: true }}>
            <CarouselContent>
              {isLoading ? (
                <div className="flex gap-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <ProductCardSkeleton key={idx} />
                  ))}
                </div>
              ) : (
                products?.map((product: Product) => (
                  <CarouselItem
                    key={product.id}
                    className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 xl:min-w-75"
                  >
                    <ProductCard
                      id={product.id}
                      image={product.thumbnail}
                      title={product.title}
                      price={product.price}
                      rating={product.rating}
                    />
                  </CarouselItem>
                ))
              )}
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
        </div>
      </div>
    </div>
  );
};

export default CategoryFashion;
