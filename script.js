const iconMap = {
  "Next.js 16": { slug: "nextdotjs", color: "111827", short: "NX" },
  "React 19": { slug: "react", color: "2C6636", short: "RC" },
  TypeScript: { slug: "typescript", color: "3178C6", short: "TS" },
  Prisma: { slug: "prisma", color: "111827", short: "PR" },
  Clerk: { src: "./media/icons/stack-clerk.svg", short: "CL" },
  "Upstash Redis": { slug: "upstash", color: "00E9A3", short: "UP" },
  "Cloudflare R2": { slug: "cloudflare", color: "F38020", short: "CF" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4", short: "TW" },
  Vite: { slug: "vite", color: "646CFF", short: "VT" },
  MapLibre: { src: "./media/icons/stack-maplibre.svg", short: "ML" },
  "deck.gl": { src: "./media/icons/stack-deckgl.svg", short: "DG" },
  zustand: { short: "ZU" },
  "Python 3.10+": { slug: "python", color: "3776AB", short: "PY" },
  Python: { slug: "python", color: "3776AB", short: "PY" },
  FastAPI: { slug: "fastapi", color: "009688", short: "FA" },
  Uvicorn: { short: "UV" },
  "JSONL/SQLite": { slug: "sqlite", color: "003B57", short: "SQ" },
  "Event store": { short: "ES" },
  unittest: { short: "UT" },
  Express: { slug: "express", color: "111827", short: "EX" },
  SQLite: { slug: "sqlite", color: "003B57", short: "SQ" },
  "Socket.io": { slug: "socketdotio", color: "111827", short: "SO" },
  Gemini: { slug: "googlegemini", color: "8E75B2", short: "GM" },
  "Node.js": { slug: "nodedotjs", color: "339933", short: "ND" },
  PostgreSQL: { slug: "postgresql", color: "4169E1", short: "PG" },
  Redis: { slug: "redis", color: "DC382D", short: "RD" },
  AbacatePay: { src: "./media/icons/stack-abacatepay.svg", short: "AB" },
  SEFAZ: { src: "./media/icons/stack-sefaz.svg", short: "SF" },
  Redmine: { slug: "redmine", color: "B32024", short: "RM" },
  Java: { slug: "openjdk", color: "111827", short: "JV" },
  AngularJS: { slug: "angular", color: "DD0031", short: "NG" },
  Git: { slug: "git", color: "F05032", short: "GT" },
  HTML: { slug: "html5", color: "E34F26", short: "HT" },
  CSS: { slug: "css3", color: "1572B6", short: "CS" },
  SQL: { short: "DB" },
  Vitest: { slug: "vitest", color: "6E9F18", short: "VT" },
  Vercel: { slug: "vercel", color: "111827", short: "VC" },
  GitHub: { slug: "github", color: "111827", short: "GH" }
};

const sharedHeroStacks = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Prisma",
  "Clerk",
  "Cloudflare R2",
  "Upstash Redis"
];

const sharedStackWall = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Node.js",
  "Python 3.10+",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Git",
  "Vercel",
  "Cloudflare R2",
  "FastAPI"
];

