import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas.jpeg"
            alt="imagem reservada"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>

        <div className={styles.textContent}>
          <span className={styles.tag}>
            Longa Vida
            <div className={styles.divider}></div>
          </span>

          <p className={styles.description}>
            Doriana foi a primeira margarina cremosa do Brasil. Em 1970, Doriana é lançada no Brasil e conquista a todos com um produto cremoso e de qualidade sem igual.                            
          </p>

          <Link href="/sobre">
            <button className={styles.button}>CONHEÇA NOSSA HISTÓRIA</button>
          </Link>
        </div>

      </div>
    </section>
  );
};
