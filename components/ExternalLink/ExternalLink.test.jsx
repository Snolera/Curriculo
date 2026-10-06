import { render, screen } from '@testing-library/react';
import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  it('abre em nova aba com segurança e avisa o leitor de tela', () => {
    render(<ExternalLink href="https://exemplo.com">Exemplo</ExternalLink>);
    const link = screen.getByRole('link', { name: 'Exemplo (abre em nova aba)' });
    expect(link).toHaveAttribute('href', 'https://exemplo.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
