import { Skeleton } from "@/components/ui/skeleton";
import Rating from "./Rating";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-card dark:bg-card rounded-md select-none text-center overflow-hidden xl:min-w-75">
      <Skeleton className="w-full h-75 md:h-65 lg:h-61 xl:h-72 mx-auto" />
      <div className="p-4 flex flex-col items-center">
        <Skeleton className="h-4 w-50" />
        <Skeleton className="h-4 w-2/3 my-4" />
        <Rating rating={5} />
        <Skeleton className="h-9 w-full mt-7" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
