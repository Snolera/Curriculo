import { siteConfig } from '@/lib/site';
import About from '@/sections/About/About';
import Contact from '@/sections/Contact/Contact';
import Education from '@/sections/Education/Education';
import Footer from '@/sections/Footer/Footer';
import Header from '@/sections/Header/Header';
import Projects from '@/sections/Projects/Projects';
import styles from './page.module.css';

// JSON-LD: diz ao Google que a página representa uma pessoa
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Header />

      {/* Coluna direita: footer fica fora do main para ser o landmark "contentinfo" */}
      <div className={styles.content}>
        <main id="conteudo" tabIndex={-1} className={styles.main}>
          <About />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
