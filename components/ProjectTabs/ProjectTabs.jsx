'use client';

import { useId, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { fadeUp } from '@/lib/motion';
import styles from './ProjectTabs.module.css';

// Tecla → índice da próxima aba (com volta ao início/fim)
const KEY_TO_INDEX = {
  ArrowRight: (i, total) => (i + 1) % total,
  ArrowLeft: (i, total) => (i - 1 + total) % total,
  Home: () => 0,
  End: (_, total) => total - 1,
};

// Abas (padrão ARIA tabs): troca o grupo de projetos sem sair da seção
export default function ProjectTabs({ groups }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const reduce = useReducedMotion();
  const baseId = useId();
  const variants = fadeUp({ distance: 8, duration: 0.35, reduce });

  const handleKeyDown = (event, index) => {
    const next = KEY_TO_INDEX[event.key];
    if (!next) return;
    event.preventDefault();
    const nextIndex = next(index, groups.length);
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Categorias de projetos" className={styles.tabList}>
        {groups.map((group, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={group.id}
              ref={(el) => (tabRefs.current[index] = el)}
              type="button"
              role="tab"
              id={`${baseId}-tab-${group.id}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${group.id}`}
              tabIndex={isActive ? 0 : -1}
              className={isActive ? `${styles.tab} ${styles['tab--active']}` : styles.tab}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className={styles.tabPill}>{group.label}</span>
            </button>
          );
        })}
      </div>

      {/* Todos os painéis ficam no HTML (SEO); os inativos só recebem `hidden` */}
      {groups.map((group, index) => {
        const isActive = index === activeIndex;
        const isEmpty = group.projects.length === 0;
        return (
          <div
            key={group.id}
            role="tabpanel"
            id={`${baseId}-panel-${group.id}`}
            aria-labelledby={`${baseId}-tab-${group.id}`}
            hidden={!isActive}
            tabIndex={isEmpty ? 0 : undefined} // painel sem links precisa ser focável
          >
            {/* initial={false}: o painel inicial não repete o reveal da seção */}
            <motion.div
              variants={variants}
              initial={false}
              animate={isActive ? 'visible' : 'hidden'}
            >
              {isEmpty ? (
                <p className={styles.empty}>Em breve</p>
              ) : (
                <ul className={styles.projectsList}>
                  {group.projects.map((project) => (
                    <li key={project.title}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
