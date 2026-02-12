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
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import useSWR from "swr";
import Link from "next/link";
import Rating from "./Rating";
const fetcher = (url: string) => fetch(url).then((r) => r.json());

const ProductCardActions = ({ id }: { id: number }) => {
  const locale = useLocale();
  const t = useTranslations();

  const [active, setactive] = useState(false);

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${id}`,
    fetcher,
  );

  if (isLoading)
    return (
      <div className="absolute w-3 h-3 bg-neutral-500 dark:bg-neutral-700 top-2 right-2 animate-pulse rounded-full" />
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-1 hover:bg-neutral-200 hover:dark:bg-neutral-800/50 rounded-md delay-75 text-[14px] p-1.5">
            <Eye size={20} />
          </div>
        </DialogTrigger>
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
              <Rating rating={data?.rating} />
            </DialogTitle>
            <DialogDescription>{data?.description}</DialogDescription>
          </DialogHeader>

          <DialogFooter
            className={`flex justify-between! flex-col! md:flex-row! mt-4 ${locale === "ar" ? tajawal.className : geist.className}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <Link href={`/products/${id}`}>
              <Button variant={"link"} className="px-0! mb-2 md:mb-0">
                {t("details")}
                {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
              </Button>
            </Link>

            <div className="flex gap-2">
              <Button className="flex-1">{t("addToCart")}</Button>

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
        className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-8 hover:bg-neutral-200 delay-200 mt-1"
        variant={"ghost"}
        size={"icon-sm"}
        onClick={() => setactive(!active)}
      >
        {active ? (
          <Heart size={18} className="text-[#ff6d75] fill-[#ff6d75]" />
        ) : (
          <Heart size={18} />
        )}
      </Button>
    </>
  );
};

export default ProductCardActions;
