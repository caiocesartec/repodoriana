import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const DicasCard = ({ titulo, descricao, imagem, href }) => {
  const imageUrl = imagem || "/imagem-dica.png";

  const DicasCardContent = (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={titulo} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );

  return href ? <Link href={href}>{DicasCardContent}</Link> : DicasCardContent;
};
