import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionReceitas = () => {
  return (
    <section className={styles.receitasSection}>
      <Image
        src="/banners/receitas_3.png"
        alt="Fundo receitas"
        fill
        className={styles.backgroundImage}
        quality={100}
        priority
      />

      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.tag}>
            <h2 className={styles.title}>Nossas receitas</h2>
          </span>

          <p className={styles.paragrafoTitulo}>
            Doriana está com uma receita mais saborosa e muito mais cremosa.
            Pãozinho, torrada, bolo… tudo fica mais gostoso com Doriana.
            E toda receita que você prepara com ela, também. #PodeEspalhar
          </p>

          <Link
            href="https://www.seara.com.br/marcas/doriana/"
            target="_blank"
          >
            <button className={styles.button}>
              Conheça nossas receitas
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
