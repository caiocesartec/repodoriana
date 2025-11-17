import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const Header = ({ variant = "default" }) => {
  return (
    <header
      className={`${styles.header} ${
        variant === "absolute" ? styles.headerAbsolute : ""
      }`}
    >
      <Link href="/">
        <Image
          src="/logos/delicia-branco-high.png"
          alt="reservado"
          width={500}
          height={500}
          priority
          quality={100}
        />
      </Link>
    </header>
  );
};
