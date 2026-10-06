import Image from 'next/image';
import ExternalLink from '@/components/ExternalLink/ExternalLink';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { title, slot, image, alt, problem, decision, tags, live, code } = project;

  return (
    <article className={styles.card}>
      {image ? (
        // fill ocupa o container 16:10, que já reserva o espaço (sem layout shift)
        <div className={styles.cardPreview}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1023px) 100vw, 168px"
            className={styles.cardImage}
          />
        </div>
      ) : (
        // Placeholder listrado enquanto o projeto não tem screenshot
        <div className={styles.cardPreview} role="img" aria-label={alt}>
          <span className={styles.cardSlot} aria-hidden="true">
            {slot}
          </span>
        </div>
      )}

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>
          <ExternalLink href={live} className={styles.cardTitleLink}>
            <span>{title}</span>
            <span className={styles.cardArrow} aria-hidden="true">
              ↗
            </span>
          </ExternalLink>
        </h3>
        <p className={styles.cardProblem}>{problem}</p>
        <p className={styles.cardDecision}>{decision}</p>

        <ul className={styles.cardTags} aria-label="Tecnologias">
          {tags.map((tag) => (
            <li key={tag} className={styles.cardTag}>
              {tag}
            </li>
          ))}
        </ul>

        {/* Links irmãos (nunca aninhados); o sr-only diferencia "Código" de cada card */}
        <div className={styles.cardLinks}>
          <ExternalLink href={live} className={styles.cardLink}>
            Ver ao vivo <span className="srOnly">— {title}</span>
          </ExternalLink>
          <ExternalLink href={code} className={styles.cardLink}>
            Código <span className="srOnly">— {title}</span>
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}
