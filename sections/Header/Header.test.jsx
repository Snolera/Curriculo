import { render, screen } from '@testing-library/react';
import { intro } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import Header from './Header';

describe('Header', () => {
  it('é o banner da página com nome (h1), cargo e apresentação', () => {
    render(<Header />);
    const banner = screen.getByRole('banner');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(siteConfig.name);
    expect(banner).toHaveTextContent(siteConfig.role);
    expect(banner).toHaveTextContent(intro);
  });

  it('cargo é parágrafo, não heading', () => {
    render(<Header />);
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });

  it('contém a navegação e os links de contato', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: 'Seções da página' })).toBeInTheDocument();
    expect(screen.getByRole('list', { name: 'Redes e contato' })).toBeInTheDocument();
  });
});
