import styles from "./styles.module.css";

export const TeamContent = async ({ profissionais }) => {
  return (
    <section className={styles.teamSection}>
      <h1 className={styles.title}>GENERIC PAGE</h1>

      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
        malesuada lorem. Nulla facilisi. Integer aliquet, augue sed cursus
        posuere, nunc velit aliquet dolor, eget tempus justo nunc vel lorem.
      </p>

      <div className={styles.cardGrid}>
        {profissionais.length === 0 ? (
          <p className={styles.noProfissionais}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ) : (
          profissionais.map((prof) => (
            <div key={prof.nome} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardName}>Lorem ipsum dolor</h2>
              </div>

              <div className={styles.divisor} />

              <p className={styles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                condimentum, felis id hendrerit faucibus, urna velit maximus
                arcu, vel gravida justo lacus eget erat.
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
