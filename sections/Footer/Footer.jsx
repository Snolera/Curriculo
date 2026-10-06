import { siteConfig } from '@/lib/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Feito com Next.js e CSS Modules · © {new Date().getFullYear()} {siteConfig.name}
    </footer>
  );
}
