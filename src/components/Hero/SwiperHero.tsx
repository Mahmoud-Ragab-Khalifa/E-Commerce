"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwipperCard from "./SwipperCard";

export default function SwiperHero() {
  return (
    <>
      <Swiper
        touchRatio={1}
        resistance={true}
        resistanceRatio={0.85}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwipperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwipperCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
