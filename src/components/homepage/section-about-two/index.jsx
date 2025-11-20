import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAboutTwo = () => {
  return (
    <section className={styles.sectionAboutTwo}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <span className={styles.tag}>
            Ideal para todos os cenários <div className={styles.divider}></div>
          </span>

          <p className={styles.description}>
            Pode inventar receitas com Doriana também. Ou deixar ainda mais
            gostosas suas receitas preferidas.
          </p>

          <Link href="/sobre">
            <button className={styles.button}>CONHEÇA NOSSA HISTÓRIA</button>
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas_2.jpg"
            alt="imagem reservada"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
