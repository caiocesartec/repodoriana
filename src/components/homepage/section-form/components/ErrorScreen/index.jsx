import { CircleX } from "lucide-react";
import styles from "./styles.module.css";

export const ErrorScreen = ({ onReset }) => {
  return (
    <div className={styles.finalScreen}>
      <CircleX size={80} strokeWidth={1.5} className={styles.finalIconError} />

      <h3 className={styles.finalTitle}>Ops! Algo deu errado</h3>
      <p className={styles.finalText}>
        Não foi possível concluir sua inscrição. Tente novamente.
      </p>

      <button type="button" className={styles.finalButton} onClick={onReset}>
        Tentar novamente
      </button>
    </div>
  );
};
