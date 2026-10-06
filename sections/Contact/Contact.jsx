import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import { contact } from '@/lib/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Section id="contato" title="Contato" last>
      <p className={styles.contactText}>
        Tem uma vaga ou um projeto em mente? Respondo em até um dia útil.
      </p>
      <div className={styles.contactActions}>
        <Button href={contact.resume} newTab>
          Ver currículo
        </Button>
        <Button href={`mailto:${contact.email}`} variant="secondary">
          <span className="srOnly">Enviar e-mail para</span> {contact.email}
        </Button>
      </div>
    </Section>
  );
}
