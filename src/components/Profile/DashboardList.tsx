"use client";

import { dataList } from "@/lib/dashboard";
import { useTranslations } from "next-intl";
import { Geist } from "next/font/google";
import { useActiveProfileTabStore } from "@/store/activeProfileTabStore";

interface DashboardListProbs {
  title: "dashboard" | "settings";
}

const geist = Geist({
  subsets: ["latin"],
});

const DashboardList = ({ title }: DashboardListProbs) => {
  const { active, setActive } = useActiveProfileTabStore();

  const targetList = dataList[title];

  const t = useTranslations("profile");

  return (
    <div>
      <h1 className="title font-bold mb-3 uppercase text-xs px-5">
        {t(title)}
      </h1>
      <div className="flex flex-col">
        {targetList.map(({ icon: Icon, title, number }) => (
          <button
            className={`focus:outline-none focus-visible:rounded-md focus-visible:mx-2 flex items-center gap-1.5 focus-visible:ring-2 transition-all duration-300 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-700 cursor-pointer py-4 px-5 relative group hover:text-light dark:hover:text-dark focus-visible:text-light dark:focus-visible:text-dark 
            ${active === title ? "text-light dark:text-dark" : "text-light/70 dark:text-dark/60"}`}
            key={title}
            onClick={() => setActive(title)}
          >
            <span
              className={`absolute w-1 start-0 bottom-0 bg-main-color dark:bg-[#253853] group-hover:h-full transition-all duration-300 ${active === title ? "h-full" : "h-0"} group-focus-visible:h-0`}
            />
            <Icon size={18} />
            <div className="data flex flex-1 justify-between items-center">
              <span className="text-sm">{t(title)}</span>
              {number !== 0 && (
                <span className={`${geist.className} text-sm`}>{number}</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardList;
