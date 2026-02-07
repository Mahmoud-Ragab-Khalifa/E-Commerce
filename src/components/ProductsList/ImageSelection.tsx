"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageSelectionProbs {
  images: string[];
}

const ImageSelection = ({ images }: ImageSelectionProbs) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex-1">
      <Image
        alt="Product"
        src={images[activeImage]}
        width={500}
        height={500}
        className="mx-auto"
      />

      <div className="flex gap-2 justify-center">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`p-1 rounded-md border cursor-pointer transition-colors duration-300
            ${activeImage === idx ? "border-main-color dark:border-neutral-200 animate-pulse" : "border-neutral-300 dark:border-neutral-950"}`}
            onClick={() => setActiveImage(idx)}
          >
            <Image
              alt="Product"
              src={img}
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelection;
