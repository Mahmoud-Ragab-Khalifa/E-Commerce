import { Star } from "lucide-react";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0">
      {Array.from({ length: 5 }).map((_, idx) => {
        const fillPercentage = Math.min(Math.max(rating - idx, 0), 1);

        return (
          <div key={idx} className="relative w-3.5 h-3.5">
            <Star
              size={14}
              className="absolute text-neutral-300 dark:text-neutral-600"
            />

            <div
              className="absolute overflow-hidden"
              style={{ width: `${fillPercentage * 100}%` }}
            >
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
