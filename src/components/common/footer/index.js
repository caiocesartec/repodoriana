import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
    <div className={styles.barDivide}>
      <Image
        src="/genericas/onda.png"
        alt="Doriana"
        width={2000}
        height={107}
        quality={100}
      />
    </div>
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.columnsWrapper}>

          <div className={styles.columnsWrapperSides}>
             <div className={styles.footerColumn}>
              <p className={styles.footerTitle}>INSTITUCIONAL</p>
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
              <p className={styles.footerTitle}>A DORIANA</p>
              <nav className={styles.footerList}>
                <Link href="/">Home</Link>
                <Link href="https://www.seara.com.br/marcas/doriana/" target="_blank">Receitas</Link>
                <Link href="/sobre">Nossa História</Link>
              </nav>
            </div>
            <div className={styles.footerColumn}>
              <p className={styles.footerTitle}>CONTATO</p>
              <nav className={styles.footerList}>
                <Link href="tel:+0800-047-2425">0800-047-2425</Link>
              </nav>
            </div>
           
          </div>
        
          <div className={styles.columnsWrapperSides}>

            <div className={styles.footerBrand}>
              <Link href="/">
                <Image
                  src="/logos/Doriana-Logo-Blur-RGB-210913.png"
                  alt="Doriana"
                  width={221}
                  height={107}
                  quality={100}
                />
              </Link>
            </div>
            <div className={styles.footerSocial}>
              <ul>
                <li>
                  <Link target="_blank" href="https://www.facebook.com/Doriana/">
                    <Image
                      src="/logos/ico-face.png"
                      alt="Icone Facebook"
                      width={17}
                      height={30}
                      style={{marginRight: 6 }}
                      quality={100}
                    />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.instagram.com/doriana/">
                    <Image
                      src="/logos/ico-insta.png"
                      alt="Icone Instagram"
                      width={30}
                      height={30}
                      quality={100}
                    />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.youtube.com/@Dorianabr">
                    <Image
                      src="/logos/ico-you.png"
                      alt="Icone Youtube"
                      width={33}
                      height={31}
                      quality={100}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.footerCopy}>
        <p className={styles.footerCopyText}>Fotos meramente ilustrativas | Ofertas válidas enquanto durarem os estoques dos nossos parceiros | Vendas sujeitas a análise e confirmação de dados.</p>
        <p className={styles.footerCopyText}>Os preços, promoções e condições de pagamento são válidos exclusivamente para compras efetuadas em nossos Parceiros.</p>
        <p className={styles.footerCopyText}>Todos os produtos estão sujeitos a disponibilidade de estoque.</p>
        <p className={styles.footerCopyText}>SEARA – CNPJ: 02.914.460/0202-67 – Av. Marginal Direita do Tietê, 500, São Paulo/SP – CEP 05.118-100</p>
        <p className={styles.footerCopyText}>Copyright – 2025 | <Link className={styles.footerCopyTextLink}href="https://www.seara.com.br/">www.seara.com.br</Link></p>
      </div>
    </footer>
    </>
  );
};
