import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { getProductsBySingleCategory } from "@/services/getProductsBySingleCategory";
import { Suspense } from "react";
import ProductCard from "@/components/ProductsList/ProductCard";
import ProductCardSkeleton from "@/components/ProductsList/ProductCardSkeleton";
import { Product } from "@/lib/types";
import ProductsImageCarousel from "@/components/ProductsList/ProductsImageCarousel";

const Groceries = async () => {
  const products = await getProductsBySingleCategory("groceries");

  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-4">
        <ProductsImageCarousel />
        <div>
          <Carousel opts={{ dragFree: true }}>
            <CarouselContent>
              {products.map((product: Product) => (
                <CarouselItem
                  key={product.id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Suspense fallback={<ProductCardSkeleton />}>
                    <ProductCard
                      id={product.id}
                      image={product.thumbnail}
                      title={product.title}
                      price={product.price}
                      rating={product.rating}
                    />
                  </Suspense>
                </CarouselItem>
              ))}
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

export default Groceries;
