import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.columnsWrapper}>
          <div className={styles.footerColumn}>
            <p className={styles.footerTitle}>Institucional</p>
            <ul className={styles.footerList}>
              <li>
                <a href="https://www.seara.com.br/outras-marcas/">
                  Outras Marcas
                </a>
              </li>
              <li>
                <a href="https://www.seara.com.br/imprensa/" target="_blank">
                  Imprensa
                </a>
              </li>
              <li>
                <a href="https://www.seara.com.br/instituto-jf/">
                  Instituto J&amp;F
                </a>
              </li>
              <li>
                <a href="https://www.seara.com.br/sobre-nos/">Sobre nós</a>
              </li>
              <li>
                <a href="https://www.clientedireto.com.br/spa/login/cartaoseara/">
                  Cartão Seara
                </a>
              </li>
              <li>
                <a href="https://www.seara.com.br/livros-receitas/">Ebooks</a>
              </li>
              <li>
                <a href="https://www.seara.com.br/sustentabilidade/">
                  Sustentabilidade
                </a>
              </li>
              <li>
                <a href="https://www.seara.com.br/politica-de-privacidade/">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="https://www.seara.com.br/cookies/">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <p className={styles.footerTitle}>Menu</p>
            <nav className={styles.footerList}>
              <Link href="/">Home</Link>
              <Link href="https://www.doriana.com.br/receitas/" target="_blank">Receitas</Link>
              <Link href="/sobre">Nossa História</Link>
            </nav>
          </div>

          <div className={styles.footerBrand}>
            <Link href="/">
              <Image
                src="/logos/Doriana-Logo-Blur-RGB-210913.png"
                alt="Delícia"
                width={221}
                height={112}
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>

      <hr className={styles.footerDivider} />

      <div className={styles.footerCopy}>
        Copyright R Seara 2025. Todos Os Direitos Reservados
      </div>
    </footer>
  );
};
