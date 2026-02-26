"use client";

import React, { useState } from "react";

import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import { Review } from "@/lib/types";
import { useTranslations } from "next-intl";

const SelectorTitle = ({
  title,
  active,
  setActive,
  hasNumber,
  number,
  index,
}: {
  title: string;
  active: number;
  setActive: React.Dispatch<number>;
  hasNumber: boolean;
  number: number;
  index: number;
}) => {
  const t = useTranslations("productDetails");

  return (
    <div
      className={`relative flex items-center gap-1 font-bold p-4 cursor-pointer transition-colors duration-300  
        ${active === index ? "text-[#2196f3]" : "text-main-color dark:text-neutral-300"} select-none`}
      onClick={() => setActive(index)}
    >
      <span>{t(title)}</span>

      {hasNumber && <span>({number})</span>}

      <span
        className={`absolute transition-all duration-300 -bottom-0.5 h-0.5 w-0 bg-[#2196F3] start-0 
          ${active === index ? "w-full" : "w-0"}`}
      />
    </div>
  );
};

interface ProductDataProbs {
  title: string;
  description: string;
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
  reviews: Review[];
}

const ProductData = ({
  title,
  description,
  category,
  stock,
  sku,
  warrantyInformation,
  shippingInformation,
  availabilityStatus,
  returnPolicy,
  minimumOrderQuantity,
  barcode,
  qrCode,
  tags,
  reviews,
}: ProductDataProbs) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="border-b-2 border-neutral-200 dark:border-neutral-700 flex items-center">
        <SelectorTitle
          title="desc"
          active={active}
          index={0}
          setActive={setActive}
          hasNumber={false}
          number={0}
        />

        <SelectorTitle
          title="review"
          active={active}
          index={1}
          setActive={setActive}
          hasNumber={true}
          number={reviews.length}
        />
      </div>

      <div className="mt-5 md:mt-7 ps-1 sm:px-0">
        {active === 0 ? (
          <ProductDescription
            title={title}
            description={description}
            category={category}
            stock={stock}
            sku={sku}
            warrantyInformation={warrantyInformation}
            shippingInformation={shippingInformation}
            availabilityStatus={availabilityStatus}
            returnPolicy={returnPolicy}
            minimumOrderQuantity={minimumOrderQuantity}
            barcode={barcode}
            qrCode={qrCode}
            tags={tags}
          />
        ) : (
          <ProductReview reviews={reviews} />
        )}
      </div>
    </>
  );
};

export default ProductData;
