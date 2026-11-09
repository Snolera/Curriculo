// Conteúdo das seções. TODO: substituir os placeholders do handoff pelos dados reais.

export const intro = 'Construo interfaces acessíveis e rápidas para a web.';

// Imagens: 1280×800 (16:10) em WebP, em public/projetos/
const frontEndStudies = [
  {
    title: 'Clima',
    slot: 'screenshot · app de clima',
    image: '/projetos/clima.webp',
    alt: 'Tela do site mostrando o clima da cidade selecionada',
    problem: 'Saber o clima da cidade que você vai visitar.',
    decision:
      'Usei HTML, CSS e JavaScript puros para criar a interface; o objetivo principal era o consumo da API.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    live: 'https://snolera.github.io/appclima-js/',
    code: 'https://github.com/Snolera/appclima-js',
  },
  {
    title: 'Restaurante',
    slot: 'screenshot · landing page',
    image: '/projetos/restaurante.webp',
    alt: 'Landing page de um restaurante para divulgação',
    problem: 'Fazer com que os clientes encontrem o restaurante on-line.',
    decision:
      'No treino de React, criei uma validação de formulários em JavaScript, respeitando a responsividade.',
    tags: ['React', 'CSS Modules', 'JavaScript'],
    live: 'https://snolera.github.io/restaurante-landing-page/',
    code: 'https://github.com/Snolera/restaurante-landing-page',
  },
  {
    title: 'Dev.Web',
    slot: 'screenshot · landing page',
    image: '/projetos/agencia.webp',
    alt: 'Landing page de uma agência de web design',
    problem: 'Landing page responsiva para uma agência de web design e desenvolvimento web.',
    decision:
      'Usei React para criar a interface da landing page, CSS Modules para estilizar e Motion para as animações.',
    tags: ['React', 'CSS Modules', 'JavaScript', 'Motion'],
    live: 'https://portfolio-2-steel-omega.vercel.app/',
    code: 'https://github.com/Snolera/portfolio-2',
  },
];

const fullStackProjects = [
  {
    title: 'Bolos da Edna',
    slot: 'screenshot · dashboard',
    image: '/projetos/bolos-da-edna.webp',
    alt: 'Sistema interno de controle de produção da confeitaria Bolos da Edna',
    problem: 'Dashboard de controle de produção.',
    decision:
      'Usei um banco de dados SQL (PostgreSQL no Supabase) para guardar todas as tabelas. Assim pude controlar a matéria-prima gasta por bolo, na produção do dia e no mês.',
    tags: ['Next.js', 'PostgreSQL', 'CSS Modules', 'JavaScript', 'RLS', 'Motion', 'Zod'],
    live: 'https://bolosdaedna-v2.vercel.app/',
    code: 'https://github.com/Snolera/BolosDaEdna',
  },
];

const clientProjects = [
  {
    title: 'Welinton Carmelo',
    slot: 'screenshot · landing page',
    image: '/projetos/welinton-carmelo.webp',
    alt: 'Landing page de portfólio do videomaker Welinton Carmelo',
    problem: 'Portfólio de um videomaker mobile.',
    decision:
      'O cliente queria apresentar o trabalho de forma mais profissional. A solução foi uma landing page simples em Next.js, com galeria de vídeos hospedada no Vercel Blob.',
    tags: ['Next.js', 'React', 'JavaScript', 'CSS Modules', 'Motion'],
    live: 'https://www.welintoncarmelo.com.br/',
    code: 'https://github.com/Snolera/eucarmelo',
  },
];

// Grupos das abas da seção Projetos; grupo vazio mostra "Em breve"
export const projectGroups = [
  { id: 'estudos', label: 'Front-end', projects: frontEndStudies },
  { id: 'fullstack', label: 'Front-end & Back-end', projects: fullStackProjects },
  { id: 'clientes', label: 'Clientes', projects: clientProjects },
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
  resume: 'https://www.linkedin.com/in/yuri-santana-2b3551163/',
};
