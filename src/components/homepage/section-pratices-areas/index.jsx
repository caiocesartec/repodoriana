import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import Link from "next/link";

const cards = [
  {
    icon: "/produtos/Mkp Pote IML 1kg Marg Dor Crem CS - Ang Fr - LOW.png",
    title: "Doriana Cremosa Com Sal",
    text: "A receita garante mais sabor e cremosidade para as suas refeições. Em opções com sal e sem sal, disponíveis em todo o país.",
  },
  {
    icon: "/produtos/Mkp Pote IML 1kg Marg Dor Crem SS - Ang Fr - LOW.png",
    title: "Doriana Cremosa Sem Sal",
    text: "A receita garante mais sabor e cremosidade para as suas refeições. Em opções com sal e sem sal, disponíveis em todo o país.",

  },
  {
    icon: "Mkp Pote IML 500g Marg Dor Light CS - Ang Fr - LOW.png",
    title: "Doriana Light",
    text: "Mais leveza e sabor no preparo dos seus pratos. Sempre com a cremosidade da Doriana.",
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
