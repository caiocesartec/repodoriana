"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/swiper.css";

import styles from "./styles.module.css";

export const CustomSwiper = ({
  slides = [],
  autoplay = false,
  autoplayDelay = 5000,
  loop = false,
  navigation = false,
  pagination = true,
  slidesPerView = 1,
  spaceBetween = 0,
  breakpoints = null,
  className = "",
  mobileOnly = false,
  fallbackClass = "",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldUseSwiper = !mobileOnly || isMobile;

  if (!shouldUseSwiper) {
    return <div className={fallbackClass}>{slides}</div>;
  }

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={autoplay ? { delay: autoplayDelay } : false}
      loop={loop}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints || {}}
      className={`${styles.swiper} ${className}`}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
