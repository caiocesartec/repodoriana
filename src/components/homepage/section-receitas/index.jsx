import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import { ReceitasCard } from "./components/receitas-card";

export const SectionReceitas = async ({ receitas }) => {
  const hasReceitas = receitas && receitas.length > 0;

  const subtitleContent = hasReceitas ? (
    <>
      <p className={styles.paragrafoTitulo}>
        Doriana está com uma receita, mais saborosa e muito mais cremosa. Pãozinho, torrada, bolo, tudo fica mais gostoso com a Doriana. E toda receita que você prepara com ela, também. #PodeEspalhar.
      </p>
    </>
  ) : (
    <>No momento não temos receitas cadastradas.</>
  );

  const slides = hasReceitas
    ? receitas.map((receita) => (
        <ReceitasCard
          key={receita.nome}
          nome={receita.nome}
          imagem={receita.imagem?.url || "/receitas/default.png"}
          href={receita.linkReceita?.url}
        />
      ))
    : null;

  return (
    <section className={styles.receitasSection}>
      <Image
        src="/banners/receitas.png"
        alt="Fundo receitas"
        fill
        className={styles.backgroundImage}
        quality={100}
        priority
      />

      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.tag}>
            <h2 className={styles.title}>Nossas receitas</h2>
          </span>

          

          <section className={styles.subtitle}>{subtitleContent}</section>

          {hasReceitas && (
            <div className={styles.carouselWrapper}>
              <CustomSwiper
                slides={slides}
                loop
                pagination
                autoplay={true}
                autoplayDelay={3500}
                spaceBetween={24}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className={styles.receitasSwiper}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
