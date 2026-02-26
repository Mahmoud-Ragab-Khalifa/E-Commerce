import { useTranslations } from "next-intl";
import Image from "next/image";
import ProductInfoTitle from "./ProductInfoTitle";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const dataList = [
  "title",
  "category",
  "description",
  "stock",
  "sku",
  "warrantyInformation",
  "shippingInformation",
  "availabilityStatus",
  "returnPolicy",
  "minimumOrderQuantity",
  "barcode",
];

interface ProductDescriptionProbs {
  description: string;
  title: string;
  category: string;
  stock: string;
  sku: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: string;
  barcode: string;
  qrCode: string;
  tags: string[];
}

const ProductDescription = (props: ProductDescriptionProbs) => {
  const t = useTranslations("productDetails");

  return (
    <div className="animate-fade-in-small text-[15px] md:text-[16px] text-light dark:text-dark font-medium flex flex-col gap-2.5">
      {dataList.map((item) => (
        <ProductInfoTitle
          key={item}
          title={t(item)}
          desc={props[item as keyof ProductDescriptionProbs] as string}
        />
      ))}

      <div className="flex flex-col gap-4 mt-3">
        <span className="font-bold text-[#0aa2b5]">{t("qrCode")}</span>
        <Image alt="product" src={props.qrCode} width={232} height={232} />
      </div>

      <div className="flex items-center gap-2 mt-4 flex-wrap">
        {props.tags.map((tag, idx) => (
          <span
            key={idx}
            className={`${geist.className} bg-card dark:bg-card text-light dark:text-dark rounded-2xl py-1.5 px-5 capitalize whitespace-nowrap text-sm`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
