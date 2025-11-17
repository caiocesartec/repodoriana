import styles from "./styles.module.css";
import { DicasCard } from "../dicas-card";

export const DicasContent = async ({ receitas }) => {
  return (
    <section className={styles.receitasSection}>
      <h1 className={styles.title}>RECEITAS PAGE</h1>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className={styles.cardsGrid}>
        {receitas.length === 0 ? (
          <p className={styles.noReceitas}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ) : (
          receitas.map((receita) => (
            <DicasCard
              key={receita.nome}
              nome="Lorem ipsum dolor"
              endereco="Lorem ipsum dolor sit amet"
              imagem={receita.imagem?.url}
            />
          ))
        )}
      </div>
    </section>
  );
};
