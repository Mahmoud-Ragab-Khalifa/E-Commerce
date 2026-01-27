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

const LanguageToggler = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const selectedLanguage = LANGUAGES.find(
    (language) => language.locale === locale,
  )!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer flex items-center text-[13px] text-white">
          {selectedLanguage.locale.toUpperCase()}
          <ChevronDown size={16} />
          <span className="sr-only">Toggle language</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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
