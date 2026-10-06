import { render, screen, within } from '@testing-library/react';
import { contact } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import SocialLinks from './SocialLinks';

describe('SocialLinks', () => {
  it('lista GitHub, LinkedIn e e-mail com nomes acessíveis', () => {
    render(<SocialLinks />);
    const list = screen.getByRole('list', { name: 'Redes e contato' });

    expect(within(list).getByRole('link', { name: 'GitHub (abre em nova aba)' })).toHaveAttribute(
      'href',
      siteConfig.links.github,
    );
    expect(
      within(list).getByRole('link', { name: 'LinkedIn (abre em nova aba)' }),
    ).toHaveAttribute('href', siteConfig.links.linkedin);
    expect(within(list).getByRole('link', { name: 'Enviar e-mail' })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    );
  });
});
