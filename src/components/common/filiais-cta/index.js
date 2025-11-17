import Image from "next/image";
import styles from "./styles.module.css";

export const FiliaisCallToAction = () => {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <div className={styles.imageWrapper}>
          <Image
            src=""
            alt="Lorem ipsum dolor sit amet"
            width={200}
            height={400}
            priority
            quality={100}
          />
        </div>

        <div className={styles.textAndButton}>
          <div className={styles.textWrapper}>
            <h2>LOREM IPSUM DOLOR SIT AMET?</h2>

            <p>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </strong>
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <button className={styles.ctaButton}>LOREM IPSUM</button>
        </div>
      </div>
    </section>
  );
};
