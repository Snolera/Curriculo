import ProjectTabs from '@/components/ProjectTabs/ProjectTabs';
import Section from '@/components/Section/Section';
import { projectGroups } from '@/lib/content';

// O h2 "Projetos" fica só para leitores de tela; as abas fazem o papel de título visual
export default function Projects() {
  return (
    <Section id="projetos" title="Projetos" hideTitle>
      <ProjectTabs groups={projectGroups} />
    </Section>
  );
}
