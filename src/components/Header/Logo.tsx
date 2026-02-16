import { Store } from "lucide-react";
import { Pacifico } from "next/font/google";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Logo = () => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <Link href={"/"}>
      <div className="relative h-10 w-10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0">
          <path
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
            fill="white"
            stroke="black"
            strokeWidth="6"
            strokeLinejoin="round"
            className="fill-transparent stroke-transparent dark:fill-gray-900 dark:stroke-gray-300"
          />
        </svg>

        <Store className="relative text-black dark:text-gray-300" size={20} />
        <span
          className={`${locale === "en" ? pacifico.className : ""} absolute ${locale === "ar" ? "right-full" : "left-full"} bg-main-color text-xs py-1 px-2 rounded-full ${locale === "ar" ? "-mr-2" : "-ml-2"} text-white dark:text-gray-300`}
        >
          {t("Logo")}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
