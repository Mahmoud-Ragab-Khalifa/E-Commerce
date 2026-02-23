import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="p-2.5 lg:mt-7">
      <div className="container mx-auto flex flex-col gap-4 xl:flex-row justify-between transition-all duration-300">
        <div className="slider flex-1 xl:max-w-[calc(100%-375px)] bg-card dark:bg-card rounded-md">
          <Skeleton className="w-full h-125 bg-neutral-300/60 dark:bg-neutral-800" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row xl:flex-col">
          <Skeleton className="md:min-w-93.75 w-full min-h-56 h-full bg-neutral-300/60 dark:bg-neutral-800" />
          <Skeleton className="md:min-w-93.75 w-full min-h-56 h-full bg-neutral-300/60 dark:bg-neutral-800" />
        </div>
      </div>

      <div
        className="container mx-auto mt-6 md:mt-12.5 bg-card dark:bg-card rounded-md text-light dark:text-dark 
         flex flex-col gap-7.5 sm:flex-row flex-wrap transition-all duration-300"
      >
        <Skeleton className="w-full h-25 bg-neutral-300/60 dark:bg-neutral-800" />
      </div>
    </div>
  );
};

export default Loading;
