"use client";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  LayoutGrid,
  Motorbike,
  Laptop,
  BookOpenText,
  Gamepad2,
  ChevronDown,
} from "lucide-react";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { useState } from "react";

const categories = [
  {
    category: "bikes",
    icon: Motorbike,
  },
  {
    category: "electronics",
    icon: Laptop,
  },
  {
    category: "books",
    icon: BookOpenText,
  },
  {
    category: "games",
    icon: Gamepad2,
  },
];

const Categories = () => {
  const [open, setOpen] = useState(false);

  const locale = useLocale();
  const t = useTranslations();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-1">
            <LayoutGrid />
            <span>{t("categories")}</span>
          </div>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-(--radix-dropdown-menu-trigger-width)"
      >
        {categories.map((item, idx) => (
          <DropdownMenuItem key={idx} dir={locale === "ar" ? "rtl" : "ltr"}>
            <item.icon />
            {t("Categories." + item.category)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Categories;
