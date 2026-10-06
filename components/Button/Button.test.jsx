import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renderiza um link na variante primária por padrão', () => {
    render(<Button href="/x">Ação</Button>);
    expect(screen.getByRole('link', { name: 'Ação' })).toHaveClass('button--primary');
  });

  it('aceita a variante secundária', () => {
    render(
      <Button href="/x" variant="secondary">
        Ação
      </Button>,
    );
    expect(screen.getByRole('link', { name: 'Ação' })).toHaveClass('button--secondary');
  });

  it('com newTab, abre em nova aba e avisa', () => {
    render(
      <Button href="/cv.pdf" newTab>
        Ver currículo
      </Button>,
    );
    expect(screen.getByRole('link', { name: 'Ver currículo (abre em nova aba)' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
});
