import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Section from '@/components/Section/Section';
import { projects } from '@/lib/content';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <ul className={styles.projectsList}>
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
