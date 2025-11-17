import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";

export const SectionNews = () => {
  const cards = [
    {
      icon: "/produtos/pote-creme-500.png",
      title: "Delícia com creme de leite",
      text: "A Delícia com creme de leite traz uma explosão de sabor e muita cremosidade.",
      slug: "delicia-com-creme-de-leite",
    },
    {
      icon: "/produtos/pote-supreme-500.png",
      title: "Delícia Supreme",
      text: "A Delícia Supreme é a margarina amanteigada feita com creme de leite.",
      slug: "delicia-supreme",
    },
    {
      icon: "/produtos/pote-ervas-500.png",
      title: "Delícia Toque de Chef com Ervas Aromáticas",
      text: "A margarina Delícia Toque de Chef com Ervas Aromáticas é feita com pedacinhos de ervas, de verdade, acredita?",
      slug: "delicia-toque-de-chef-com-ervas-aromaticas",
    },
    {
      icon: "/produtos/pote-alho-500.png",
      title: "Delícia Toque de Chef com Alho e Cebola",
      text: "A margarina Delícia Toque de Chef com Alho e Cebola é feita com pedacinhos de alho e cebola e, de verdade, sabia?",
      slug: "delicia-toque-de-chef-com-alho-e-cebola",
    },
  ];

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <SectionTitle width="380px">Doriana tem cremosidade e sabor sem igual.</SectionTitle>

        <p className={styles.description}>
       No Brasil, a gente está sempre se reinventando.
E na cozinha, os brasileiros não param de inventar
novos sabores, novas combinações, novos pratos
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
          A receita garante mais sabor e cremosidade para as suas refeições. 
Em opções com sal e sem sal, disponíveis em todo o país.
        </p>


        <div className={styles.productsGrid}>
          {cards.map((card) => (
            <Link className={styles.productCardLink} href={`/produtos/${card.slug}`} key={card.slug}>
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
