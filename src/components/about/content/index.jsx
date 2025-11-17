import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <section className={styles.aboutSection}>
      
      <h1 className={styles.heroPhrase}>
        A vida merece ser uma <span>Delícia</span>
      </h1>

      <p className={styles.subtitle}>
        Delícia é a única margarina feita com creme de leite e chegou para virar o jogo.
        Acreditamos que cada momento do dia merece sabor, leveza e aquele toque
        que transforma o simples em especial.
      </p>

      <div className={styles.contentWrapper}>
        {/* <div className={styles.imageWrapper}>
          <Image
            src="/banners/Banner_Mochilinha.png"
            alt="Delícia"
            fill
            className={styles.image}
            quality={100}
          />
        </div> */}

        <div className={styles.textBlock}>
          <p>
            Quando todo mundo dizia que margarina era tudo igual, a gente decidiu mudar o jogo.
            Delícia é a única margarina com creme de leite de verdade. Enquanto outras se diziam
            cremosas, nós fomos lá e mostramos o que é ser <strong>cremoooosa de verdade</strong>.
          </p>

          <p>
            Não somos só para o café da manhã. Delícia com creme de leite combina com qualquer
            hora do dia – e é justamente isso que faz tudo ganhar mais sabor, mais brilho e mais
            vontade de repetir.
          </p>

          <p>
            Nossa missão é simples: transformar o cotidiano. A cada receita, perguntamos:
            por que não fazer delicioso? Porque vida boa é vida saboreada. É viver leve,
            viver gostoso, viver do nosso jeito.
          </p>

          <p>
            Rimos alto, misturamos culturas, provamos novidades e abraçamos o inesperado.
            A Delícia da vida é estar de braços abertos para o melhor que ela pode trazer.
          </p>

          <p>
            Afinal, nada está tão bom que não possa ficar ainda mais Delícia.
          </p>
        </div>
      </div>

      <div className={styles.finalImageWrapper}>
        <Image
            src="/banners/Banner_Sobre-a-Marca_Desktop_1366x500px.jpg"

          alt="Banner da Marca Delícia"
          fill
          className={styles.finalImage}
          quality={100}
        />
      </div>
    </section>
  );
};
