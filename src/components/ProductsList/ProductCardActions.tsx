"use client";

import { Geist, Tajawal } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const geist = Geist({
  subsets: ["latin"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["500"],
});

import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Eye, Heart } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import Link from "next/link";
import Rating from "./Rating";
import useSWR from "swr";
import AddToCartButton from "./AddToCartButton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductCardActions = ({ id }: { id: number }) => {
  const locale = useLocale();
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  const [active, setactive] = useState(false);

  const { data } = useSWR(
    open ? `/${locale}/api/products/${id}` : null,
    fetcher,
  );

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <Button
          onClick={() => setOpen(!open)}
          aria-label="Mini Product Details Page"
          variant={"ghost"}
          size={"icon-sm"}
          className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-1 hover:bg-neutral-200 hover:dark:bg-neutral-800/50 rounded-md delay-75 text-[14px] p-1.5"
        >
          <Eye />
        </Button>
        <DialogContent
          dir="ltr"
          className={`${geist.className} max-h-[80vh] overflow-y-auto overflow-x-hidden`}
        >
          <Carousel>
            <CarouselContent>
              {data?.images.map((img: string, idx: number) => (
                <CarouselItem key={idx}>
                  <Image
                    alt="product"
                    src={img}
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="left-0"
              variant="ghost"
              size={"icon"}
            />

            <CarouselNext className="right-0" variant="ghost" size={"icon"} />
          </Carousel>

          <DialogHeader>
            <DialogTitle>
              <span className="leading-normal">{data?.title}</span>
              <span className="font-bold block my-3">${data?.price}</span>
              <div className="flex items-center justify-center md:items-start md:justify-start">
                <Rating rating={data?.rating} />
              </div>
            </DialogTitle>
            <DialogDescription>{data?.description}</DialogDescription>
          </DialogHeader>

          <DialogFooter
            className={`flex justify-between! items-center! flex-col! md:flex-row! mt-4 ${locale === "ar" ? tajawal.className : geist.className}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <Link
              href={`/products/${id}`}
              className="flex items-center gap-1 mb-2 md:m-0 text-sm"
            >
              {t("details")}

              {locale === "ar" ? (
                <ArrowLeft size={15} />
              ) : (
                <ArrowRight size={15} />
              )}
            </Link>

            <div className="flex gap-2">
              <div>
                <AddToCartButton
                  product={{
                    id,
                    title: data?.title,
                    price: data?.price,
                    image: data?.images[0],
                  }}
                />
              </div>

              <DialogClose asChild>
                <Button variant="outline" className="flex-1">
                  {t("cancel")}
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button
        aria-label="Add To Favourites"
        className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-8 hover:bg-neutral-200 delay-200 mt-1"
        variant={"ghost"}
        size={"icon-sm"}
        onClick={() => setactive(!active)}
      >
        {active ? (
          <Heart className="text-[#ff6d75] fill-[#ff6d75]" />
        ) : (
          <Heart />
        )}
      </Button>
    </>
  );
};

export default ProductCardActions;
