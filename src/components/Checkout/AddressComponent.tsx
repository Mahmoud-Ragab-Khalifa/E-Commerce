import { useTranslations } from "next-intl";
import SelectComponent from "./SelectComponent";

const AddressComponent = () => {
  const t = useTranslations();

  const addressList = t.raw("addressList");

  return (
    <div className="inputs flex flex-wrap gap-4 mt-4 justify-between">
      {addressList.map((item: string) => (
        <input
          key={item.toLowerCase().replace(" ", "-")}
          aria-label={`Enter ${item}`}
          placeholder={item}
          type="text"
          name={item.toLowerCase().replace(" ", "-")}
          className="basis-full lg:basis-[calc((100%-16px)/2)] rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
        />
      ))}

      <div className="basis-full md:flex-1">
        <SelectComponent title="country" items={t.raw("countries")} />
      </div>
    </div>
  );
};

export default AddressComponent;
