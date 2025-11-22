import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const DicasCard = ({ titulo, detalhesDaDica, imagem, href }) => {

  const DicasCardContent = (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagem || "/imagem-dica.png"}
          alt={titulo}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{detalhesDaDica}</p>
      </div>
    </div>
  );

  return href ? (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      {DicasCardContent}
    </Link>
  ) : (
    DicasCardContent
  );
};
