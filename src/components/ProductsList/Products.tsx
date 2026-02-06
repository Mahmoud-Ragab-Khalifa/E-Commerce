import { CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/types";
import { Suspense } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10", {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

const Products = async () => {
  const data = await getProducts();

  return (
    <>
      {data.products.map((product: Product) => (
        <CarouselItem
          key={product.id}
          className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
        >
          <Suspense fallback={<ProductCardSkeleton />}>
            <ProductCard
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