const localeContent = {
  pt: {
    meta: {
      htmlLang: "pt-BR",
      title: "Guilherme Bezzuoli Ramos | Portfólio",
      description:
        "Portfólio de Guilherme Bezzuoli Ramos: SaaS, automação, integrações e interfaces operacionais para produtos web."
    },
    nav: {
      projects: "Projetos",
      stack: "Negócio & Stack",
      contact: "Contato"
    },
    menu: {
      eyebrow: "Menu",
      home: "Início",
      feature: "Destaque",
      evidence: "Evidências",
      projects: "Projetos",
      stack: "Negócio & Stack",
      contact: "Contato",
      footer: "Disponível para produto, automação e processos."
    },
    hero: {
      eyebrow: "Portfólio técnico / GitHub Pages / 2026",
      title: "Produto, automação e interface com lastro técnico.",
      lede:
        "Sou <strong>Guilherme Bezzuoli Ramos</strong>, desenvolvedor full-stack com base em ERP, análise de processos, requisitos e desenvolvimento web. Meu trabalho mistura SaaS, integrações, automação e interface operacional para reduzir retrabalho e dar mais clareza ao negócio.",
      manifestoTitle: "Direção visual desta página",
      manifestoText:
        "Paleta inspirada no LeafDFe, com contraste seco, blocos estruturais e curvas que puxam para um modernismo brasileiro mais arquitetônico.",
      ctaProjects: "Ver projetos",
      ctaLeaf: "Ver LeafDFe",
      identity: ["23 anos", "Brasileiro", "Português fluente", "Inglês conversacional"],
      ribbonEyebrow: "Brasil / São Paulo",
      ribbonText:
        "Base local com repertório em ERP, processos, produto e operação web."
    },
    profile: {
      label: "Foto de perfil",
      role: "Full-stack para SaaS, ERP, processos e automação operacional.",
      meta: ["Brasil / São Paulo", "guilhermebezzuoli@gmail.com", "+55 11 94522-0435"],
      emailLabel: "Falar por e-mail",
      cvLabel: "Baixar CV",
      cvHref: "./CV-GuilhermeBezzuoliRamos.pdf"
    },
    panel: {
      kicker: "Projeto principal em produção",
      text:
        "SaaS fiscal para captura, manifestação, consulta e armazenamento de documentos eletrônicos, com checkout, API REST e operação multi-tenant."
    },
    feature: {
      eyebrow: "Case principal",
      title: "LeafDFe é o melhor retrato do tipo de produto que eu gosto de construir.",
      paragraph1:
        "O LeafDFe consolida frontend, backend, regras fiscais, autenticação, billing, armazenamento seguro e automações de operação em um único produto. No código local, a stack está organizada sobre <strong>Next.js 16</strong>, <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>Prisma</strong>, <strong>Clerk</strong>, <strong>Upstash Redis</strong> e <strong>Cloudflare R2</strong>.",
      paragraph2:
        "O foco do produto é tirar o fiscal do modo manual: consulta na SEFAZ, manifestação em lote, download de XML e DANFE, multiempresa, armazenamento em nuvem e checkout pronto para crescimento comercial.",
      cardTitle: "O que entra nesse case",
      cardItems: [
        "Integrações fiscais e rotinas SEFAZ",
        "Checkout e endurecimento de fluxo comercial",
        "Arquitetura multi-tenant e armazenamento seguro",
        "UI operacional para documentos, sincronização e auditoria"
      ],
      linkTitle: "Link público",
      linkNote: "Produto ao vivo com posicionamento SaaS para NF-e, CT-e e MDF-e."
    },
    evidence: {
      eyebrow: "Evidências visuais",
      title: "Produto real, atividade real, interface real.",
      copy: "LeafDFe em destaque, com recortes complementares de produto e atividade pública."
    },
    projectsSection: {
      eyebrow: "Projetos selecionados",
      title: "Quatro trabalhos que mostram produto, arquitetura e execução.",
      copy:
        "Alguns destes projetos vivem em ambientes privados ou internos. Por isso, o foco aqui está no problema resolvido, na stack e nas decisões de implementação."
    },
    businessSection: {
      eyebrow: "Negócio e processo",
      title: "Experiência aplicada em ERP, dados, requisitos e fluxo operacional."
    },
    stackSection: {
      eyebrow: "Stack validada no workspace",
      title: "Tecnologias que aparecem de verdade nos projetos acima."
    },
    contactSection: {
      eyebrow: "Contato",
      title: "Aberto para conversar sobre produto, frontend, integrações e automação.",
      copy:
        "Se fizer sentido para a vaga, o melhor caminho é falar comigo por e-mail, telefone ou olhar meus perfis e materiais públicos. O portfólio foi montado para ser direto e fácil de compartilhar em processo seletivo."
    },
    footer: {
      copy: "Portfolio estático pronto para publicar no GitHub Pages."
    },
    langToggle: {
      label: "EN / Intl",
      icon: "./media/anglo-flag-blend.svg",
      ariaLabel: "Ver portfolio em inglês"
    },
    aria: {
      topNav: "Navegação principal",
      sideNav: "Menu lateral",
      identity: "Resumo profissional",
      countryFlag: "Bandeira do Brasil em interpretação vetorial brutalista",
      profileImage: "Foto de perfil de Guilherme Bezzuoli Ramos"
    },
    stats: [
      { value: "4", label: "projetos destacados" },
      { value: "ERP + SaaS", label: "negócio e produto" },
      { value: "2", label: "graduações em andamento" },
      { value: "PT-BR / EN", label: "idiomas de trabalho" }
    ],
    projects: [
      {
        title: "LeafDFe",
        tone: "brand",
        status: "Em produção",
        meta: "SaaS fiscal / Next.js + Prisma + integrações",
        summary:
          "Plataforma para captura, consulta, manifestação e armazenamento de DF-e, com billing, autenticação e operação multiempresa.",
        highlights: [
          "Automação SEFAZ para NF-e, CT-e e MDF-e.",
          "Checkout com AbacatePay, fluxo comercial endurecido e páginas públicas.",
          "Arquitetura multi-tenant com Clerk, Redis, Prisma e Cloudflare R2."
        ],
        stack: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Prisma",
          "Clerk",
          "Upstash Redis",
          "Cloudflare R2"
        ],
        links: [{ label: "Produto ao vivo", href: "https://www.leafdfe.com.br/" }]
      },
      {
        title: "War Room",
        tone: "paper",
        status: "Produto visual / geointelligence",
        meta: "Mapas interativos / Next.js + MapLibre + deck.gl",
        summary:
          "Aplicação web geopolítica com mapa interativo, timeline editorial, camadas de facções e APIs públicas de leitura.",
        highlights: [
          "Frontend com shell visual forte para leitura operacional.",
          "Camada server-side tipada pronta para trocar o backend in-memory por Postgres/PostGIS.",
          "Filtros, busca, timeline e painéis de detalhe integrados à experiência."
        ],
        stack: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "MapLibre",
          "deck.gl",
          "zustand"
        ],
        links: []
      },
      {
        title: "BetBot",
        tone: "ink",
        status: "Arquitetura algorítmica",
        meta: "Python / FastAPI / execução paper e live",
        summary:
          "Bot autônomo para prediction markets com arquitetura paper e live, controles de risco, persistência de eventos e endpoints operacionais.",
        highlights: [
          "Loop de arbitragem paper com scoring, risco e simulação de fills.",
          "Estrutura para market making com inventário, quote generation e supervisor.",
          "APIs para analytics, wallet, health e operação em tempo real."
        ],
        stack: ["Python 3.10+", "FastAPI", "Uvicorn", "JSONL/SQLite", "Event store", "unittest"],
        links: []
      },
      {
        title: "Dispatcher",
        tone: "accent",
        status: "Ferramenta interna de IA",
        meta: "React + Vite + Express + SQLite + Gemini",
        summary:
          "Sistema interno com geração de tickets, transcrição de áudio, integração com Redmine e ambientes beta e produção separados.",
        highlights: [
          "Frontend React 19 com identidade visual própria e operação em tempo real.",
          "Backend Express com autenticação, rate limit, Socket.io e persistência em SQLite.",
          "Fluxo orientado a processo interno com IA e integração corporativa."
        ],
        stack: ["React 19", "TypeScript", "Vite", "Express", "SQLite", "Socket.io", "Gemini"],
        links: []
      }
    ],
    galleryItems: [
      {
        label: "LeafDFe",
        title: "Dashboard fiscal com visão operacional",
        image: "./media/leaf-dashboard.png",
        alt: "Screenshot do dashboard do LeafDFe",
        fileHint: "leafdfe / dashboard"
      },
      {
        label: "LeafDFe",
        title: "Centralização de documentos fiscais",
        image: "./media/leaf-documentos.png",
        alt: "Screenshot da tela de documentos fiscais do LeafDFe",
        fileHint: "leafdfe / documentos"
      },
      {
        label: "LeafDFe",
        title: "Multiempresa e certificados digitais",
        image: "./media/leaf-multiempresas.png",
        alt: "Screenshot da tela de unidades e certificados do LeafDFe",
        fileHint: "leafdfe / multiempresa"
      },
      {
        label: "LeafDFe",
        title: "Relatórios fiscais e saídas utilizáveis",
        image: "./media/leaf-relatorios.png",
        alt: "Screenshot da tela de relatórios fiscais do LeafDFe",
        fileHint: "leafdfe / relatórios"
      },
      {
        label: "Dispatcher",
        title: "Identidade visual própria em produto interno",
        image: "./media/Screenshot_415.png",
        alt: "Screenshot da tela de login do Dispatcher",
        fileHint: "dispatcher / interface"
      },
      {
        label: "GitHub",
        title: "Conta gbezzuoli com volume e consistência",
        image: "./media/Screenshot_432.png",
        alt: "Screenshot de estatísticas de contribuições do GitHub gbezzuoli",
        fileHint: "github / gbezzuoli"
      },
      {
        label: "GitHub",
        title: "Linguagens mais presentes no histórico",
        image: "./media/Screenshot_433.png",
        alt: "Screenshot de linguagens mais usadas no GitHub",
        fileHint: "github / linguagens"
      }
    ],
    businessCards: [
      {
        title: "ERP, fluxo e regra de negócio",
        description:
          "Base prática em ERP e rotinas corporativas, conectando regra de negócio, operação, validação funcional e melhoria contínua de processo."
      },
      {
        title: "Dados, saídas e produtividade",
        description:
          "Experiência com SQL, PostgreSQL, exportações CSV, relatórios e saídas que ajudam conferência, tomada de decisão e redução de retrabalho."
      },
      {
        title: "Requisitos e documentação funcional",
        description:
          "Levanto necessidade, traduzo processo, documento comportamento esperado e ajudo a levar demanda do contexto de negócio até a entrega."
      },
      {
        title: "Formação híbrida",
        description:
          "Cursando Administração e Sistemas de Informação, com leitura técnica e visão de negócio no mesmo eixo para construir produto que faça sentido operacional."
      }
    ],
    stackGroups: [
      {
        label: "Frontend",
        items: ["React 19", "Next.js 16", "TypeScript", "Vite", "Tailwind CSS", "MapLibre", "deck.gl"]
      },
      {
        label: "Backend e dados",
        items: ["Node.js", "Express", "Python", "FastAPI", "Prisma", "SQLite", "PostgreSQL", "Redis"]
      },
      {
        label: "Plataforma e integrações",
        items: ["Clerk", "Cloudflare R2", "Socket.io", "AbacatePay", "SEFAZ", "Gemini", "Redmine"]
      }
    ],
    contactLinks: [
      {
        label: "E-mail",
        value: "guilhermebezzuoli@gmail.com",
        href: "mailto:guilhermebezzuoli@gmail.com",
        description: "Canal mais direto para entrevista, proposta ou conversa técnica.",
        newTab: false,
        tier: "primary"
      },
      {
        label: "Telefone",
        value: "+55 11 94522-0435",
        href: "tel:+5511945220435",
        description: "Contato direto para oportunidade, alinhamento rápido ou retorno.",
        newTab: false,
        tier: "primary"
      },
      {
        label: "GitHub / produtos",
        value: "github.com/ramosbezzu",
        href: "https://github.com/ramosbezzu",
        description: "Perfil útil para repositórios, produtos e código publicado com foco em entrega.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "GitHub / atividade",
        value: "github.com/gbezzuoli",
        href: "https://github.com/gbezzuoli",
        description: "Perfil que ajuda a mostrar atividade, contribuições e estatísticas de código.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Case principal",
        value: "leafdfe.com.br",
        href: "https://www.leafdfe.com.br/",
        description: "Produto público que concentra meu trabalho mais completo em SaaS operacional.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/gbzramos",
        href: "https://linkedin.com/in/gbzramos",
        description: "Perfil profissional para histórico, networking e contexto de carreira.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Currículo PT",
        value: "CV-GuilhermeBezzuoliRamos.pdf",
        href: "./CV-GuilhermeBezzuoliRamos.pdf",
        description: "Versão em português com histórico técnico e projetos.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Resume EN",
        value: "GuilhermeRamos-EN-CV.pdf",
        href: "./GuilhermeRamos-EN-CV.pdf",
        description: "Versão em inglês para candidatura internacional.",
        newTab: true,
        tier: "secondary"
      }
    ]
  },
  en: {
    meta: {
      htmlLang: "en",
      title: "Guilherme Bezzuoli Ramos | Portfolio",
      description:
        "Portfolio of Guilherme Bezzuoli Ramos: SaaS, workflow automation, integrations and operational interfaces for web products."
    },
    nav: {
      projects: "Projects",
      stack: "Business & Stack",
      contact: "Contact"
    },
    menu: {
      eyebrow: "Menu",
      home: "Home",
      feature: "Flagship",
      evidence: "Proof",
      projects: "Projects",
      stack: "Business & Stack",
      contact: "Contact",
      footer: "Available for product engineering, automation and workflow-heavy systems."
    },
    hero: {
      eyebrow: "Engineering portfolio / GitHub Pages / 2026",
      title: "Product engineering, workflow automation and interfaces with operational depth.",
      lede:
        "I'm <strong>Guilherme Bezzuoli Ramos</strong>, a full-stack developer with hands-on experience in ERP workflows, process analysis, requirements and web product delivery. My work combines SaaS, integrations, automation and operational UI to reduce friction and give teams clearer business flows.",
      manifestoTitle: "Visual direction",
      manifestoText:
        "A color system influenced by LeafDFe, using dry contrast, structural blocks and curves inspired by Brazilian modernism.",
      ctaProjects: "See projects",
      ctaLeaf: "Open LeafDFe",
      identity: ["23 years old", "Brazil-based", "Native Portuguese", "Conversational English"],
      ribbonEyebrow: "Brazil / Sao Paulo",
      ribbonText:
        "Brazil-based developer with hands-on experience in ERP operations, product delivery and business-facing web systems."
    },
    profile: {
      label: "Profile",
      role: "Full-stack builder for SaaS, business systems and workflow automation.",
      meta: ["Brazil / Sao Paulo", "guilhermebezzuoli@gmail.com", "+55 11 94522-0435"],
      emailLabel: "Email me",
      cvLabel: "Download resume",
      cvHref: "./GuilhermeRamos-EN-CV.pdf"
    },
    panel: {
      kicker: "Flagship product in production",
      text:
        "Tax SaaS for ingestion, manifestation, lookup and storage of electronic fiscal documents, with checkout, REST APIs and multi-tenant workflows."
    },
    feature: {
      eyebrow: "Flagship case",
      title: "LeafDFe is the clearest example of the kind of product I like to build.",
      paragraph1:
        "LeafDFe brings frontend, backend, tax workflows, authentication, billing, secure storage and operational automation into a single product. In the local codebase, the stack is centered on <strong>Next.js 16</strong>, <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>Prisma</strong>, <strong>Clerk</strong>, <strong>Upstash Redis</strong> and <strong>Cloudflare R2</strong>.",
      paragraph2:
        "The business goal is straightforward: take fiscal operations out of spreadsheets and inboxes. The product supports SEFAZ lookups, batch manifestation, XML and DANFE downloads, multi-company management, cloud storage and a checkout flow ready for commercial growth.",
      cardTitle: "What this case shows",
      cardItems: [
        "Tax integrations and SEFAZ-heavy workflows",
        "Checkout, acquisition pages and hardened commercial flow",
        "Multi-tenant architecture with secure document storage",
        "Operational UI for documents, sync status and auditability"
      ],
      linkTitle: "Public link",
      linkNote: "Live SaaS product for NF-e, CT-e and MDF-e workflows."
    },
    evidence: {
      eyebrow: "Visual proof",
      title: "Real product, real activity, real interface.",
      copy: "LeafDFe leads the section, with supporting proof from product work and public GitHub activity."
    },
    projectsSection: {
      eyebrow: "Selected work",
      title: "Four projects that show product thinking, architecture and delivery.",
      copy:
        "Some of these products live in private or internal environments. The focus here is the business problem, the implementation choices and the stack behind the delivery."
    },
    businessSection: {
      eyebrow: "Business context",
      title: "Hands-on experience with ERP workflows, data outputs, requirements and operational delivery."
    },
    stackSection: {
      eyebrow: "Validated stack",
      title: "Technologies that show up for real in the projects above."
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Open to conversations about product engineering, frontend, integrations and automation.",
      copy:
        "If there's a fit, the fastest path is email, phone or my public profiles. This portfolio was built to be direct, shareable and easy to scan during a hiring process."
    },
    footer: {
      copy: "Static portfolio, ready to deploy on GitHub Pages."
    },
    langToggle: {
      label: "PT-BR",
      icon: "./media/brazil-brutalist-flag.svg",
      ariaLabel: "Switch portfolio to Portuguese"
    },
    aria: {
      topNav: "Primary navigation",
      sideNav: "Sidebar navigation",
      identity: "Professional summary",
      countryFlag: "Brazil flag in a brutalist vector treatment",
      profileImage: "Profile photo of Guilherme Bezzuoli Ramos"
    },
    stats: [
      { value: "4", label: "featured projects" },
      { value: "ERP + SaaS", label: "business systems" },
      { value: "2", label: "degrees in progress" },
      { value: "PT-BR / EN", label: "working languages" }
    ],
    projects: [
      {
        title: "LeafDFe",
        tone: "brand",
        status: "Live product",
        meta: "Tax SaaS / Next.js + Prisma + integrations",
        summary:
          "Operational tax platform for ingestion, lookup, manifestation and storage of Brazilian electronic fiscal documents, with billing, authentication and multi-company workflows.",
        highlights: [
          "SEFAZ automation for NF-e, CT-e and MDF-e.",
          "AbacatePay checkout, hardened commercial flow and public acquisition pages.",
          "Multi-tenant architecture with Clerk, Redis, Prisma and Cloudflare R2."
        ],
        stack: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Prisma",
          "Clerk",
          "Upstash Redis",
          "Cloudflare R2"
        ],
        links: [{ label: "Live product", href: "https://www.leafdfe.com.br/" }]
      },
      {
        title: "War Room",
        tone: "paper",
        status: "Product UI / geointelligence",
        meta: "Interactive mapping / Next.js + MapLibre + deck.gl",
        summary:
          "Geopolitical web application with interactive maps, editorial timeline, faction layers and public-read APIs.",
        highlights: [
          "Frontend shell designed for operational reading and dense information.",
          "Typed server-side layer ready to evolve from in-memory data to Postgres/PostGIS.",
          "Filters, search, timeline and detail panels integrated into one experience."
        ],
        stack: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "MapLibre",
          "deck.gl",
          "zustand"
        ],
        links: []
      },
      {
        title: "BetBot",
        tone: "ink",
        status: "Algorithmic architecture",
        meta: "Python / FastAPI / paper and live execution",
        summary:
          "Autonomous prediction-markets bot with paper and live architecture, risk controls, event persistence and operational endpoints.",
        highlights: [
          "Paper arbitrage loop with scoring, risk logic and fill simulation.",
          "Foundation for market-making flows with inventory, quote generation and supervision.",
          "APIs for analytics, wallet, health checks and real-time operation."
        ],
        stack: ["Python 3.10+", "FastAPI", "Uvicorn", "JSONL/SQLite", "Event store", "unittest"],
        links: []
      },
      {
        title: "Dispatcher",
        tone: "accent",
        status: "Internal AI workflow tool",
        meta: "React + Vite + Express + SQLite + Gemini",
        summary:
          "Internal operations assistant with audio transcription, ticket generation, Redmine integration and separate beta and production environments.",
        highlights: [
          "React 19 frontend with a distinct visual identity for internal workflows.",
          "Express backend with authentication, rate limiting, Socket.io and SQLite persistence.",
          "Automation-oriented flow connecting internal requests, transcription and corporate tooling."
        ],
        stack: ["React 19", "TypeScript", "Vite", "Express", "SQLite", "Socket.io", "Gemini"],
        links: []
      }
    ],
    galleryItems: [
      {
        label: "LeafDFe",
        title: "Tax dashboard with operational visibility",
        image: "./media/leaf-dashboard.png",
        alt: "Screenshot of the LeafDFe dashboard",
        fileHint: "leafdfe / dashboard"
      },
      {
        label: "LeafDFe",
        title: "Centralized fiscal documents",
        image: "./media/leaf-documentos.png",
        alt: "Screenshot of the LeafDFe document list",
        fileHint: "leafdfe / documents"
      },
      {
        label: "LeafDFe",
        title: "Multi-company management and certificates",
        image: "./media/leaf-multiempresas.png",
        alt: "Screenshot of the LeafDFe units and certificates view",
        fileHint: "leafdfe / multi-company"
      },
      {
        label: "LeafDFe",
        title: "Fiscal reports and export-ready outputs",
        image: "./media/leaf-relatorios.png",
        alt: "Screenshot of LeafDFe reports",
        fileHint: "leafdfe / reports"
      },
      {
        label: "Dispatcher",
        title: "Own visual identity in an internal product",
        image: "./media/Screenshot_415.png",
        alt: "Screenshot of the Dispatcher login screen",
        fileHint: "dispatcher / interface"
      },
      {
        label: "GitHub",
        title: "gbezzuoli with visible contribution rhythm",
        image: "./media/Screenshot_432.png",
        alt: "Screenshot of GitHub contribution statistics for gbezzuoli",
        fileHint: "github / gbezzuoli"
      },
      {
        label: "GitHub",
        title: "Language mix across public history",
        image: "./media/Screenshot_433.png",
        alt: "Screenshot of most used languages on GitHub",
        fileHint: "github / languages"
      }
    ],
    businessCards: [
      {
        title: "ERP workflows and business rules",
        description:
          "Hands-on experience with ERP routines and business operations, connecting business rules, functional validation and process improvement."
      },
      {
        title: "Data outputs and productivity",
        description:
          "Experience with SQL, PostgreSQL, CSV exports, reports and practical outputs that help review, decision-making and rework reduction."
      },
      {
        title: "Requirements and functional documentation",
        description:
          "I gather needs, translate process context, document expected behavior and help move work from business reality to shipped implementation."
      },
      {
        title: "Hybrid academic track",
        description:
          "Currently studying Business Administration and Information Systems, combining technical depth and business context in the same workstream."
      }
    ],
    stackGroups: [
      {
        label: "Frontend",
        items: ["React 19", "Next.js 16", "TypeScript", "Vite", "Tailwind CSS", "MapLibre", "deck.gl"]
      },
      {
        label: "Backend & data",
        items: ["Node.js", "Express", "Python", "FastAPI", "Prisma", "SQLite", "PostgreSQL", "Redis"]
      },
      {
        label: "Platform & integrations",
        items: ["Clerk", "Cloudflare R2", "Socket.io", "AbacatePay", "SEFAZ", "Gemini", "Redmine"]
      }
    ],
    contactLinks: [
      {
        label: "Email",
        value: "guilhermebezzuoli@gmail.com",
        href: "mailto:guilhermebezzuoli@gmail.com",
        description: "Best path for interviews, proposals or technical conversations.",
        newTab: false,
        tier: "primary"
      },
      {
        label: "Phone",
        value: "+55 11 94522-0435",
        href: "tel:+5511945220435",
        description: "Direct line for recruiter follow-up, quick alignment or response.",
        newTab: false,
        tier: "primary"
      },
      {
        label: "GitHub / products",
        value: "github.com/ramosbezzu",
        href: "https://github.com/ramosbezzu",
        description: "Useful for repositories, products and public code with stronger delivery context.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "GitHub / activity",
        value: "github.com/gbezzuoli",
        href: "https://github.com/gbezzuoli",
        description: "Helpful to show coding activity, contribution history and public consistency.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Flagship case",
        value: "leafdfe.com.br",
        href: "https://www.leafdfe.com.br/",
        description: "Public SaaS product that best represents my work in operational software.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/gbzramos",
        href: "https://linkedin.com/in/gbzramos",
        description: "Professional timeline, background and recruiter-facing context.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Portuguese CV",
        value: "CV-GuilhermeBezzuoliRamos.pdf",
        href: "./CV-GuilhermeBezzuoliRamos.pdf",
        description: "Portuguese version for local applications.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "English resume",
        value: "GuilhermeRamos-EN-CV.pdf",
        href: "./GuilhermeRamos-EN-CV.pdf",
        description: "Localized English version for international applications.",
        newTab: true,
        tier: "secondary"
      }
    ]
  }
};

