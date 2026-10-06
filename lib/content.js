// Conteúdo das seções. TODO: substituir os placeholders do handoff pelos dados reais.



export const intro = 'Construo interfaces acessíveis e rápidas para a web.';

export const projects = [
  {
    title: 'Clima',
    slot: 'screenshot · app de climas',
    image: '/projetos/clima-webp.png', // arquivo em public/projetos/clima.webp (16:10)
    alt: 'Tela do WebSite mostrando o clima da cidade selecionada',
    problem: 'Saber o clima da cidade da qual irá visitar.',
    decision: 'Usei HTML, CSS e JavaScript puros para a criação da interface, o objetivo principal era a consumação da API',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    live: 'https://snolera.github.io/appclima-js/',
    code: 'https://github.com/Snolera/appclima-js',
  },
  {
    title: 'Restaurante',
    slot: 'screenshot · LadingPage',
    image: '/projetos/restaurante.png', // arquivo em public/projetos/restaurante.webp (16:10)
    alt: 'Site em landing page de um restaurante para divulgação.',
    problem: 'Fazer com que clientes possam encontrar o restaurante  de forma online.',
    decision: 'No treino de React, pude criar uma validação de formularios via JavaScript respeitando a responsividade.',
    tags: ['React', 'CSS Module', 'JavaScript'],
    live: 'https://snolera.github.io/restaurante-landing-page/',
    code: 'https://github.com/Snolera/restaurante-landing-page',
  },
  {
    title: 'Dev.Web',
    slot: 'screenshot · landing page',
    image: '/projetos/agencia.png',
    alt: 'Landing page de uma agencia de web design',
    problem: 'Landing responsiva para uma agencia de web design e desenvolvedor web.',
    decision: 'Utilizei React.JS para criar a interaface da lading page, juntamente com CSS Modules para estilizar. Frame-motion para animações.',
    tags: ['React.JS', 'CSS Module', 'JavaScript', 'Motion'],
    live: 'https://portfolio-2-steel-omega.vercel.app/',
    code: 'https://github.com/Snolera/portfolio-2',
  },
  //{
  //  title: 'commit-pt',
  //  slot: 'screenshot · terminal / CLI',
  //  alt: 'Terminal executando o commit-pt e sugerindo mensagens de commit em português',
  //  problem: 'CLI que sugere mensagens de commit padronizadas a partir do diff.',
  // decision: 'Escrevi testes com Vitest antes do parser — pegou 3 bugs de borda.',
  //  tags: ['Node.js', 'TypeScript', 'Vitest', 'CLI'],
  //  live: 'https://www.npmjs.com/package/commit-pt',
  //  code: 'https://github.com/seu-usuario/commit-pt',
  //},
];

export const education = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade Anhanguera',
    period: '2026 — 2028',
  },
  {
    course: 'Desenvolvedor Web',
    institution: 'ETEC Parque Belém',
    period: '2010 - 2012',
  },
];

export const contact = {
  email: 'yuri.c.santana@gmail.com',
  resume: '/curriculo-yuri-santana.pdf',
};
