import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { getDicas } from "@/lib/dicas";
import { SectionDicas } from "../section-dicas";


const dicas = await getDicas()

export const SectionEquipe = () => {
  return (
    <section className={styles.equipeSection}>




      <div className={styles.trabalheConosco}>

        <div className={styles.text}>
          <h3 className={styles.tag}>
            Idela para todos os cenários
          </h3>
          <p className={styles.textDescription}>
           Pode inventar receitas com Doriana também. Ou deixar ainda mais gostosas suas receitas preferidas.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas_2.jpg"
            alt="Delícia - equipe"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>
      </div>

      <SectionDicas dicas={dicas} />
{/* 
      <div className={styles.quemFaz}>
        <h2 className={styles.tag}>
          Viemos para transformar momentos, relações e o astral
        </h2>



        <p className={styles.description}>
          Nosso apetite insaciável por uma vida deliciosa transforma cada preparo
          em uma experiência que vale a pena saborear. Acreditamos que a vida
          merece ser uma Delícia e é por isso que pensamos fora da caixa e
          levamos leveza, criatividade e bom humor para tudo que fazemos.
        </p>
      </div> */}
    </section>
  );
};
