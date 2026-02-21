import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { LayoutGrid, TextAlignJustify } from "lucide-react";
import { categoriesList } from "@/lib/categories";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const MobileLinks = () => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <Drawer direction={`${locale === "ar" ? "right" : "left"}`}>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} size={"icon-lg"} aria-label="Show Categories">
          <TextAlignJustify />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="z-200">
        <DrawerHeader className="flex flex-row! justify-between items-center">
          <DrawerTitle className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <LayoutGrid size={17} />
              <span>{t("categories")}</span>
            </div>
          </DrawerTitle>
          <DrawerDescription className="hidden"></DrawerDescription>
          <DrawerClose asChild>
            <Button variant="outline" size={"icon-sm"} autoFocus>
              X
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex flex-col gap-3 px-4">
          {categoriesList.map(({ icon: Icon, category }) => (
            <DrawerClose asChild key={category}>
              <Link
                href={`/products/category/${category}`}
                className="flex items-center gap-2 rounded-md py-3 px-4 bg-card text-light dark:text-dark text-sm"
              >
                <Icon size={17} />
                {t("Categories." + category)}
              </Link>
            </DrawerClose>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileLinks;
