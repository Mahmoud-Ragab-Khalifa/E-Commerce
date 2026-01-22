// LOCALIZATION
import LanguageToggler from "@/components/LanguageToggler";
import { useTranslations } from "next-intl";

// THEMING
import ThemeToggler from "@/components/ThemeToggler";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <div className="bg-[#1F2937] p-2.5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[13px] text-white flex items-center gap-2">
          <span className="bg-[#111827] py-0.5 px-3 rounded-3xl">
            {t("hot")}
          </span>
          <p className="hidden sm:block">{t("duration")}</p>
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

export default Header;
