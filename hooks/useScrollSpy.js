'use client';

import { useEffect, useState } from 'react';

// Seção ativa = a última cujo topo passou da linha (35% da viewport); no fim da página, a última.
// Passe `ids` como constante fora do componente para não recriar o listener a cada render.
export function useScrollSpy(ids, offset = 0.35) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const line = window.innerHeight * offset;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActive(atBottom ? ids[ids.length - 1] : current);
    };

    // requestAnimationFrame: no máximo um cálculo por frame, mesmo com muitos eventos de scroll
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [ids, offset]);

  return active;
}
