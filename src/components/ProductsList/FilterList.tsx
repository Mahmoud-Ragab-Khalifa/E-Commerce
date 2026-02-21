"use client";

import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

interface FilterListProbs {
  category: string;
  items: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const FilterList = ({ category, items, setCategory }: FilterListProbs) => {
  const t = useTranslations();
  const [active, setactive] = useState(0);

  return (
    <div className="relative bg-main-color dark:bg-[#253853] text-neutral-200 dark:text-dark min-w-75 rounded-md py-5">
      <div className="mb-5 px-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold">{t(`Categories.${category}`)}</h2>
        <SlidersHorizontal />
      </div>

      <ul className="desktop-selectors hidden lg:flex flex-col gap-2 mx-5">
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              setactive(idx);
              setCategory(item);
            }}
            className={`capitalize select-none whitespace-nowrap cursor-pointer py-1 px-4 rounded-md transition-colors duration-500 hover:bg-[#253853] hover:dark:bg-main-color ${active === idx ? "bg-[#253853] dark:bg-main-color" : "bg-neutral-600/40 dark:bg-neutral-500/25"}`}
          >
            {item.replaceAll("-", " ")}
          </li>
        ))}
      </ul>

      <Carousel opts={{ dragFree: true }} className="lg:hidden">
        <CarouselContent className="mx-5">
          {items.map((item, idx) => (
            <CarouselItem
              className="max-w-fit me-2! p-0!"
              key={idx}
              onClick={() => {
                setactive(idx);
                setCategory(item);
              }}
            >
              <li
                className={`text-sm block list-none capitalize select-none whitespace-nowrap cursor-pointer py-1 px-3 rounded-full transition-colors duration-500 hover:bg-[#253853] hover:dark:bg-main-color ${active === idx ? "bg-[#253853] dark:bg-main-color" : "bg-neutral-600/40 dark:bg-neutral-500/25"}`}
              >
                {item.replaceAll("-", " ")}
              </li>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="lg:hidden absolute w-5 h-11 right-0 bottom-3.5 bg-main-color dark:bg-[#253853] z-50" />
      <div className="lg:hidden absolute w-5 h-11 left-0 bottom-3.5 bg-main-color dark:bg-[#253853] z-50" />
    </div>
  );
};

export default FilterList;
