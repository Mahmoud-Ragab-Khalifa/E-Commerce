import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";

interface Item {
  value: string;
  label: string;
}

const SelectComponent = ({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) => {
  const t = useTranslations();

  const locale = useLocale();

  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  return (
    <Select dir={dir}>
      <SelectTrigger className="w-full ring-1 ring-neutral-700">
        <SelectValue placeholder={t(title)} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
