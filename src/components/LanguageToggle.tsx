"use client";

import { LANGUAGES } from "@/i18n/languages";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ModeToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const selectedLanguage = LANGUAGES.find(
    (language) => language.locale === locale
  )!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1 py-1 px-2">
          <span dangerouslySetInnerHTML={{ __html: selectedLanguage.flag }} />
          {selectedLanguage.label}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            className={`${
              language.locale === locale &&
              "bg-gray-300 hover:bg-gray-300 data-highlighted:bg-gray-300"
            }`}
            key={language.locale}
            onClick={() =>
              router.replace({ pathname }, { locale: language.locale })
            }
          >
            <span dangerouslySetInnerHTML={{ __html: language.flag }} />
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
