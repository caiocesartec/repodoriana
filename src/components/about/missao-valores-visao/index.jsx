import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";

const cardData = [
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nulla facilisi. Integer vel sapien tincidunt, malesuada sapien nec, aliquet ipsum.",
  },
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet urna a nulla facilisis congue. Pellentesque vitae arcu et neque hendrerit aliquet.",
  },
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, sem vel pellentesque faucibus, orci justo auctor augue, ac semper sem sapien non lorem.",
  },
];

export const MissionVisionValues = () => {
  const cards = cardData.map((item, index) => (
    <div className={styles.card} key={index}>
      <Image
        src={item.icon}
        alt={`Lorem ipsum`}
        width={64}
        height={64}
        quality={100}
        className={styles.icon}
      />
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardText}>{item.text}</p>
    </div>
  ));

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>GENERIC INDENTIFIER</h2>

      <CustomSwiper
        slides={cards}
        pagination
        mobileOnly
        autoplay={true}
        fallbackClass={styles.cardsContainer}
        className={styles.mobileSwiper}
      />
    </section>
  );
};
