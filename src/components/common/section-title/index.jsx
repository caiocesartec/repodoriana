import styles from "./styles.module.css";

export const SectionTitle = ({ children, width = "100%", color }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title} style={{ color }}>
        {children}
      </h2>
    </div>
  );
};
