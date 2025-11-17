import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas.png"
            alt="imagem reservada"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>

        <div className={styles.textContent}>
          <span className={styles.tag}>
            Estamos aqui para que a vida vire uma Delicia.
            <div className={styles.divider}></div>
          </span>

          <p className={styles.description}>
            Nosso apetite insaciável por uma vida deliciosa transforma cada momento 
            em algo que vale a pena saborear. Acreditamos que não há nada tão bom 
            que não possa virar uma Delícia, das receitas às relações, do astral 
            ao cotidiano.
          </p>

          <Link href="/sobre">
            <button className={styles.button}>CONHEÇA NOSSA HISTÓRIA</button>
          </Link>
        </div>

      </div>
    </section>
  );
};
