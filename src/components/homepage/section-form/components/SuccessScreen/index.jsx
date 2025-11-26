import { CircleCheckBig } from "lucide-react";
import styles from "./styles.module.css";

export const SuccessScreen = ({ onReset }) => {
  return (
    <div className={styles.finalScreen}>
      <CircleCheckBig size={80} strokeWidth={1.5} className={styles.finalIcon} />

      <h3 className={styles.finalTitle}>Cadastro feito com sucesso!</h3>
      <p className={styles.finalText}>A Seara agradece sua inscrição.</p>

      <button type="button" className={styles.finalButton} onClick={onReset}>
        Novo cadastro
      </button>
    </div>
  );
};
