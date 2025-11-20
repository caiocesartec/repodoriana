import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";
import { Wave } from "@/components/common/waves";

export const SectionThreeProductShow = () => {
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
    <section className={styles.SectionThreeProductShow}>
      <Wave direction="up" />
      <div className={styles.containerFull}>
        <div className={styles.productContainer}>
          <h2 className={styles.productTitleCall}>Nossos Produtos</h2>

          <p className={styles.descriptionProducts}>
            A receita garante mais sabor e cremosidade para as suas refeições.
            Em opções com sal e sem sal, disponíveis em todo o país.
          </p>
        </div>
        {/* <Wave direction="down" /> */}

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
      </div>
    </section>
  );
};
