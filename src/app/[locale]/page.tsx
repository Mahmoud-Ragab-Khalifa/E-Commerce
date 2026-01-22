import { useTranslations } from "next-intl";

import ThemeToggler from "@/components/ThemeToggler";
import LanguageToggle from "@/components/LanguageToggle";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <>
      <h1 className="text-6xl text-orange-700 dark:text-green-600">
        Home Page
      </h1>
      <h1 className="text-6xl">السلام عليكم</h1>
      <h1 className="text-8xl bg-red-500 text-black font-bold">{t("name")}</h1>
      <ThemeToggler />
      <LanguageToggle />
    </>
  );
};

export default Home;
