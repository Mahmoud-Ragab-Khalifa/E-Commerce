"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "@/i18n/navigation";
import { categoriesList } from "@/lib/categories";
import { ChevronDown } from "lucide-react";

import { useTranslations } from "next-intl";

import { useState } from "react";

const links = [
  "Home",
  "Mega Menu",
  "Full Screen Menu",
  "Pages",
  "User Account",
  "Vendor Account",
];

const NavLinks = () => {
  const t = useTranslations();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="hidden lg:flex ps-16 items-center gap-4">
      {links.map((link, idx) => (
        <HoverCard
          openDelay={50}
          closeDelay={50}
          key={idx}
          open={openIndex === idx}
          onOpenChange={(open) => setOpenIndex(open ? idx : null)}
        >
          <HoverCardTrigger className="group flex items-center gap-0.5 text-sm cursor-pointer">
            {t("Links" + "." + link)}
            <ChevronDown
              size={15}
              className={`mt-0.5 transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : "rotate-0"
              }`}
            />
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-3 p-4 z-200">
            {categoriesList.map(({ icon: Icon, category }) => (
              <Link
                key={category}
                href={`/products/category/${category}`}
                className="flex items-center gap-2 text-light dark:text-dark text-sm"
              >
                <Icon size={17} />
                {t("Categories." + category)}
              </Link>
            ))}
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default NavLinks;
