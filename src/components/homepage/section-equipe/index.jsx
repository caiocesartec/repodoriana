import Image from "next/image";
import styles from "./styles.module.css";
import { getDicas } from "@/lib/dicas";
import { SectionDicas } from "../section-dicas";

const dicas = await getDicas();

export const SectionEquipe = () => {
  return (
    <section className={styles.container}>


      <SectionDicas dicas={dicas} />
    </section>
  );
};
