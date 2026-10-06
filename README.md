# Portfólio — Yuri Santana

Portfólio pessoal de **Yuri Santana**, desenvolvedor Front-End júnior. Página única com apresentação, projetos, formação e contato, construída com foco em **performance, acessibilidade e SEO**.

🔗 **Site:** _em breve_ <!-- TODO: link da Vercel -->

<!-- TODO: print do site (ex.: public/preview.png)
![Prévia do portfólio](public/preview.png)
-->

## Tecnologias

- [Next.js](https://nextjs.org/) (App Router) + [React](https://react.dev/)
- JavaScript
- CSS Modules, com variáveis globais (design tokens)
- [Motion](https://motion.dev/) para animações
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) para testes
- Hospedagem na [Vercel](https://vercel.com/)

## Destaques

- **SEO:** HTML semântico, metadata com Open Graph, dados estruturados (JSON-LD), `sitemap.xml` e `robots.txt`.
- **Acessibilidade:** navegação por teclado, foco visível, skip link, contraste AA e respeito ao `prefers-reduced-motion`.
- **Performance:** `next/image` e `next/font` (sem layout shift), animações só com `transform` e `opacity`.
- **Responsivo:** layout em duas colunas no desktop e coluna única no mobile.
- **Testes:** componentes e seções testados com Vitest e React Testing Library.

## Como rodar

```bash
git clone https://github.com/Snolera/<nome-do-repositorio>.git
cd <nome-do-repositorio>
npm install
cp .env.example .env.local   # ajuste a URL do site
npm run dev                  # http://localhost:3000
```

| Script          | O que faz                   |
| --------------- | --------------------------- |
| `npm run dev`   | Servidor de desenvolvimento |
| `npm run build` | Build de produção           |
| `npm start`     | Serve o build               |
| `npm test`      | Roda os testes              |
| `npm run lint`  | ESLint                      |

## Variáveis de ambiente

| Variável               | Uso                                                            |
| ---------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública, usada em canonical, Open Graph, sitemap e robots |

## Estrutura

```
app/          rotas, layout, metadata, sitemap e robots
components/   componentes reutilizáveis (X.jsx + X.module.css)
sections/     blocos da página (Sobre, Projetos, Formação, Contato)
hooks/        lógica reutilizável (useScrollSpy)
lib/          dados do site e conteúdo das seções
public/       arquivos estáticos (imagens, currículo)
```

## Contato

- GitHub: [@Snolera](https://github.com/Snolera)
- E-mail: [yuri.c.santana@gmail.com](mailto:yuri.c.santana@gmail.com)
