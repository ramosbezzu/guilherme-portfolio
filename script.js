const iconMap = {
  "Next.js": { slug: "nextdotjs", color: "111827", short: "NX" },
  React: { slug: "react", color: "2C6636", short: "RC" },
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
  GitHub: { slug: "github", color: "111827", short: "GH" },
  "Google Cloud": { slug: "googlecloud", color: "4285F4", short: "GC" },
  Zod: { slug: "zod", color: "3E67B1", short: "ZD" },
  SWR: { short: "SW" },
  "Evolution API": { short: "WA" },
  iFood: { short: "IF" }
};

const sharedHeroStacks = [
  "Next.js",
  "React",
  "TypeScript",
  "Prisma",
  "Clerk",
  "Cloudflare R2",
  "Upstash Redis"
];

const sharedStackWall = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python 3.10+",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Google Cloud",
  "Git",
  "Vercel",
  "Cloudflare R2",
  "FastAPI",
  "Vitest"
];

const localeContent = {
  pt: {
    meta: {
      htmlLang: "pt-BR",
      title: "Guilherme Bezzuoli Ramos | Portfólio",
      description:
        "Portfólio de Guilherme Bezzuoli Ramos: SaaS, delivery white-label, automação, integrações e interfaces operacionais para produtos web."
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
      footer: "Trabalho com produto, automação e sistema que precisa rodar de verdade."
    },
    hero: {
      eyebrow: "Portfólio técnico / GitHub Pages / 2026",
      title: "Eu construo SaaS e ferramentas internas para operação real.",
      lede:
        "Sou <strong>Guilherme Bezzuoli Ramos</strong>, desenvolvedor full-stack com bagagem em ERP, processos, requisitos e desenvolvimento web. Gosto de pegar fluxo confuso, organizar regra de negócio, integrar serviço e entregar interface que o time realmente usa no dia a dia.",
      manifestoTitle: "Visual da página",
      manifestoText:
        "A base visual veio do LeafDFe. Quis uma página mais seca, com blocos fortes e curvas pontuais, sem cair naquela cara de template.",
      ctaProjects: "Ver projetos",
      ctaLeaf: "Ver LeafDFe",
      identity: ["23 anos", "Brasileiro", "Português fluente", "Inglês conversacional"],
      ribbonEyebrow: "Brasil / São Paulo",
      ribbonText:
        "Trabalho a partir de São Paulo, com experiência prática em ERP, operação e produto web."
    },
    profile: {
      label: "Foto de perfil",
      role: "Full-stack com foco em SaaS, integrações e rotina operacional.",
      meta: ["Brasil / São Paulo", "guilhermebezzuoli@gmail.com", "+55 11 94522-0435"],
      emailLabel: "Falar por e-mail",
      cvLabel: "Baixar CV",
      cvHref: "./CV-GuilhermeBezzuoliRamos.pdf"
    },
    panel: {
      kicker: "Projeto principal em produção",
      text:
        "SaaS fiscal para captura, manifestação, consulta e armazenamento de documentos eletrônicos, com checkout, API REST e operação multiempresa."
    },
    feature: {
      eyebrow: "Case principal",
      title: "LeafDFe resume bem o tipo de problema que eu gosto de pegar.",
      paragraph1:
        "No LeafDFe eu junto frontend, backend, regra fiscal, autenticação, cobrança e armazenamento no mesmo produto. A base atual usa <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Prisma</strong>, <strong>Clerk</strong>, <strong>Upstash Redis</strong> e <strong>Cloudflare R2</strong>.",
      paragraph2:
        "O objetivo sempre foi simples: tirar o fiscal do trabalho manual. Isso inclui consulta na SEFAZ, manifestação em lote, download de XML e DANFE, multiempresa, armazenamento em nuvem e um checkout que não atrapalha a venda.",
      cardTitle: "O que esse case mostra",
      cardItems: [
        "Integração com SEFAZ sem depender de rotina manual",
        "Checkout e cobrança encaixados no produto",
        "Arquitetura multiempresa com guarda segura de documentos",
        "Interface pensada para operador, não só para demo"
      ],
      linkTitle: "Link público",
      linkNote: "Produto ao vivo com posicionamento SaaS para NF-e, CT-e e MDF-e."
    },
    evidence: {
      eyebrow: "Recortes reais",
      title: "Produto publicado, interface em uso e atividade pública.",
      copy: "Aqui eu mostro o LeafDFe e alguns recortes que ajudam a provar autoria e consistência."
    },
    projectsSection: {
      eyebrow: "Projetos selecionados",
      title: "Cinco projetos que mostram onde eu agrego mais valor.",
      copy:
        "Nem tudo pode ficar público. Então preferi explicar o problema, a decisão técnica e o tipo de entrega, em vez de encher a página de descrição genérica."
    },
    businessSection: {
      eyebrow: "Negócio e processo",
      title: "Experiência prática com ERP, dados, requisitos e operação."
    },
    stackSection: {
      eyebrow: "Stack no código",
      title: "Ferramentas que aparecem nos projetos acima sem inflar lista."
    },
    contactSection: {
      eyebrow: "Contato",
      title: "Se quiser conversar sobre produto, frontend ou automação, estou por aqui.",
      copy:
        "E-mail ainda é o canal mais fácil. Também deixei telefone, GitHub, LinkedIn e CV para quem quiser validar contexto antes de falar comigo."
    },
    footer: {
      copy: "Portfólio estático publicado no GitHub Pages."
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
      { value: "5", label: "projetos destacados" },
      { value: "ERP + SaaS", label: "negócio e produto" },
      { value: "2", label: "graduações em andamento" },
      { value: "PT-BR / EN", label: "idiomas de trabalho" }
    ],
    projects: [
      {
        title: "Leaf Delivery",
        tone: "accent",
        status: "Em produção",
        meta: "SaaS white-label / Next.js + Prisma + PostgreSQL",
        summary:
          "Plataforma white-label para restaurante, adega e operação local vender pelo próprio canal sem perder pedido entre WhatsApp, balcão, cozinha e entrega.",
        highlights: [
          "Storefront, checkout, tracking público, QR de mesa, garçom, comandas e KDS no mesmo fluxo.",
          "Integrações operacionais com WhatsApp/Evolution, iFood, PIX Abacate Pay, cupons, estoque e receitas.",
          "Admin tenant e admin geral com permissões, multiunidade, planos comerciais e trilha de operação real."
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Vitest",
          "AbacatePay",
          "Evolution API",
          "iFood"
        ],
        links: [{ label: "Produto ao vivo", href: "https://leafdelivery.com.br/" }]
      },
      {
        title: "LeafDFe",
        tone: "brand",
        status: "Em produção",
        meta: "SaaS fiscal / Next.js + Prisma + integrações",
        summary:
          "SaaS fiscal que centraliza consulta, manifestação e guarda de DF-e para reduzir rotina manual no time fiscal.",
        highlights: [
          "Consulta e manifestação na SEFAZ para NF-e, CT-e e MDF-e.",
          "Checkout com AbacatePay ligado ao produto e às páginas públicas.",
          "Arquitetura multi-tenant com Clerk, Redis, Prisma e Cloudflare R2."
        ],
        stack: [
          "Next.js",
          "React",
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
        status: "Produto visual / geointeligência",
        meta: "Mapas interativos / Next.js + MapLibre + deck.gl",
        summary:
          "Projeto de mapas interativos feito para leitura rápida de contexto geopolítico, com camadas densas e timeline editorial.",
        highlights: [
          "Frontend desenhado para leitura densa, sem esconder informação importante.",
          "Camada server-side tipada pronta para sair do in-memory e ir para Postgres/PostGIS.",
          "Filtros, busca, timeline e painéis de detalhe no mesmo fluxo."
        ],
        stack: [
          "Next.js",
          "React",
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
          "Bot para prediction markets com modos paper e live, controles de risco, persistência de eventos e endpoints de operação.",
        highlights: [
          "Loop paper de arbitragem com scoring, risco e simulação de fills.",
          "Base para market making com inventário, geração de quotes e supervisor.",
          "APIs para analytics, wallet, health check e operação em tempo real."
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
          "Ferramenta interna para abrir ticket a partir de áudio e texto, com integração ao Redmine e ambientes beta e produção separados.",
        highlights: [
          "Interface em React/Vite feita para uso interno contínuo.",
          "Backend Express com autenticação, rate limit, Socket.io e persistência em SQLite.",
          "Fluxo ligado a processo interno, IA e ferramenta corporativa."
        ],
        stack: ["React", "TypeScript", "Vite", "Express", "SQLite", "Socket.io", "Gemini"],
        links: []
      }
    ],
    galleryItems: [
      {
        label: "Leaf Delivery",
        title: "Central de pedidos para operação ao vivo",
        image: "./media/leaf-delivery-pedidos.png",
        alt: "Screenshot da central de pedidos do Leaf Delivery",
        fileHint: "leafdelivery / pedidos"
      },
      {
        label: "Leaf Delivery",
        title: "KDS de cozinha e fila de preparo",
        image: "./media/leaf-delivery-kds.png",
        alt: "Screenshot da tela de cozinha KDS do Leaf Delivery",
        fileHint: "leafdelivery / cozinha"
      },
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
        label: "Leaf Delivery",
        title: "Storefront mobile com carrinho",
        image: "./media/leaf-delivery-storefront.png",
        alt: "Screenshot do storefront mobile do Leaf Delivery com carrinho",
        fileHint: "leafdelivery / storefront"
      },
      {
        label: "Leaf Delivery",
        title: "Inbox WhatsApp dentro da operação",
        image: "./media/leaf-delivery-whatsapp.png",
        alt: "Screenshot da inbox WhatsApp do Leaf Delivery",
        fileHint: "leafdelivery / whatsapp"
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
          "Já trabalhei perto de rotina corporativa de verdade, então costumo pensar em exceção, conferência e gargalo antes de pensar só na tela."
      },
      {
        title: "Dados, saídas e produtividade",
        description:
          "Relatório, CSV e consulta precisam ajudar alguém a decidir ou conferir alguma coisa. Tento manter esse critério em tudo que entrego."
      },
      {
        title: "Requisitos e documentação funcional",
        description:
          "Consigo puxar demanda do time de negócio, organizar regra e transformar isso em escopo implementável sem enrolação."
      },
      {
        title: "Formação híbrida",
        description:
          "Estou cursando Administração e Sistemas de Informação. Isso ajuda a discutir produto sem perder o detalhe técnico."
      }
    ],
    stackGroups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "MapLibre", "deck.gl", "SWR"]
      },
      {
        label: "Backend e dados",
        items: ["Node.js", "Express", "Python", "FastAPI", "Prisma", "SQLite", "PostgreSQL", "Redis", "Zod"]
      },
      {
        label: "Plataforma e integrações",
        items: ["Clerk", "Google Cloud", "Cloudflare R2", "Socket.io", "AbacatePay", "SEFAZ", "Evolution API", "iFood", "Gemini", "Redmine"]
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
        description: "Perfil para ver produtos, repositórios e código publicado.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "GitHub / atividade",
        value: "github.com/gbezzuoli",
        href: "https://github.com/gbezzuoli",
        description: "Perfil focado em atividade, contribuições e consistência de código.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Case delivery",
        value: "leafdelivery.com.br",
        href: "https://leafdelivery.com.br/",
        description: "SaaS white-label em produção para delivery, salão, cozinha, WhatsApp, iFood, PIX e estoque.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Case fiscal",
        value: "leafdfe.com.br",
        href: "https://www.leafdfe.com.br/",
        description: "Produto público que melhor representa meu trabalho em software operacional.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/gbzramos",
        href: "https://linkedin.com/in/gbzramos",
        description: "Perfil profissional com histórico e contexto de carreira.",
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
        "Portfolio of Guilherme Bezzuoli Ramos: SaaS, white-label delivery, workflow automation, integrations and operational interfaces for web products."
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
      footer: "I work on product, automation and systems that need to hold up in real operations."
    },
    hero: {
      eyebrow: "Engineering portfolio / GitHub Pages / 2026",
      title: "I build SaaS products and internal tools for real operations.",
      lede:
        "I'm <strong>Guilherme Bezzuoli Ramos</strong>, a full-stack developer with hands-on experience in ERP workflows, process analysis, requirements and web delivery. I like taking messy flows, turning business rules into working software and shipping interfaces people actually use every day.",
      manifestoTitle: "Page visual",
      manifestoText:
        "The visual system came from LeafDFe. I wanted a drier page with strong blocks and a few curves, without falling into generic portfolio styling.",
      ctaProjects: "See projects",
      ctaLeaf: "Open LeafDFe",
      identity: ["23 years old", "Brazil-based", "Native Portuguese", "Conversational English"],
      ribbonEyebrow: "Brazil / Sao Paulo",
      ribbonText:
        "Based in Sao Paulo, with practical experience in ERP operations, business systems and web products."
    },
    profile: {
      label: "Profile",
      role: "Full-stack builder focused on SaaS, integrations and operational workflows.",
      meta: ["Brazil / Sao Paulo", "guilhermebezzuoli@gmail.com", "+55 11 94522-0435"],
      emailLabel: "Email me",
      cvLabel: "Download resume",
      cvHref: "./GuilhermeRamos-EN-CV.pdf"
    },
    panel: {
      kicker: "Flagship product in production",
      text:
        "Tax SaaS for ingestion, manifestation, lookup and storage of electronic fiscal documents, with checkout, REST APIs and multi-company workflows."
    },
    feature: {
      eyebrow: "Main case",
      title: "LeafDFe is the clearest example of the kind of problem I like working on.",
      paragraph1:
        "LeafDFe brings frontend, backend, tax workflows, authentication, billing and secure storage into the same product. The current base uses <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Prisma</strong>, <strong>Clerk</strong>, <strong>Upstash Redis</strong> and <strong>Cloudflare R2</strong>.",
      paragraph2:
        "The goal was always simple: get fiscal work out of manual mode. That means SEFAZ lookups, batch manifestation, XML and DANFE downloads, multi-company management, cloud storage and a checkout flow that does not get in the way.",
      cardTitle: "What this case proves",
      cardItems: [
        "SEFAZ-heavy flows without manual busywork",
        "Checkout and billing inside the product",
        "Multi-tenant architecture with secure document storage",
        "Operational UI built for daily use, not for screenshots"
      ],
      linkTitle: "Public link",
      linkNote: "Live SaaS product for NF-e, CT-e and MDF-e workflows."
    },
    evidence: {
      eyebrow: "Real proof",
      title: "Published product, live interface and public activity.",
      copy: "This section shows LeafDFe first, then a few supporting pieces that help prove authorship and consistency."
    },
    projectsSection: {
      eyebrow: "Selected work",
      title: "Five projects that show where I add the most value.",
      copy:
        "Not everything can be public. So I focused on the problem, the technical choices and the kind of delivery behind each project instead of padding the page with generic copy."
    },
    businessSection: {
      eyebrow: "Business context",
      title: "Hands-on experience with ERP workflows, data, requirements and operations."
    },
    stackSection: {
      eyebrow: "Stack in code",
      title: "Tools that actually show up in the projects above."
    },
    contactSection: {
      eyebrow: "Contact",
      title: "If you want to talk about product, frontend or automation, I'm available.",
      copy:
        "Email is still the easiest way to reach me. I also left phone, GitHub, LinkedIn and both resume versions for anyone who wants more context first."
    },
    footer: {
      copy: "Static portfolio published on GitHub Pages."
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
      { value: "5", label: "featured projects" },
      { value: "ERP + SaaS", label: "business systems" },
      { value: "2", label: "degrees in progress" },
      { value: "PT-BR / EN", label: "working languages" }
    ],
    projects: [
      {
        title: "Leaf Delivery",
        tone: "accent",
        status: "Live product",
        meta: "White-label SaaS / Next.js + Prisma + PostgreSQL",
        summary:
          "White-label platform for restaurants, liquor stores and local operations to sell through their own channel without losing orders across WhatsApp, counter service, kitchen and delivery.",
        highlights: [
          "Storefront, checkout, public tracking, table QR, waiter flow, tabs and KDS kept in one operational loop.",
          "Operational integrations with WhatsApp/Evolution, iFood, Abacate Pay PIX, coupons, inventory and recipes.",
          "Tenant admin and platform admin with permissions, multi-unit operations, commercial plans and production-grade workflows."
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Vitest",
          "AbacatePay",
          "Evolution API",
          "iFood"
        ],
        links: [{ label: "Live product", href: "https://leafdelivery.com.br/" }]
      },
      {
        title: "LeafDFe",
        tone: "brand",
        status: "Live product",
        meta: "Tax SaaS / Next.js + Prisma + integrations",
        summary:
          "Tax SaaS that centralizes lookup, manifestation and storage of Brazilian fiscal documents to cut manual work from the fiscal team.",
        highlights: [
          "SEFAZ lookups and manifestation for NF-e, CT-e and MDF-e.",
          "AbacatePay checkout connected to the product and public acquisition pages.",
          "Multi-tenant architecture with Clerk, Redis, Prisma and Cloudflare R2."
        ],
        stack: [
          "Next.js",
          "React",
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
        status: "Product UI / geospatial intelligence",
        meta: "Interactive mapping / Next.js + MapLibre + deck.gl",
        summary:
          "Interactive mapping project built for fast geopolitical reading, with dense layers and an editorial timeline.",
        highlights: [
          "Frontend built for dense reading without hiding useful information.",
          "Typed server-side layer ready to move from in-memory data to Postgres/PostGIS.",
          "Filters, search, timeline and detail panels kept in one flow."
        ],
        stack: [
          "Next.js",
          "React",
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
          "Prediction markets bot with paper and live modes, risk controls, event persistence and operational endpoints.",
        highlights: [
          "Paper arbitrage loop with scoring, risk logic and fill simulation.",
          "Foundation for market-making with inventory, quote generation and supervision.",
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
          "Internal tool for turning audio and text into tickets, with Redmine integration and separate beta and production environments.",
        highlights: [
          "React/Vite interface built for repeated internal use.",
          "Express backend with authentication, rate limiting, Socket.io and SQLite persistence.",
          "Workflow tied to internal requests, AI transcription and corporate tooling."
        ],
        stack: ["React", "TypeScript", "Vite", "Express", "SQLite", "Socket.io", "Gemini"],
        links: []
      }
    ],
    galleryItems: [
      {
        label: "Leaf Delivery",
        title: "Live order center for daily operations",
        image: "./media/leaf-delivery-pedidos.png",
        alt: "Screenshot of the Leaf Delivery order center",
        fileHint: "leafdelivery / orders"
      },
      {
        label: "Leaf Delivery",
        title: "Kitchen KDS and preparation queue",
        image: "./media/leaf-delivery-kds.png",
        alt: "Screenshot of the Leaf Delivery kitchen KDS",
        fileHint: "leafdelivery / kitchen"
      },
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
        label: "Leaf Delivery",
        title: "Mobile storefront with cart",
        image: "./media/leaf-delivery-storefront.png",
        alt: "Screenshot of the Leaf Delivery mobile storefront with cart",
        fileHint: "leafdelivery / storefront"
      },
      {
        label: "Leaf Delivery",
        title: "WhatsApp inbox inside the operation",
        image: "./media/leaf-delivery-whatsapp.png",
        alt: "Screenshot of the Leaf Delivery WhatsApp inbox",
        fileHint: "leafdelivery / whatsapp"
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
          "I've worked close to real business routines, so I tend to think about edge cases, validation and bottlenecks before thinking only about the interface."
      },
      {
        title: "Data outputs and productivity",
        description:
          "Reports, CSV exports and queries need to help someone decide or verify something. I try to keep that standard in what I ship."
      },
      {
        title: "Requirements and functional documentation",
        description:
          "I can pull requirements from the business side, organize rules and turn them into implementation-ready scope without too much ceremony."
      },
      {
        title: "Hybrid academic track",
        description:
          "I'm studying Business Administration and Information Systems, which helps me discuss product context without losing technical detail."
      }
    ],
    stackGroups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "MapLibre", "deck.gl", "SWR"]
      },
      {
        label: "Backend & data",
        items: ["Node.js", "Express", "Python", "FastAPI", "Prisma", "SQLite", "PostgreSQL", "Redis", "Zod"]
      },
      {
        label: "Platform & integrations",
        items: ["Clerk", "Google Cloud", "Cloudflare R2", "Socket.io", "AbacatePay", "SEFAZ", "Evolution API", "iFood", "Gemini", "Redmine"]
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
        description: "Useful for public products, repositories and published code.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "GitHub / activity",
        value: "github.com/gbezzuoli",
        href: "https://github.com/gbezzuoli",
        description: "Helpful for showing activity, contribution history and public consistency.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Delivery case",
        value: "leafdelivery.com.br",
        href: "https://leafdelivery.com.br/",
        description: "Live white-label SaaS for delivery, dine-in, kitchen, WhatsApp, iFood, PIX and inventory.",
        newTab: true,
        tier: "secondary"
      },
      {
        label: "Tax case",
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
        description: "Professional background and career context.",
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
