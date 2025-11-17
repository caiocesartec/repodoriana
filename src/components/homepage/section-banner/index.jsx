import { CustomSwiper } from "@/components/common/swiper";
import styles from "./styles.module.css";
import Link from "next/link";
import { Header } from "@/components/common/header";
import Image from "next/image";

const branches = [
  {
    image: "/banners/banner_principal.jpg",
    title: "A cremosa que vira o jogo",
    text: "Delícia com creme de leite.",
    textTwo: "Pra deixar qualquer momento ainda mais gostoso.",
  },
  {
    image: "/banners/Banner_Cozinhando.png",
    title: "O sabor que surpreende",
    text: "A única cremosa de verdade.",
    textTwo: "Do fogão ao prato, tudo vira UOU!",
  },
  {
    image: "/banners/banner_principal.jpg",
    title: "Vira sabor, vira Delícia",
    text: "Cremosidade que faz a diferença.",
    textTwo: "Porque nada tá tão bom que não possa ficar ainda melhor.",
  },
  {
    image: "/banners/Banner_Cozinhando.png",
    title: "Mais sabor, mais cremosidade",
    text: "Pra cozinhar, espalhar e surpreender.",
    textTwo: "Transforme o simples em deliciosamente incrível.",
  },
];


export const SectionBanner = () => {
  const slides = branches.map((branch, index) => (
    <section key={index} className={styles.banner}>
      <Image
        src={branch.image}
        alt={branch.title}
        fill
        className={styles.bgImage}
        quality={100}
        priority
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          {branch.title}
          <br />
          {branch.text}
        </h1>
        <p className={styles.subtitle}>{branch.textTwo}</p>

      </div>
    </section>
  ));

  return (
    <>
      <Header variant="absolute" />
      <div className={styles.section_one}>
        <CustomSwiper slides={slides} loop pagination autoplay={false} />
      </div>
    </>
  );
};
