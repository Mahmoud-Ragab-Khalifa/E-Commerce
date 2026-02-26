"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const OptionAndType = () => {
  const [activeOption, setactiveOption] = useState(0);
  const [activeType, setactiveType] = useState(0);

  const t = useTranslations("productDetails");

  return (
    <>
      <div className="mt-4 flex flex-col gap-2">
        <span className="font-bold text-[#0aa2b5]">{t("option")}</span>
        <div className="flex gap-1 flex-wrap">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Button
              key={idx}
              variant={"outline"}
              size={"sm"}
              className={`text-[13px] transition-colors duration-300 ${activeOption === idx && "bg-main-color! text-neutral-200! dark:bg-[#253853]!"}`}
              onClick={() => setactiveOption(idx)}
            >
              {t("option")} {idx + 1}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 mb-4 flex flex-col gap-2">
        <span className="font-bold text-[#0aa2b5]">{t("type")}</span>
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Button
              key={idx}
              variant={"outline"}
              size={"sm"}
              className={`text-[13px] transition-colors duration-300 ${activeType === idx && "bg-main-color! text-neutral-200! dark:bg-[#253853]!"}`}
              onClick={() => setactiveType(idx)}
            >
              {t("type")} {idx + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default OptionAndType;
