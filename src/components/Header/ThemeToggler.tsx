"use client";

import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";

const thems = ["light", "dark", "system"];

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const t = useTranslations("theme");

  const locale = useLocale();

  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  return (
    <DropdownMenu dir={dir}>
      <DropdownMenuTrigger asChild>
        <Button
          size={"icon-sm"}
          className="cursor-pointer bg-transparent border-0 text-white p-0 m-0 hover:bg-transparent data-highlighted:bg-transparent outline-0 w-4 h-4"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-2000">
        {thems.map((item, idx) => (
          <DropdownMenuItem
            key={idx}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setTheme(item)}
          >
            <span>{t(item)}</span>
            {theme === item && (
              <span>
                <Check />
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
