import Image from "next/image";
import styles from "./styles.module.css";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { OpenMenu } from "../menu-aberto";
import Link from "next/link";

export const HeaderMobile = () => {
  return (
    <header className={styles.headerMobile}>
      <Link href="/">
        <Image
          src="/logos/delicia-branco-high.png"
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
