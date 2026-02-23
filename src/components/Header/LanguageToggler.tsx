"use client";

import { LANGUAGES } from "@/i18n/languages";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const LanguageToggler = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const selectedLanguage = LANGUAGES.find(
    (language) => language.locale === locale,
  )!;
  return (
    <DropdownMenu dir="ltr">
      <DropdownMenuTrigger asChild>
        <Button
          size={"icon-sm"}
          variant={"ghost"}
          className={`${geist.className} gap-0! items-center! justify-center! hover:bg-transparent!`}
        >
          <span className="text-sm text-white">
            {selectedLanguage.locale.toUpperCase()}
          </span>
          <ChevronDown size={16} className="text-white" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={`z-2000`}>
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            className="flex items-center justify-between"
            key={language.locale}
            onClick={() =>
              router.replace({ pathname }, { locale: language.locale })
            }
          >
            <div className="flex items-center gap-1.5">
              <span dangerouslySetInnerHTML={{ __html: language.flag }} />
              {language.label}
            </div>
            {language.locale === locale && <Check />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggler;
