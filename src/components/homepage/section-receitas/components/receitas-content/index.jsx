import styles from "./styles.module.css";
import { ReceitasCard } from "../receitas-card";

export const ReceitasContent = async ({ receitas }) => {
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
            <ReceitasCard
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
