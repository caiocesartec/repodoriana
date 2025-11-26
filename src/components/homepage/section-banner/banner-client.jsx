"use client";

import { CustomSwiper } from "@/components/common/swiper";
import Image from "next/image";
import styles from "./styles.module.css";
import { useMobile } from "@/hooks/useMobile";
import { useEffect, useState } from "react";

export const BannerClient = ({ branches }) => {
  const [ready, setReady] = useState(false);
  const isMobile = useMobile();

  useEffect(() => setReady(true), []);

  if (!ready) return null;

  const slides = branches.map((branch, index) => (
    <section key={index} className={styles.banner}>
      <Image
        src={isMobile ? branch.imageMobile : branch.image}
        alt={branch.title}
        fill
        className={styles.bgImage}
        quality={100}
        priority
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          {branch.title}
          <br />
          {branch.text}
        </h1>
        <p className={styles.subtitle}>{branch.textTwo}</p>
      </div>
    </section>
  ));

  return (
    <CustomSwiper
      slides={slides}
      loop
      navigation
      pagination={false}
      className={styles.bannerSwiper}
    />
  );
};
