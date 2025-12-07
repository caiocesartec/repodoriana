import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";

const SOCIALS = [
  {
    href: "https://www.instagram.com/doriana/",
    bg: "/genericas/rede_1.jpg",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/09/Instagram.webp",
    alt: "Doriana Instagram",
  },
  {
    href: "https://www.facebook.com/Doriana",
    bg: "/genericas/rede_2.jpg",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/09/Facebook.webp",
    alt: "Facebook",
  },
  {
    href: "https://www.tiktok.com/@doriana.oficial",
    bg: "/genericas/rede_3.jpg",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/09/TikTok.webp",
    alt: "TikTok",
  },
  {
    href: "https://br.pinterest.com/doriana_oficial/",
    bg: "/genericas/rede_4.jpg",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/08/pinterest.webp",
    alt: "Pinterest",
  },
    {
    href: "https://www.youtube.com/c/Dorianabr",
    bg: "/genericas/rede_5.jpg",
    icon: "/icones/youtubee.png",
    alt: "Youtube",
  },
];

const renderCard = (item, index) => (
  <div key={index} className={styles.card}>
    <a href={item.href} target="_blank" className={styles.cardLink}>
      <img
        src={item.bg}
        alt={item.alt}
        className={styles.cardBg}
      />

      <div className={styles.iconWrapper}>
        <img src={item.icon} alt={item.alt} className={styles.icon} />
        <img
          src="/logos/Doriana-Logo-Blur-RGB-210913.png"
          alt="Seara"
          className={styles.logo}
        />
      </div>
    </a>
  </div>
);

export const SectionRir = () => {
  const slides = SOCIALS.map((item, index) => renderCard(item, index));

  return (
    <section className={styles.rirSection}>
      <Image
        src="/banners/Banner_Manteigaa.jpg"
        alt="Fundo"
        fill
        className={styles.backgroundImage}
        priority
      />

      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              Nos siga e fique por dentro <br />
              de tudo que está rolando nas Redes
            </h2>
          </div>

          <div className={styles.content}>
            {SOCIALS.map((item, index) => renderCard(item, index))}
          </div>

          <CustomSwiper
            slides={slides}
            loop={true}
            navigation
            pagination={false}
            slidesPerView={1}
            spaceBetween={22}
            watchOverflow={true}
            breakpoints={{
              700: {
                slidesPerView: 2,
              },
              940: {
                slidesPerView: 3,
              },
            }}
            className={styles.rirSwiper}
            fallbackClass={styles.contentMobile}
          />
        </div>
      </div>
    </section>
  );
};
