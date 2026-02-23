import { ImageProbs } from "@/lib/types";
import ProductsImageCarousel from "@/components/ProductsList/ProductsImageCarousel";
import ProductsCarousel from "./ProductsCarousel";

interface CategoryCarouselProbs {
  title: string;
  arrayOfImages: ImageProbs[];
  limit: number;
  skip: number;
}

const CategoryCarousel = async ({
  arrayOfImages,
  title,
  limit,
  skip,
}: CategoryCarouselProbs) => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-4">
        <ProductsImageCarousel arrayOfImages={arrayOfImages} title={title} />

        <ProductsCarousel limit={limit} skip={skip} />
      </div>
    </div>
  );
};

export default CategoryCarousel;
