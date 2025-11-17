import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import Link from "next/link";

const cards = [
  {
    icon: "/produtos/pote-creme-500.png",
    title: "Delicia com creme de leite",
    text: "A Delícia com creme de leite traz uma explosão de sabor e muita cremosidade.",
  },
  {
    icon: "/produtos/pote-creme-500.png",
    title: "Delicia com creme de leite",
    text: "A Delícia com creme de leite traz uma explosão de sabor e muita cremosidade.",
  },
  {
    icon: "/produtos/pote-ervas-500.png",
    title: "Delícia Toque de Chef com Ervas Aromáticas",
    text: "A margarina Delícia Toque de Chef com Ervas Aromáticas é feita com pedacinhos de ervas, de verdade, acredita? ",
  },
  {
    icon: "/produtos/pote-alho-500.png",
    title: "Delícia Toque de Chef com Alho e Cebola",
    text: "A margarina Delícia Toque de Chef com Alho e Cebola é feita com pedacinhos de alho e de cebola e, de verdade, sabia? ",
  },
  {
    icon: "/produtos/pote-supreme-500.png",
    title: "Delicia Supreme",
    text: "A Delícia Supreme é a margarina amanteigada feita com creme de leite..",
  },
];

export const SectionPracticeAreas = () => {
  const renderedCards = cards.map((card, index) => (
    <div className={styles.card} key={index}>
      <Image
        src={card.icon}
        alt={`ícone ${card.title}`}
        width={100}
        height={80}
        className={styles.icon}
        quality={100}
      />
      <div className={styles.textWrapper}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardText}>{card.text}</p>
      </div>
    </div>
  ));
    return (
      <section className={styles.sectionPractice}>
        <div className={styles.contentWrapper}>
          <span className={styles.tag}>
            Produtos
            <div className={styles.divider}></div>
          </span>
          <h2 className={styles.title}>Nossos produtos</h2>
          <p className={styles.subtitle}>
            Em cada etapa do processo de cozinhar ao momento de servir e
            saborear, levamos mais deliciosidade, criatividade e alegria para a
            vida das pessoas.
            <strong></strong>
          </p>

          <CustomSwiper
            slides={renderedCards}
            slidesPerView={1}
            spaceBetween={20}
            pagination
            mobileOnly
            fallbackClass={styles.grid}
            autoplay={true}
            className={styles.practiceSwiper}
          />

          <Link href="/produtos">
            <button className={styles.button}>Conheça nossos produtos</button>
          </Link>
        </div>
      </section>
    );
};
