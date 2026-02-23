import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

const ProductDetailsSkeleton = () => {
  return (
    <div
      className="flex flex-col gap-8 md:flex-row md-gap-4 lg:gap-10 md:items-center container mx-auto rounded-md bg-card dark:bg-card p-6 mt-8 lg:mt-12.5"
      dir="ltr"
    >
      <div className="flex-1">
        <Skeleton className="max-w-75 lg:max-w-96 lg:h-96 h-75 bg-neutral-300/60 dark:bg-neutral-800/50 mx-auto lg:mb-5" />

        <div className="flex gap-2 justify-center">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="mt-5 p-1 rounded-md border cursor-pointer transition-colors duration-300 border-neutral-300 dark:border-neutral-800"
            >
              <Skeleton className="w-12.5 h-12.5 bg-neutral-300/60 dark:bg-neutral-800 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 md:pt-6 sm:ps-20">
        <Skeleton className="max-w-75 h-3.5 bg-neutral-300/60 dark:bg-neutral-800 mb-4" />

        <Skeleton className="w-32 h-4 bg-neutral-300/60 dark:bg-neutral-800 mb-3" />
        <Skeleton className="w-36 h-4 bg-neutral-300/60 dark:bg-neutral-800 mb-3" />
        <Skeleton className="w-44 h-4 bg-neutral-300/60 dark:bg-neutral-800 mb-3" />
        <div className="mt-4 flex items-center gap-2">
          <span className="animate-pulse text-neutral-300 dark:text-neutral-800 font-bold text-xl">
            $
          </span>
          <Skeleton className="w-12.5 h-6 bg-neutral-300/60 dark:bg-neutral-800" />
        </div>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className="inline-flex text-neutral-300 dark:text-neutral-800 animate-pulse mt-2 me-0.5 fill-neutral-300 dark:fill-neutral-800"
            size={16}
          />
        ))}

        <Skeleton className="w-28 h-4 bg-neutral-300/60 dark:bg-neutral-800 my-2" />

        {Array.from({ length: 4 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className="w-12.5 h-7.5 inline-flex bg-neutral-300 dark:bg-neutral-800 animate-pulse mt-2 me-0.5"
          />
        ))}

        <Skeleton className="w-24 h-4 bg-neutral-300/60 dark:bg-neutral-800 my-2" />

        {Array.from({ length: 3 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className="w-12.5 h-7.5 inline-flex bg-neutral-300 dark:bg-neutral-800 animate-pulse mt-2 me-0.5"
          />
        ))}

        <Skeleton className="w-64 h-4 bg-neutral-300/60 dark:bg-neutral-800 my-3" />
        <Skeleton className="w-56 h-4 bg-neutral-300/60 dark:bg-neutral-800 my-3" />

        <Skeleton className="max-w-80 h-8 bg-neutral-300/60 dark:bg-neutral-800 mt-5 lg:mb-6" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
