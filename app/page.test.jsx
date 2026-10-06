import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renderiza o main com id "conteudo" e focável pelo skip link', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toHaveAttribute('id', 'conteudo');
    expect(main).toHaveAttribute('tabindex', '-1');
  });

  it('tem exatamente um h1, com o nome', () => {
    render(<Home />);
    const [h1, ...rest] = screen.getAllByRole('heading', { level: 1 });
    expect(rest).toHaveLength(0);
    expect(h1).toHaveTextContent('Yuri Santana');
  });

  it('não pula níveis de heading', () => {
    const { container } = render(<Home />);
    const levels = [...container.querySelectorAll('h1, h2, h3, h4, h5, h6')].map((h) =>
      Number(h.tagName[1]),
    );
    levels.forEach((level, i) => {
      if (i > 0) expect(level).toBeLessThanOrEqual(levels[i - 1] + 1);
    });
  });

  it('renderiza as seções da coluna direita como regiões nomeadas', () => {
    render(<Home />);
    ['Sobre', 'Projetos', 'Formação', 'Contato'].forEach((name) => {
      expect(screen.getByRole('region', { name })).toBeInTheDocument();
    });
  });

  it('tem rodapé fora do main (landmark contentinfo)', () => {
    render(<Home />);
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Yuri Santana');
  });
});
