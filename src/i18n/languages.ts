import { US, EG } from "country-flag-icons/string/3x2";

export const LANGUAGES = [
  {
    label: "English",
    dir: "ltr",
    flag: US,
    locale: "en",
  },
  {
    label: "العربية",
    dir: "rtl",
    flag: EG,
    locale: "ar",
  },
] as const;
