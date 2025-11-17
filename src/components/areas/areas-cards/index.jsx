import Image from "next/image";
import styles from "./styles.module.css";

const cards = [
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM DOLOR SIT AMET",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris at mauris ac lorem fermentum tempus. Aliquam erat volutpat. Donec dignissim euismod dui, sed interdum orci tincidunt vitae.",
  },
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien in libero aliquet, sed vehicula augue tempus. Cras pretium, ligula vel dictum imperdiet, orci lorem sagittis neque, sit amet gravida nulla orci vitae risus.",
  },
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt dui in urna tincidunt, eu tristique ex molestie. Vivamus id erat sed libero aliquet iaculis sed a massa.",
  },
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ipsum nec arcu placerat sagittis. Nam viverra nibh id ante dictum fermentum. Mauris dignissim justo ac augue suscipit dignissim.",
  },
  {
    icon: "/lorem-icon.png",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor tellus eget libero accumsan, vitae imperdiet sem hendrerit. Maecenas ultricies erat sed arcu suscipit, non porttitor nibh gravida.",
  },
];

export const PraticeAreasCard = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Generic 3 ID
      </h2>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.mobileCard}>
              <div className={styles.IconAndTitle}>
                <Image
                  src={card.icon}
                  alt={`Lorem ipsum`}
                  width={82}
                  height={82}
                  className={styles.icon}
                  quality={100}
                />
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>

              <p className={styles.cardText}>{card.text}</p>
            </div>

            <Image
              src={card.icon}
              alt={`Lorem ipsum`}
              width={82}
              height={82}
              quality={100}
              className={`${styles.icon} ${styles.desktopCard}`}
            />

            <div className={styles.desktopCard}>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
