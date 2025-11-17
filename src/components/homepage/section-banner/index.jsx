import { Header } from "@/components/common/header";
import styles from "./styles.module.css";
import { BannerClient } from "./banner-client";

const branches = [
  {
    image: "/banners/banner_principal.jpg",
    imageMobile: "/banners/mobile/principal.jpg",
    title: "A cremosa que vira o jogo",
    text: "Delícia com creme de leite.",
    textTwo: "Pra deixar qualquer momento ainda mais gostoso.",
  },
  {
    image: "/banners/Banner_Cozinhando.jpg",
    imageMobile: "/banners/mobile/cozinhando.jpg",
    title: "O sabor que surpreende",
    text: "A única cremosa de verdade.",
    textTwo: "Do fogão ao prato, tudo vira UOU!",
  },
  {
    image: "/banners/banner_principal.jpg",
    imageMobile: "/banners/mobile/principal.jpg",
    title: "Vira sabor, vira Delícia",
    text: "Cremosidade que faz a diferença.",
    textTwo: "Porque nada tá tão bom que não possa ficar ainda melhor.",
  },
  {
    image: "/banners/banner_principal.jpg",
    title: "Mais sabor, mais cremosidade",
    text: "Pra cozinhar, espalhar e surpreender.",
    textTwo: "Transforme o simples em deliciosamente incrível.",
  },
];

export const SectionBanner = () => {
  return (
    <>
      <Header variant="absolute" />

      <div className={styles.section_one}>
        <BannerClient branches={branches} />
      </div>
    </>
  );
};
