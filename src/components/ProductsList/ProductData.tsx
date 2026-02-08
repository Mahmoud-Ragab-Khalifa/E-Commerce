"use client";

import { useState } from "react";

import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import { Review } from "@/lib/types";

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
  const [active, setactive] = useState(0);

  return (
    <>
      <div className="border-b border-neutral-200 dark:border-neutral-700">
        <div className="selectors flex items-center">
          <h2
            className={`text-neutral-500 dark:text-neutral-400 font-bold p-4 cursor-pointer transition-all duration-300 ${
              active === 0 &&
              "border-b border-b-main-color text-main-color! dark:text-[#253853]! dark:border-b-[#253853]"
            }`}
            onClick={() => setactive(0)}
          >
            Description
          </h2>
          <h2
            className={`text-neutral-500 dark:text-neutral-400 font-bold p-4 cursor-pointer transition-all duration-300 ${
              active === 1 &&
              "border-b border-b-main-color text-main-color! dark:text-[#253853]! dark:border-b-[#253853]"
            }`}
            onClick={() => setactive(1)}
          >
            Review ({reviews.length})
          </h2>
        </div>
      </div>

      <div className="mt-5 md:mt-7 mb-56 ps-1 sm:px-0">
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
