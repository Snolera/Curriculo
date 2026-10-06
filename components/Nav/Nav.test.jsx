import { render, screen, within } from '@testing-library/react';
import Nav from './Nav';

describe('Nav', () => {
  it('é uma navegação nomeada com links para as seções', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation', { name: 'Seções da página' });
    const links = within(nav).getAllByRole('link');
    expect(links.map((a) => a.getAttribute('href'))).toEqual(['#sobre', '#projetos', '#formacao']);
  });

  it('marca só a seção ativa com aria-current', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('link', { name: 'Projetos' })).not.toHaveAttribute('aria-current');
  });
});
