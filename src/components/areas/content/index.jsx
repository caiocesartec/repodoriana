import Image from "next/image";
import styles from "./styles.module.css"

export const AreasContent = () => {
  return (
    <section className={styles.areasSection}>
      <h1 className={styles.title}>Generic Page 3</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        commodo lorem. Cras tempor, velit et dictum hendrerit, nisi urna
        facilisis turpis, in egestas leo velit a justo.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/area-atuacao_background.jpg"
            alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            fill
            className={styles.image}
            quality={100}
          />
        </div>

        <div className={styles.textBlock}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, lacus id fringilla sodales, urna sapien vulputate
            mauris, id ultricies augue metus non est. Mauris nec justo sed
            purus molestie suscipit at sit amet arcu.
          </p>

          <p>
            Vivamus vitae arcu convallis, interdum libero eget, luctus nunc.
            Nulla facilisi. Morbi porttitor, neque at accumsan finibus, risus
            magna faucibus mi, sit amet commodo lorem lectus id arcu.
          </p>

          <p>
            Suspendisse potenti. Integer dignissim, nulla sed gravida
            ullamcorper, sapien elit congue risus, eget porta nisl lorem eu
            nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque quis nunc et lorem eleifend tempor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit:
          </p>
        </div>
      </div>
    </section>
  );
};
