import Image from "next/image";
import styles from "./styles.module.css";
import { OpenMenu } from "../menu-aberto";
import Link from "next/link";

export const HeaderMobile = () => {
  return (
    <header className={styles.headerMobile}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logos/Doriana-Logo-Blur-RGB-210913.png"
          alt="reservado"
          width={181}
          height={63}
          className={styles.logo}
          quality={100}
        />
      </Link>
      <div className={styles.header_mobile_hamburguer}>
        <OpenMenu />
      </div>
    </header>
  );
};
