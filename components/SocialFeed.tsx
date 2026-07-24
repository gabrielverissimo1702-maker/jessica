"use client";

import { useState } from "react";
import styles from "./SocialFeed.module.css";

const results = [
  {
    image: "/images/resultado-capilar-01.jpeg",
    title: "Caso 01",
    description: "Comparativo visual da evolução capilar durante o acompanhamento.",
    alt: "Comparativo antes e depois de evolução capilar do caso 01",
  },
  {
    image: "/images/resultado-capilar-02.jpeg",
    title: "Caso 02",
    description: "Registro de densidade aparente e cobertura capilar ao longo do protocolo.",
    alt: "Comparativo antes e depois de evolução capilar do caso 02",
  },
];

function ChevronIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      {direction === "previous" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

export function SocialFeed() {
  const [current, setCurrent] = useState(0);
  const activeResult = results[current];

  const goTo = (index: number) => {
    setCurrent((index + results.length) % results.length);
  };

  return (
    <div className={styles.resultsViewer}>
      <div className={styles.stage}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.previous}`}
          onClick={() => goTo(current - 1)}
          aria-label="Ver resultado anterior"
        >
          <ChevronIcon direction="previous" />
        </button>

        <figure className={styles.figure}>
          <div className={styles.imageFrame}>
            <img src={activeResult.image} alt={activeResult.alt} />
          </div>
          <figcaption className={styles.caption}>
            <p>{activeResult.title}</p>
            <span>{activeResult.description}</span>
          </figcaption>
        </figure>

        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => goTo(current + 1)}
          aria-label="Ver próximo resultado"
        >
          <ChevronIcon direction="next" />
        </button>
      </div>

      <div className={styles.thumbnails} aria-label="Selecionar resultado">
        {results.map((result, index) => (
          <button
            key={result.image}
            type="button"
            className={index === current ? styles.activeThumbnail : undefined}
            onClick={() => goTo(index)}
            aria-label={`Ver ${result.title}`}
            aria-current={index === current ? "true" : undefined}
          >
            <img src={result.image} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
