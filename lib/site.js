// Fonte única dos dados do site (metadata, JSON-LD, sitemap). TODO: links ainda são placeholder.
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, ''),
  name: 'Yuri Santana',
  role: 'Desenvolvedor júnior',
  title: 'Yuri Santana — Desenvolvedor júnior',
  description:
    'Portfólio de Yuri Santana, Desenvolvedor júnior: projetos com Next.js, React e CSS, com foco em performance e acessibilidade.',
  locale: 'pt_BR',
  links: {
    github: 'https://github.com/Snolera',
    linkedin: 'https://www.linkedin.com/in/seu-usuario',
  },
};
