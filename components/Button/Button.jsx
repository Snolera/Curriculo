import ExternalLink from '@/components/ExternalLink/ExternalLink';
import styles from './Button.module.css';

// Link com aparência de botão: navega, então é <a> e não <button>
export default function Button({ href, variant = 'primary', newTab = false, children }) {
  const className = `${styles.button} ${styles[`button--${variant}`]}`;

  if (newTab) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
