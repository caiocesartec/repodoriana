import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";

export const SectionNews = () => {
  const cards = [
    {
      icon: "/produtos/pote-cremosa-sal-250.png",
      title: "Doriana Cremosa com Sal 250g",
      text: "A receita garante mais sabor e cremosidade para as suas refeições.",
      slug: "doriana-cremosa-com-sal-250g",
    },
    {
      icon: "/produtos/pote-cremosa-sal-500.png",
      title: "Doriana Cremosa com Sal 500g",
      text: "A receita garante mais sabor e cremosidade para as suas refeições.",
      slug: "doriana-cremosa-com-sal-500g",
    },
    {
      icon: "/produtos/pote-cremosa-sal-1kg.png",
      title: "Doriana Cremosa com Sal 1kg",
      text: "A receita garante mais sabor e cremosidade para as suas refeições.",
      slug: "doriana-cremosa-com-sal-1kg",
    },

    {
      icon: "/produtos/pote-cremosa-sem-sal-250.png",
      title: "Doriana Cremosa Sem Sal 250g",
      text: "A receita garante mais sabor e cremosidade para as suas refeições.",
      slug: "doriana-cremosa-sem-sal-250g",
    },
    {
      icon: "/produtos/pote-cremosa-sem-sal-500.png",
      title: "Doriana Cremosa Sem Sal 500g",
      text: "A receita garante mais sabor e cremosidade para as suas refeições.",
      slug: "doriana-cremosa-sem-sal-500g",
    },
    {
      icon: "/produtos/pote-cremosa-sem-sal-1kg.png",
      title: "Doriana Cremosa Sem Sal 1kg",
      text: "A receita garante mais sabor e cremosidade para as suas refeições.",
      slug: "doriana-cremosa-sem-sal-1kg",
    },

    {
      icon: "/produtos/pote-light-500.png",
      title: "Doriana Light 500g",
      text: "Mais leveza e sabor no preparo dos seus pratos. Sempre com a cremosidade da Doriana.",
      slug: "doriana-light-500g",
    },
  ];

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <SectionTitle width="380px">
          Doriana tem cremosidade e sabor sem igual.
        </SectionTitle>

        <p className={styles.description}>
          No Brasil, a gente está sempre se reinventando. E na cozinha, os
          brasileiros não param de inventar novos sabores, novas combinações,
          novos pratos
        </p>

        <div className={styles.fullBarWrapper}>
          <div className={styles.fullBarTrack}>
            <Image
              src="/genericas/barra_01.png"
              alt="Barra decorativa 1"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.png"
              alt="Barra decorativa 2"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_01.png"
              alt="Barra decorativa 1 repeate"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.png"
              alt="Barra 2 repeat"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_03.png"
              alt="Barra decorativa 1 repeate"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_04.png"
              alt="Barra 2 repeat"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_01.png"
              alt="Barra decorativa 1"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.png"
              alt="Barra decorativa 2"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
          </div>
        </div>

        <SectionTitle>Nossos Produtos</SectionTitle>
        <p className={styles.description}>
          A receita garante mais sabor e cremosidade para as suas refeições. Em
          opções com sal e sem sal, disponíveis em todo o país.
        </p>

        <div className={styles.productsGrid}>
          {cards.map((card) => (
            <Link
              className={styles.productCardLink}
              href={`/produtos/${card.slug}`}
              key={card.slug}
            >
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    quality={100}
                    className={styles.productImage}
                  />
                </div>

                <h3 className={styles.productTitle}>{card.title}</h3>
                <p className={styles.productText}>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.fullBarWrapper}>
          <div className={styles.fullBarTrack}>
            <Image
              src="/genericas/barra_01.png"
              alt="Barra decorativa 1"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.png"
              alt="Barra decorativa 2"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_01.png"
              alt="Barra decorativa 1 repeate"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.png"
              alt="Barra 2 repeat"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_03.png"
              alt="Barra decorativa 1 repeate"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_04.png"
              alt="Barra 2 repeat"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_01.png"
              alt="Barra decorativa 1"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.png"
              alt="Barra decorativa 2"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
