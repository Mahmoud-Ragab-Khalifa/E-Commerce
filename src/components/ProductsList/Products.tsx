import { CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { GetProductsProbs, Product } from "@/lib/types";
import { Suspense } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { getProductsByLimitAndSkip } from "@/services/getProductsByLimitAndSkip";

const Products = async ({
  limit,
  skip,
}: Omit<GetProductsProbs, "category">) => {
  const data = await getProductsByLimitAndSkip(limit, skip);

  return (
    <>
      {data.products.map((product: Product) => (
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
    </>
  );
};

export default Products;
