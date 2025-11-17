"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export const ProductsContent = ({ produto }) => {
  const [activeIndex, setActiveIndex] = useState([0, 1, 2]);

  const toggleAccordion = (index) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };

  const accordions = [
    { titulo: "Sobre o produto", tipo: "texto", conteudo: produto.sobre },
    { titulo: "Ingredientes", tipo: "texto", conteudo: produto.ingredientes },
    {
      titulo: "Informações nutricionais",
      tipo: "nutricional",
      conteudo: produto.nutricionalItens,
      porcao: produto.porcao,
      observacao: produto.observacao,
    },
  ];

  return (
    <section className={styles.careersSection}>
      <h1 className={styles.title}>{produto.nome}</h1>

      <p className={styles.subtitle}>{produto.descricao}</p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={produto.imagem}
            alt={produto.nome}
            fill
            className={styles.image}
            quality={100}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.vagasTitle}>Informações do produto</h2>

          {accordions.map((item, index) => {
            const isActive = activeIndex.includes(index);

            return (
              <div key={index} className={styles.vagaBox}>
                <button
                  className={`${styles.vagaHeader} ${
                    isActive ? styles.headerActive : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.titulo}</span>
                  <span className={styles.icon}>{isActive ? "▲" : "▼"}</span>
                </button>

                {isActive && (
                  <div className={styles.vagaContent}>
                    {item.tipo === "texto" && (
                      <pre className={styles.preBlock}>{item.conteudo}</pre>
                    )}

                    {item.tipo === "nutricional" && (
                      <div className={styles.nutriContent}>
                        <p className={styles.nutriPorcao}>{item.porcao}</p>

                        <div className={styles.nutriGrid}>
                          {item.conteudo.map((nutri, i) => (
                            <div key={i} className={styles.nutriItem}>
                              <span className={styles.nutriTitulo}>
                                {nutri.titulo}
                              </span>

                              <span className={styles.nutriQuantidade}>
                                {nutri.quantidade}
                              </span>

                              <span className={styles.nutriVD}>{nutri.vd}</span>
                            </div>
                          ))}
                        </div>

                        <p className={styles.nutriObs}>{item.observacao}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
