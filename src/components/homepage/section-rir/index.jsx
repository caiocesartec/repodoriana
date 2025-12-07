import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";

const SOCIALS = [
  {
    href: "https://www.instagram.com/searabrasil/",
    bg: "https://www.seara.com.br/wp-content/uploads/2024/09/Rock-in-Rio-Instagram.webp",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/09/Instagram.webp",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/SearaBrasil/",
    bg: "https://www.seara.com.br/wp-content/uploads/2024/09/Rock-in-Rio-Facebook.webp",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/09/Facebook.webp",
    alt: "Facebook",
  },
  {
    href: "https://www.tiktok.com/@seara_brasil",
    bg: "https://www.seara.com.br/wp-content/uploads/2024/09/Rock-in-Rio-TikTok.webp",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/09/TikTok.webp",
    alt: "TikTok",
  },
  {
    href: "https://br.pinterest.com/seara_brasil/",
    bg: "https://www.seara.com.br/wp-content/uploads/2024/09/Rock-in-Rio-Pinterest.webp",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/08/pinterest.webp",
    alt: "Pinterest",
  },
  {
    href: "https://open.spotify.com/",
    bg: "https://www.seara.com.br/wp-content/uploads/2024/09/Rock-in-Rio-Spotify.webp",
    icon: "https://www.seara.com.br/wp-content/uploads/2024/08/spotify.webp",
    alt: "Spotify",
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
          src="/logos/seara-logo-mono-branco.webp"
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
    <section className={styles.receitasSection}>
      <Image
        src="/banners/rir-seara-banner.webp"
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
            mobileOnly={true}
            loop
            navigation
            pagination={false}
            slidesPerView={1}
            spaceBetween={22}
            className={styles.rirSwiper}
            fallbackClass={styles.contentMobile}
          />
        </div>
      </div>
    </section>
  );
};
