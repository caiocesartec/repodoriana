import { Header } from "@/components/common/header";
import styles from "./styles.module.css";
import { BannerClient } from "./banner-client";
import { getBanners } from "@/lib/banners";

export const SectionBanner = async () => {
  const banners = await getBanners();

  return (
    <>
      <Header variant="absolute" />

      <div className={styles.section_one}>
        <BannerClient branches={banners} />
      </div>
    </>
  );
};
