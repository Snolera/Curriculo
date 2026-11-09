import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectTabs from './ProjectTabs';

const project = (title) => ({
  title,
  slot: 'screenshot',
  alt: `Tela do ${title}`,
  problem: 'Problema.',
  decision: 'Decisão.',
  tags: ['React'],
  live: `https://${title.toLowerCase()}.exemplo.com`,
  code: `https://github.com/exemplo/${title.toLowerCase()}`,
});

const groups = [
  { id: 'estudos', label: 'Estudos Front-end', projects: [project('Clima'), project('Dev')] },
  { id: 'fullstack', label: 'Front-end & Back-end', projects: [project('Api')] },
  { id: 'clientes', label: 'Clientes', projects: [] },
];

const visiblePanel = () => screen.getByRole('tabpanel');

describe('ProjectTabs', () => {
  it('renderiza um tablist nomeado com uma aba por grupo', () => {
    render(<ProjectTabs groups={groups} />);
    const tablist = screen.getByRole('tablist', { name: 'Categorias de projetos' });
    const tabs = within(tablist).getAllByRole('tab');
    expect(tabs.map((tab) => tab.textContent)).toEqual([
      'Estudos Front-end',
      'Front-end & Back-end',
      'Clientes',
    ]);
  });

  it('começa na primeira aba, com o painel ligado a ela', () => {
    render(<ProjectTabs groups={groups} />);
    const tab = screen.getByRole('tab', { name: 'Estudos Front-end' });
    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(visiblePanel()).toHaveAttribute('id', tab.getAttribute('aria-controls'));
    expect(visiblePanel()).toHaveAccessibleName('Estudos Front-end');
    expect(within(visiblePanel()).getAllByRole('article')).toHaveLength(2);
  });

  it('só a aba ativa entra no Tab do teclado (roving tabindex)', () => {
    render(<ProjectTabs groups={groups} />);
    const [first, ...rest] = screen.getAllByRole('tab');
    expect(first).toHaveAttribute('tabindex', '0');
    rest.forEach((tab) => expect(tab).toHaveAttribute('tabindex', '-1'));
  });

  it('mantém todos os projetos no HTML (painéis inativos com hidden) para SEO', () => {
    const { container } = render(<ProjectTabs groups={groups} />);
    const panels = container.querySelectorAll('[role="tabpanel"]');
    expect(panels).toHaveLength(3);
    expect(panels[1]).toHaveAttribute('hidden');
    expect(container.querySelectorAll('article')).toHaveLength(3);
  });

  it('troca de painel ao clicar em outra aba', async () => {
    const user = userEvent.setup();
    render(<ProjectTabs groups={groups} />);
    await user.click(screen.getByRole('tab', { name: 'Front-end & Back-end' }));
    expect(screen.getByRole('tab', { name: 'Front-end & Back-end' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'Estudos Front-end' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(within(visiblePanel()).getByRole('heading', { name: /Api/ })).toBeInTheDocument();
  });

  it('mostra "Em breve" em grupo sem projetos', async () => {
    const user = userEvent.setup();
    render(<ProjectTabs groups={groups} />);
    await user.click(screen.getByRole('tab', { name: 'Clientes' }));
    expect(visiblePanel()).toHaveTextContent('Em breve');
    expect(within(visiblePanel()).queryByRole('article')).not.toBeInTheDocument();
  });

  it('setas, Home e End movem o foco e ativam a aba (com volta ao início)', () => {
    render(<ProjectTabs groups={groups} />);
    const [first, second, third] = screen.getAllByRole('tab');

    fireEvent.keyDown(first, { key: 'ArrowRight' });
    expect(second).toHaveFocus();
    expect(second).toHaveAttribute('aria-selected', 'true');

    fireEvent.keyDown(second, { key: 'End' });
    expect(third).toHaveFocus();

    fireEvent.keyDown(third, { key: 'ArrowRight' });
    expect(first).toHaveFocus();

    fireEvent.keyDown(first, { key: 'ArrowLeft' });
    expect(third).toHaveFocus();

    fireEvent.keyDown(third, { key: 'Home' });
    expect(first).toHaveFocus();
    expect(first).toHaveAttribute('aria-selected', 'true');
  });
});
