"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import SwipperCard from "./SwipperCard";

const swiperCardData = [
  {
    category: "Men",
    image: "/images/hero-man.png",
  },
  {
    category: "Women",
    image: "/images/hero-women.png",
  },
];

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
        pagination={{
          clickable: true,
        }}
        speed={800}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {swiperCardData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SwipperCard category={item.category} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
