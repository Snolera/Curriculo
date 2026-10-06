import Section from '@/components/Section/Section';
import styles from './About.module.css';

// TODO: texto placeholder do handoff; trocar pelo seu
export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <p className={styles.aboutText}>
        Gosto de construir interfaces que <span className={styles.aboutHighlight}>parecem simples</span>{' '}
        — formulários que não frustram, dashboards que se leem num relance e páginas que carregam
        rápido até em 3G. Trabalho principalmente com{' '}
        <span className={styles.aboutHighlight}>React, Next, JavaScript e CSS moderno</span>, sempre com
        acessibilidade no checklist. Estou buscando minha{' '}
        <span className={styles.aboutHighlight}>primeira vaga como Desenvoledor júnior</span>, em um
        time onde eu possa aprender com code review e entregar coisas reais.
      </p>
    </Section>
  );
}
