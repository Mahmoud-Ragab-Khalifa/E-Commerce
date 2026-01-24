// LOCALIZATION
import LanguageToggler from "@/components/LanguageToggler";
import { useTranslations } from "next-intl";

// THEMING
import ThemeToggler from "@/components/ThemeToggler";

import SocialMedia from "@/components/SocialMedia";

const TopLevelHeader = () => {
  const t = useTranslations("Header");

  return (
    <div className="bg-[#1F2937] p-2.5">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="text-[13px] text-white flex items-center gap-2 overflow-hidden">
          <span className="bg-main-color py-0.5 px-3 rounded-3xl overflow-hidden whitespace-nowrap text-ellipsis">
            {t("hot")}
          </span>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {t("duration")}
          </p>
        </div>

        <div className="flex items-center gap-2 leading-0">
          <ThemeToggler />

          <LanguageToggler />

          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default TopLevelHeader;
