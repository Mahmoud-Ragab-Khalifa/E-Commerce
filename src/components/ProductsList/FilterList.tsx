"use client";

import { useState } from "react";

interface FilterListProbs {
  category: string;
  items: string[];
}

const FilterList = ({ category, items }: FilterListProbs) => {
  const [active, setactive] = useState(0);

  return (
    <div className="desktop-filters bg-main-color dark:bg-[#253853] text-neutral-200 dark:text-dark min-w-75 rounded-md py-5">
      <h2 className="text-2xl font-bold px-5 mb-5">{category}</h2>

      <ul className="flex flex-col gap-2 mx-5">
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setactive(idx)}
            className={`cursor-pointer py-1 px-4 rounded-md transition-colors duration-500 hover:bg-[#253853] hover:dark:bg-main-color ${active === idx ? "bg-[#253853] dark:bg-main-color" : "bg-neutral-600/40 dark:bg-neutral-500/25"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
