import Section from '@/components/Section/Section';
import { education } from '@/lib/content';
import styles from './Education.module.css';

export default function Education() {
  return (
    <Section id="formacao" title="Formação">
      <ul className={styles.educationList}>
        {education.map(({ course, institution, period }) => (
          <li key={course} className={styles.educationItem}>
            <div className={styles.educationInfo}>
              <span className={styles.educationCourse}>{course}</span>
              <span className={styles.educationInstitution}>{institution}</span>
            </div>
            <span className={styles.educationPeriod}>{period}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
