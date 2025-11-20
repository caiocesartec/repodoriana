import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";

export const SectionTwoTop = () => {
  

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <SectionTitle width="380px">Doriana tem cremosidade e sabor sem igual.</SectionTitle>

        <p className={styles.description}>
          No Brasil, a gente está sempre se reinventando. E na cozinha, os brasileiros não param de inventar novos sabores, novas combinações, novos pratos
        </p>
      </div>
    </section>
  );
};
