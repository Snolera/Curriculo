'use client';

import { motion, useReducedMotion } from 'motion/react';
import { fadeUp } from '@/lib/motion';
import styles from './Section.module.css';

// Seção nomeada pelo próprio h2 (vira landmark "region") com reveal ao entrar na tela
export default function Section({ id, title, last = false, children }) {
  const reduce = useReducedMotion();
  const titleId = `t-${id}`;
  const className = last ? `${styles.section} ${styles['section--last']}` : styles.section;

  // Reveal uma vez só, quando 5% da seção passa da linha a 10% do fim da viewport
  const trigger = reduce
    ? { animate: 'visible' }
    : {
        whileInView: 'visible',
        viewport: { once: true, margin: '0px 0px -10% 0px', amount: 0.05 },
      };

  return (
    <motion.section
      id={id}
      aria-labelledby={titleId}
      className={className}
      variants={fadeUp({ distance: 16, duration: 0.65, reduce })}
      initial="hidden"
      {...trigger}
    >
      <h2 id={titleId} className={styles.sectionTitle}>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
