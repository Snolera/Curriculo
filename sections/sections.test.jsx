import { render, screen, within } from '@testing-library/react';
import { contact, education, projectGroups } from '@/lib/content';
import About from './About/About';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Projects from './Projects/Projects';

describe('About', () => {
  it('é uma região "Sobre" com âncora #sobre', () => {
    render(<About />);
    expect(screen.getByRole('region', { name: 'Sobre' })).toHaveAttribute('id', 'sobre');
  });
});

describe('Projects', () => {
  it('é uma região "Projetos" com h2 só para leitores de tela', () => {
    render(<Projects />);
    const region = screen.getByRole('region', { name: 'Projetos' });
    expect(region).toHaveAttribute('id', 'projetos');
    expect(within(region).getByRole('heading', { level: 2, name: 'Projetos' })).toHaveClass(
      'srOnly',
    );
  });

  it('tem uma aba por grupo e mostra os projetos do primeiro', () => {
    render(<Projects />);
    expect(screen.getAllByRole('tab')).toHaveLength(projectGroups.length);
    expect(within(screen.getByRole('tabpanel')).getAllByRole('article')).toHaveLength(
      projectGroups[0].projects.length,
    );
  });
});

describe('Education', () => {
  it('lista cada curso com instituição e período', () => {
    render(<Education />);
    const region = screen.getByRole('region', { name: 'Formação' });
    const items = within(region).getAllByRole('listitem');
    expect(items).toHaveLength(education.length);
    expect(items[0]).toHaveTextContent(education[0].course);
    expect(items[0]).toHaveTextContent(education[0].period);
  });
});

describe('Contact', () => {
  it('tem CTA do LinkedIn e link de e-mail', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /Ver Linkedin/ })).toHaveAttribute(
      'href',
      contact.resume,
    );
    expect(screen.getByRole('link', { name: new RegExp(contact.email) })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    );
  });
});
