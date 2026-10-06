// Curva e variantes de animação compartilhadas (valores do handoff)
export const EASE_OUT = [0.2, 0.7, 0.2, 1];

// Sobe `distance` px e aparece; com movimento reduzido a troca é instantânea
export function fadeUp({ distance, duration, reduce }) {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration, ease: EASE_OUT },
    },
  };
}
