import styles from "./styles.module.css";

export const SectionTitle = ({ children, width = "100%" }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};
