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
              height={118}
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
            <Link href="/#" onClick={() => setIsOpen(false)}>
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
          <Link href="/#">
            <Image
              src="/icones/iLinkedin.png"
              alt="LinkedIn"
              width={48}
              height={48}
              quality={100}
            />
          </Link>

          <Link href="/#">
            <Image
              src="/icones/iInstagramm.png"
              alt="Instagram"
              width={38}
              height={38}
              quality={100}
            />
          </Link>

          <Link href="/#">
            <Image
              src="/icones/iWhats.png"
              alt="WhatsApp"
              width={30}
              height={30}
              quality={100}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
