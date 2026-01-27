import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import Categories from "@/components/Header/Categories";

import { useTranslations } from "next-intl";

const DesktopCategories = () => {
  const t = useTranslations();

  return (
    <div className="p-2.5 hidden lg:block">
      <div className="container mx-auto lg:flex justify-between items-center gap-8">
        <div className="categories flex-1">
          <Categories />
        </div>
        <div className="search flex-4">
          <InputGroup>
            <InputGroupInput placeholder={t("Search")} />
            <InputGroupAddon
              align="inline-end"
              className="border-s-2 m-0 px-3 cursor-pointer"
            >
              <Search className="p-0!" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default DesktopCategories;
