import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import { DicasCard } from "./components/dicas-card";
import { SectionTitle } from "@/components/common/section-title";

export const SectionDicas = async ({ dicas }) => {
  const hasDicas = dicas && dicas.length > 0;

  const subtitleContent = hasDicas ? (
    <>
      Acreditamos que a vida merece ser uma Delícia e estamos aqui para
      transformar <br /> qualquer hora do dia com dicas especiais para o seu dia
      a dia.
    </>
  ) : (
    <>No momento não temos dicas cadastradas.</>
  );

  const slides = hasDicas
    ? dicas.map((dica, index) => (
        <DicasCard
          key={index}
          titulo={dica.titulo}
          descricao={dica.descricao}
          imagem={dica.imagem?.url || "/imagem-dica.png"}
          href="/"
        />
      ))
    : null;

  return (
    <>
    
        <div className={styles.fullBarWrapper}>
          <div className={styles.fullBarTrack}>
            <Image
              src="/genericas/barra_01.jpg"
              alt="Barra decorativa 1"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.jpg"
              alt="Barra decorativa 2"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_01.jpg"
              alt="Barra decorativa 1 repeate"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.jpg"
              alt="Barra 2 repeat"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
          </div>
        </div>
    <section className={styles.dicasSection}>
      <div className={styles.content}>
        <SectionTitle width="250px"> Nossas dicas</SectionTitle>

        <p className={styles.subtitle}>{subtitleContent}</p>

        {hasDicas && (
          <div className={styles.carouselWrapper}>
            <CustomSwiper
              slides={slides}
              loop
              pagination
              autoplay={false}
              autoplayDelay={3500}
              spaceBetween={24}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              className={styles.dicasSwiper}
            />
          </div>
        )}
      </div>
    </section>
    </>
  );
};