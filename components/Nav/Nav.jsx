'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import styles from './Nav.module.css';

const NAV_ITEMS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
];

// Contato não está na nav: quando ele está na tela, "Formação" continua ativo
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Nav() {
  const active = useScrollSpy(SECTION_IDS);

  return (
    <nav aria-label="Seções da página" className={styles.nav}>
      <ul className={styles.navList}>
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={isActive ? `${styles.navLink} ${styles['navLink--active']}` : styles.navLink}
              >
                <span className={styles.navLine} aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