const appState = {
  locale: getPreferredLocale()
};

let revealObserver;

function getPreferredLocale() {
  try {
    const saved = window.localStorage.getItem("portfolio-locale");
    if (saved && localeContent[saved]) return saved;
  } catch (_error) {
    // Ignore storage access issues and fall back to browser language.
  }

  const browserLocale = (navigator.language || "").toLowerCase();
  return browserLocale.startsWith("en") ? "en" : "pt";
}

function getNextLocale() {
  return appState.locale === "pt" ? "en" : "pt";
}

function getIconData(name) {
  const icon = iconMap[name] || {};
  const short =
    icon.short ||
    name
      .split(/[^A-Za-z0-9]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("")
      .slice(0, 2);

  return {
    short,
    src:
      icon.src ||
      (icon.slug ? `https://cdn.simpleicons.org/${icon.slug}/${icon.color || "111827"}` : "")
  };
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setHTML(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function renderSimpleList(selector, items) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderStackTag(name) {
  const icon = getIconData(name);

  return `
    <span class="stack-tag">
      <span class="stack-tag__mark${icon.src ? " has-icon" : ""}">
        <span class="stack-tag__fallback">${icon.short}</span>
        ${
          icon.src
            ? `<img class="stack-tag__icon" src="${icon.src}" alt="" loading="lazy" onerror="this.remove(); this.parentElement.classList.remove('has-icon'); this.parentElement.classList.add('is-fallback');" />`
            : ""
        }
      </span>
      <span>${name}</span>
    </span>
  `;
}

function updateDocumentMeta(content) {
  document.documentElement.lang = content.meta.htmlLang;
  document.title = content.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", content.meta.description);
}

function applyStaticCopy(content) {
  updateDocumentMeta(content);

  setText("#nav-projects", content.nav.projects);
  setText("#nav-stack", content.nav.stack);
  setText("#nav-contact", content.nav.contact);

  setText("#menu-eyebrow", content.menu.eyebrow);
  setText("#menu-home", content.menu.home);
  setText("#menu-feature", content.menu.feature);
  setText("#menu-evidence", content.menu.evidence);
  setText("#menu-projects", content.menu.projects);
  setText("#menu-stack", content.menu.stack);
  setText("#menu-contact", content.menu.contact);
  setText("#menu-footer-text", content.menu.footer);

  setText("#hero-eyebrow", content.hero.eyebrow);
  setText("#hero-title", content.hero.title);
  setHTML("#hero-lede", content.hero.lede);
  setText("#hero-manifesto-title", content.hero.manifestoTitle);
  setText("#hero-manifesto-text", content.hero.manifestoText);
  setText("#hero-cta-projects", content.hero.ctaProjects);
  setText("#hero-cta-leaf", content.hero.ctaLeaf);
  setText("#country-ribbon-eyebrow", content.hero.ribbonEyebrow);
  setText("#country-ribbon-text", content.hero.ribbonText);

  setText("#profile-label", content.profile.label);
  setText("#profile-role", content.profile.role);
  setText("#profile-email-cta", content.profile.emailLabel);

  const cvButton = document.querySelector("#profile-cv-cta");
  if (cvButton) {
    cvButton.textContent = content.profile.cvLabel;
    cvButton.setAttribute("href", content.profile.cvHref);
  }

  setText("#panel-kicker", content.panel.kicker);
  setText("#panel-text", content.panel.text);

  setText("#feature-eyebrow", content.feature.eyebrow);
  setText("#feature-title", content.feature.title);
  setHTML("#feature-paragraph-1", content.feature.paragraph1);
  setHTML("#feature-paragraph-2", content.feature.paragraph2);
  setText("#feature-card-title", content.feature.cardTitle);
  setText("#feature-link-title", content.feature.linkTitle);
  setText("#feature-link-note", content.feature.linkNote);

  setText("#evidence-eyebrow", content.evidence.eyebrow);
  setText("#evidence-title", content.evidence.title);
  setText("#evidence-copy", content.evidence.copy);

  setText("#projects-eyebrow", content.projectsSection.eyebrow);
  setText("#projects-title", content.projectsSection.title);
  setText("#projects-copy", content.projectsSection.copy);

  setText("#business-eyebrow", content.businessSection.eyebrow);
  setText("#business-title", content.businessSection.title);
  setText("#stack-eyebrow", content.stackSection.eyebrow);
  setText("#stack-title", content.stackSection.title);

  setText("#contact-eyebrow", content.contactSection.eyebrow);
  setText("#contact-title", content.contactSection.title);
  setText("#contact-copy", content.contactSection.copy);

  setText("#footer-copy", content.footer.copy);

  const topNav = document.querySelector("#top-nav");
  if (topNav) topNav.setAttribute("aria-label", content.aria.topNav);

  const sideNav = document.querySelector(".menu-panel__nav");
  if (sideNav) sideNav.setAttribute("aria-label", content.aria.sideNav);

  const identityList = document.querySelector("#identity-list");
  if (identityList) identityList.setAttribute("aria-label", content.aria.identity);

  const countryFlag = document.querySelector("#country-flag-image");
  if (countryFlag) countryFlag.setAttribute("alt", content.aria.countryFlag);

  const profileImage = document.querySelector("#profile-image");
  if (profileImage) profileImage.setAttribute("alt", content.aria.profileImage);

  const toggle = document.querySelector("#lang-toggle");
  const toggleIcon = document.querySelector("#lang-toggle-icon");
  const toggleLabel = document.querySelector("#lang-toggle-label");
  if (toggle && toggleIcon && toggleLabel) {
    toggle.setAttribute("aria-label", content.langToggle.ariaLabel);
    toggle.setAttribute("data-target-locale", getNextLocale());
    toggleLabel.textContent = content.langToggle.label;
    toggleIcon.setAttribute("src", content.langToggle.icon);
  }
}

function renderIdentityList(content) {
  renderSimpleList("#identity-list", content.hero.identity);
}

function renderProfileMeta(content) {
  renderSimpleList("#profile-meta", content.profile.meta);
}

function renderFeatureList(content) {
  renderSimpleList("#feature-card-list", content.feature.cardItems);
}

function renderHeroStats(content) {
  const container = document.querySelector("#hero-stats");
  if (!container) return;

  container.innerHTML = content.stats
    .map(
      (stat) => `
        <article class="stat">
          <span class="stat__value">${stat.value}</span>
          <span class="stat__label">${stat.label}</span>
        </article>
      `
    )
    .join("");
}

function renderHeroStacks() {
  const container = document.querySelector("#hero-stack-chips");
  if (!container) return;
  container.innerHTML = sharedHeroStacks.map(renderStackTag).join("");
}

function renderProjects(content) {
  const container = document.querySelector("#projects-grid");
  if (!container) return;

  container.innerHTML = content.projects
    .map(
      (project) => `
        <article class="project-card project-card--${project.tone}" data-reveal>
          <div class="project-card__top">
            <div>
              <p class="project-card__status">${project.status}</p>
              <h3>${project.title}</h3>
            </div>
            <p class="project-card__meta">${project.meta}</p>
          </div>
          <p class="project-card__summary">${project.summary}</p>
          <ul class="project-card__highlights">
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="project-card__chips">
            ${project.stack.map(renderStackTag).join("")}
          </div>
          ${
            project.links.length
              ? `
                <div class="project-card__links">
                  ${project.links
                    .map(
                      (link) => `
                        <a href="${link.href}" target="_blank" rel="noreferrer">
                          ${link.label}
                        </a>
                      `
                    )
                    .join("")}
                </div>
              `
              : ""
          }
        </article>
      `
    )
    .join("");
}

function renderStackWall() {
  const container = document.querySelector("#stack-wall");
  if (!container) return;

  container.innerHTML = sharedStackWall
    .map((name) => {
      const icon = getIconData(name);
      return `
        <article class="stack-wall__item">
          <span class="stack-wall__mark${icon.src ? " has-icon" : ""}">
            <span class="stack-wall__fallback">${icon.short}</span>
            ${
              icon.src
                ? `<img class="stack-wall__icon" src="${icon.src}" alt="" loading="lazy" onerror="this.remove(); this.parentElement.classList.remove('has-icon'); this.parentElement.classList.add('is-fallback');" />`
                : ""
            }
          </span>
          <span class="stack-wall__label">${name}</span>
        </article>
      `;
    })
    .join("");
}

function renderGallery(content) {
  const container = document.querySelector("#gallery-grid");
  if (!container) return;

  const featured = content.galleryItems.slice(0, 4);
  const proofs = content.galleryItems.slice(4);

  const renderItems = (items) =>
    items
      .map(
        (item) => `
          <article class="gallery-card" data-reveal>
            <div class="gallery-card__frame">
              <img src="${item.image}" alt="${item.alt}" loading="lazy" />
            </div>
            <div class="gallery-card__body">
              <p class="gallery-card__label">${item.label}</p>
              <h3 class="gallery-card__title">${item.title}</h3>
              <span class="gallery-card__file">${item.fileHint}</span>
            </div>
          </article>
        `
      )
      .join("");

  container.innerHTML = `
    <div class="gallery-cluster gallery-cluster--featured">
      ${renderItems(featured)}
    </div>
    <div class="gallery-cluster gallery-cluster--proofs">
      ${renderItems(proofs)}
    </div>
  `;
}

function renderPrinciples(content) {
  const container = document.querySelector("#business-cards");
  if (!container) return;

  container.innerHTML = content.businessCards
    .map(
      (principle) => `
        <article class="principle-card">
          <h3>${principle.title}</h3>
          <p>${principle.description}</p>
        </article>
      `
    )
    .join("");
}

function renderStackGroups(content) {
  const container = document.querySelector("#stack-groups");
  if (!container) return;

  container.innerHTML = content.stackGroups
    .map(
      (group) => `
        <article class="stack-group">
          <span class="stack-group__label">${group.label}</span>
          <div class="stack-group__items">
            ${group.items.map(renderStackTag).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderContactLinks(content) {
  const primary = document.querySelector("#contact-primary");
  const secondary = document.querySelector("#contact-secondary");
  if (!primary || !secondary) return;

  const renderLinks = (links, variant) =>
    links
      .map(
        (link) => `
          <a class="contact-link contact-link--${variant}" href="${link.href}"${
            link.newTab ? ' target="_blank" rel="noreferrer"' : ""
          }>
            <span class="contact-link__label">${link.label}</span>
            <span class="contact-link__value">${link.value}</span>
            <span class="contact-link__description">${link.description}</span>
          </a>
        `
      )
      .join("");

  primary.innerHTML = renderLinks(
    content.contactLinks.filter((link) => link.tier === "primary"),
    "primary"
  );
  secondary.innerHTML = renderLinks(
    content.contactLinks.filter((link) => link.tier !== "primary"),
    "secondary"
  );
}

function revealSections() {
  if (revealObserver) revealObserver.disconnect();

  const elements = document.querySelectorAll("[data-reveal]");
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14 }
  );

  for (const element of elements) {
    revealObserver.observe(element);
  }
}

function setYear() {
  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();
}

function renderApp() {
  const content = localeContent[appState.locale];
  if (!content) return;

  applyStaticCopy(content);
  renderIdentityList(content);
  renderProfileMeta(content);
  renderFeatureList(content);
  renderHeroStats(content);
  renderHeroStacks();
  renderProjects(content);
  renderStackWall();
  renderGallery(content);
  renderPrinciples(content);
  renderStackGroups(content);
  renderContactLinks(content);
  setYear();
  revealSections();
}

function setLocale(locale) {
  if (!localeContent[locale]) return;

  appState.locale = locale;

  try {
    window.localStorage.setItem("portfolio-locale", locale);
  } catch (_error) {
    // Ignore storage failures and keep the session locale only.
  }

  renderApp();
}

function bindEvents() {
  const toggle = document.querySelector("#lang-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    setLocale(getNextLocale());
  });
}

bindEvents();
renderApp();
