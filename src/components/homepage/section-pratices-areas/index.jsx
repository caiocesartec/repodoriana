// import Image from "next/image";
// import styles from "./styles.module.css";
// import { CustomSwiper } from "@/components/common/swiper";
// import Link from "next/link";

// // TODO: Excluir essa section

// const cards = [
//   {
//     icon: "/produtos/primor_original.png",
//     title: "Primor Original",
//     text: "Seja no forno, preparando seu bolo preferido ou no toque final daquele cuscuz quentinho, a margarina Primor é a escolha certa para quem cozinha com amor. Tenha sempre em casa!",
//   },
//   {
//     icon: "/produtos/primor_vegetal.png",
//     title: "Gordura Vegetal Primor",
//     text: "Seja no forno, preparando seu bolo preferido ou no toque final daquele cuscuz quentinho, a margarina Primor é a escolha certa para quem cozinha com amor. Tenha sempre em casa!",
//   },
//   {
//     icon: "/produtos/primor_balde.png",
//     title: "Margarina Balde Primor",
//     text: "Seja no forno, preparando seu bolo preferido ou no toque final daquele cuscuz quentinho, a margarina Primor é a escolha certa para quem cozinha com amor. Tenha sempre em casa!",
//   },
// ];

// export const SectionPracticeAreas = () => {
//   const renderedCards = cards.map((card, index) => (
//     <div className={styles.card} key={index}>
//       <Image
//         src={card.icon}
//         alt={`ícone ${card.title}`}
//         width={100}
//         height={80}
//         className={styles.icon}
//         quality={100}
//       />
//       <div className={styles.textWrapper}>
//         <h3 className={styles.cardTitle}>{card.title}</h3>
//         <p className={styles.cardText}>{card.text}</p>
//       </div>
//     </div>
//   ));
//   return (
//     <section className={styles.sectionPractice}>
//       <div className={styles.contentWrapper}>
//         <span className={styles.tag}>
//           Produtos
//           <div className={styles.divider}></div>
//         </span>
//         <h2 className={styles.title}>Nossos produtos</h2>
//         <p className={styles.subtitle}>
//           Em cada etapa do processo de cozinhar ao momento de servir e saborear,
//           levamos mais deliciosidade, criatividade e alegria para a vida das
//           pessoas.
//           <strong></strong>
//         </p>

//         <CustomSwiper
//           slides={renderedCards}
//           slidesPerView={1}
//           spaceBetween={20}
//           pagination
//           mobileOnly
//           fallbackClass={styles.grid}
//           autoplay={true}
//           className={styles.practiceSwiper}
//         />
//       </div>
//     </section>
//   );
// };
