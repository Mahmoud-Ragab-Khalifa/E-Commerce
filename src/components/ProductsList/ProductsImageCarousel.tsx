"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { ImageProbs } from "@/lib/types";
import { useLocale, useTranslations } from "next-intl";

const enFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export interface ProductsImageCarouselProbs {
  title: string;
  arrayOfImages: ImageProbs[];
}

const ProductsImageCarousel = ({
  title,
  arrayOfImages,
}: ProductsImageCarouselProbs) => {
  const t = useTranslations("productsImages");
  const locale = useLocale();
  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="bg-card rounded-md">
      <h2
        className={`${enFont.className} pt-4 px-6 text-2xl lg:text-4xl font-bold bg-linear-to-r 
          from-indigo-600 via-purple-600 to-pink-600
          dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-400
          bg-clip-text text-transparent animate-pulse`}
      >
        {t(title)}
      </h2>
      <Carousel
        dir={dir}
        opts={{ direction: dir, dragFree: true, loop: true }}
        plugins={[
          Autoplay({
            delay: 2000, // time between slides (ms)
            stopOnInteraction: false, // keep playing after user clicks
            stopOnMouseEnter: true, // pause when hovering
          }),
        ]}
      >
        <CarouselContent>
          {arrayOfImages.map((item, idx) => (
            <CarouselItem key={idx} className="basis-25 lg:basis-50 m-0! p-0!">
              <Image alt={item.name} src={item.src} width={300} height={300} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductsImageCarousel;
