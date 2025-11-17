import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.heroPhrase}>
        Doriana.
        <br />
        <span>Quem prova, ama.</span>
      </h1>

      <p className={styles.subtitle}>
        No Brasil, a gente está sempre se reinventando. E na cozinha, os
        brasileiros não param de inventar novos sabores, novas combinações e
        novos pratos.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <p>
            Por isso, Doriana também se reinventou. Agora a Doriana é mais
            saborosa e muito mais cremosa. Pode provar que você vai amar. Pode
            espalhar Doriana no pão quentinho que é impossível não gostar.
          </p>

          <p>
            Pode inventar e espalhar onde quiser: prova Doriana no pão na chapa,
            na tapioca, no bolo de cenoura, na torrada, no panetone.
          </p>

          <p>
            Pode inventar receitas com Doriana também. Ou deixar ainda mais
            gostosas suas receitas preferidas.
          </p>

          <p>
            Prova Doriana no refogado, na receita de bolo, de torta, de
            brigadeiro. Prova em casa, na padaria, onde você quiser. Prova com a
            família reunida na mesa.
          </p>

          <p>
            E pode ter certeza: a família vai provar, aprovar e amar. E agora
            que você já ama o sabor e a cremosidade sem igual da Doriana, que
            tal espalhar pra todo mundo?
          </p>

          <p>
            <strong>Doriana. Quem prova, ama. #PodeEspalhar</strong>
          </p>
        </div>
      </div>

      <div className={styles.finalImageWrapper}>
        <Image
          src="/genericas/sobre.jpeg"
          alt="Banner da Marca Doriana"
          fill
          className={styles.finalImage}
          quality={100}
        />
      </div>
    </section>
  );
};
