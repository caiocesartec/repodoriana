import Image from "next/image";
import styles from "./styles.module.css";
import { getDicas } from "@/lib/dicas";
import { SectionDicas } from "../section-dicas";

export const SectionEquipe = async () => {
  const dicas = await getDicas();

  return (
    <section className={styles.container}>
      <SectionDicas dicas={dicas} />
    </section>
  );
};
