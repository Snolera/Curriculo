import { render, screen, within } from '@testing-library/react';
import ProjectCard from './ProjectCard';

const project = {
  title: 'Rota Verde',
  slot: 'screenshot · app de trilhas',
  alt: 'Tela do Rota Verde com mapa de trilhas',
  problem: 'Encontra trilhas próximas.',
  decision: 'Usei React Query pelo cache.',
  tags: ['React', 'TypeScript'],
  live: 'https://rotaverde.exemplo.com',
  code: 'https://github.com/exemplo/rota-verde',
};

describe('ProjectCard', () => {
  it('usa o título (h3) como link principal para o projeto ao vivo', () => {
    render(<ProjectCard project={project} />);
    const heading = screen.getByRole('heading', { level: 3, name: /Rota Verde/ });
    expect(within(heading).getByRole('link')).toHaveAttribute('href', project.live);
  });

  it('sem imagem, mostra o placeholder com descrição acessível', () => {
    render(<ProjectCard project={project} />);
    const preview = screen.getByRole('img', { name: project.alt });
    expect(preview.tagName).toBe('DIV');
  });

  it('com imagem, renderiza <img> com o alt do projeto', () => {
    render(<ProjectCard project={{ ...project, image: '/projetos/rota-verde.webp' }} />);
    const img = screen.getByRole('img', { name: project.alt });
    expect(img.tagName).toBe('IMG');
    expect(img.getAttribute('src')).toContain('rota-verde.webp');
  });

  it('lista as tecnologias', () => {
    render(<ProjectCard project={project} />);
    const list = screen.getByRole('list', { name: 'Tecnologias' });
    expect(within(list).getAllByRole('listitem')).toHaveLength(2);
  });

  it('tem links "Ver ao vivo" e "Código" com nome descritivo', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole('link', { name: /^Ver ao vivo — Rota Verde/ })).toHaveAttribute(
      'href',
      project.live,
    );
    expect(screen.getByRole('link', { name: /^Código — Rota Verde/ })).toHaveAttribute(
      'href',
      project.code,
    );
  });

  it('não aninha links', () => {
    const { container } = render(<ProjectCard project={project} />);
    expect(container.querySelectorAll('a a')).toHaveLength(0);
  });
});
