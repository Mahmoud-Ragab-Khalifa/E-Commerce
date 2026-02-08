"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const OptionAndType = () => {
  const [activeOption, setactiveOption] = useState(0);
  const [activeType, setactiveType] = useState(0);

  return (
    <>
      <div className="mt-4 flex flex-col gap-2">
        <span className="text-[#4b5563]">Option: </span>
        <div className="flex gap-1 flex-wrap">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Button
              key={idx}
              variant={"outline"}
              size={"sm"}
              className={`text-[13px] transition-colors duration-300 ${activeOption === idx && "bg-main-color! text-neutral-200! dark:bg-[#253853]!"}`}
              onClick={() => setactiveOption(idx)}
            >
              Option {idx + 1}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <span className="text-[#4b5563]">Type: </span>
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Button
              key={idx}
              variant={"outline"}
              size={"sm"}
              className={`text-[13px] transition-colors duration-300 ${activeType === idx && "bg-main-color! text-neutral-200! dark:bg-[#253853]!"}`}
              onClick={() => setactiveType(idx)}
            >
              Type {idx + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default OptionAndType;
