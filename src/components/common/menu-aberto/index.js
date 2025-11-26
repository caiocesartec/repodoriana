"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

export const OpenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 782);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Lorem ipsum" : "Lorem ipsum"}
      >
        {isOpen && isMobile ? (
          <IoClose size={40} color="#fff" />
        ) : (
          <RiMenu3Line />
        )}
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <IoClose />
        </button>

        <div className={styles.logoWrapper}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logos/Doriana-Logo-Blur-RGB-210913.png"
              alt="Logo Doriana"
              width={226}
              height={125}
              quality={100}
            />
          </Link>
        </div>

        <ul className={styles.navList}>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="https://www.seara.com.br/marcas/doriana/" target="_blank" onClick={() => setIsOpen(false)}>
              Receitas
            </Link>
          </li>
          <li>
            <Link href="/sobre" onClick={() => setIsOpen(false)}>
              Nossa História
            </Link>
          </li>
        </ul>

        <div className={styles.socials}>
      
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
      
          <Link target="_blank" href="https://www.instagram.com/doriana/">
            <Image
              src="/logos/ico-insta.png"
              alt="Icone Instagram"
              width={30}
              height={30}
              quality={100}
            />
          </Link>
    
          <Link target="_blank" href="https://www.youtube.com/@Dorianabr">
            <Image
              src="/logos/ico-you.png"
              alt="Icone Youtube"
              width={33}
              height={31}
              quality={100}
            />
          </Link>
           
        </div>
      </div>
    </>
  );
};
