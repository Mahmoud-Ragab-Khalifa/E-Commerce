"use client";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { categoriesList } from "@/lib/categories";
import { ChevronDown, LayoutGrid } from "lucide-react";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { useState } from "react";

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
        {categoriesList.map(({ icon: Icon, category }) => (
          <Link key={category} href={`/products/category/${category}`}>
            <DropdownMenuItem
              dir={locale === "ar" ? "rtl" : "ltr"}
              className="cursor-pointer"
            >
              <Icon />
              {t("Categories." + category)}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Categories;
