"use client";

import { useState } from "react";
import Rating from "./Rating";

const SetRating = () => {
  const [rating, setRating] = useState(0.5);

  return (
    <div className="flex items-center gap-2">
      <Rating rating={rating} />
      <input
        type="text"
        className="border outline-none w-9 py-1 px-2 rounded-md text-xs text-center"
        onChange={(e) => setRating(+e.target.value)}
      />
    </div>
  );
};

export default SetRating;
