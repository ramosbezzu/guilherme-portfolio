const iconMap = {
  "Next.js": { slug: "nextdotjs", color: "111827", short: "NX" },
  React: { slug: "react", color: "2C6636", short: "RC" },
  TypeScript: { slug: "typescript", color: "3178C6", short: "TS" },
  JavaScript: { slug: "javascript", color: "8A6400", short: "JS" },
  Shell: { slug: "gnubash", color: "111827", short: "SH" },
  Fastify: { slug: "fastify", color: "111827", short: "FY" },
  Docker: { slug: "docker", color: "2496ED", short: "DK" },
  Playwright: { short: "PW" },
  Storybook: { slug: "storybook", color: "FF4785", short: "SB" },
  Sentry: { slug: "sentry", color: "362D59", short: "SN" },
  Railway: { slug: "railway", color: "111827", short: "RW" },
  "GitHub Actions": { slug: "githubactions", color: "2088FF", short: "GA" },
  "Claude Code": { slug: "claude", color: "B75C3D", short: "CC" },
  ChromaDB: { short: "CH" },
  RAG: { short: "RG" },
  JasperReports: { short: "JR" },
  ESLint: { slug: "eslint", color: "4B32C3", short: "ES" },
  Biome: { slug: "biome", color: "60A5FA", short: "BI" },
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
  CSS: { short: "CS" },
  SQL: { short: "DB" },
  Vitest: { slug: "vitest", color: "6E9F18", short: "VT" },
  Vercel: { slug: "vercel", color: "111827", short: "VC" },
  GitHub: { slug: "github", color: "111827", short: "GH" },
  "Google Cloud": { slug: "googlecloud", color: "4285F4", short: "GC" },
  Zod: { slug: "zod", color: "3E67B1", short: "ZD" },
  SWR: { short: "SW" },
  "Evolution API": { short: "WA" },
  iFood: { short: "IF" },
  NestJS: { slug: "nestjs", color: "E0234E", short: "NS" },
  BullMQ: { short: "BQ" },
  Stripe: { slug: "stripe", color: "635BFF", short: "ST" },
  MongoDB: { slug: "mongodb", color: "47A248", short: "MG" },
  RabbitMQ: { slug: "rabbitmq", color: "FF6600", short: "RQ" }
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
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "BullMQ",
  "Prisma",
  "Docker",
  "Google Cloud",
  "Vitest",
  "Playwright",
  "Claude Code"
];

const localeContent = {
  pt: {
    meta: {
      htmlLang: "pt-BR",
      title: "Guilherme Bezzuoli Ramos | Portfólio",
      description:
        "Portfólio de Guilherme Bezzuoli Ramos: desenvolvedor full stack com experiência de suporte N1 a N3 em ERP, SaaS fiscal em produção, ferramentas internas com IA e integrações."
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
        "Sou <strong>Guilherme Bezzuoli Ramos</strong>, desenvolvedor full stack com quase 5 anos em empresa de software ERP, do estágio em desenvolvimento ao suporte N3, e SaaS próprios em produção. Trabalho com TypeScript, Node.js/NestJS, React/Next.js e PostgreSQL, e a vivência com clientes e incidentes de ERP me faz transformar regra de negócio em software confiável.",
      manifestoTitle: "Visual da página",
      manifestoText:
        "A base visual veio do LeafDFe. Quis uma página mais seca, com blocos fortes e curvas pontuais, sem cair naquela cara de template.",
      ctaProjects: "Ver projetos",
      ctaLeaf: "Ver LeafDFe",
      identity: ["23 anos", "Brasileiro", "Português nativo", "Inglês C1 (EF SET)"],
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
      eyebrow: "Cases principais",
      title: "Dois produtos Leaf: a operação fiscal e o agendamento."
    },
    evidence: {
      eyebrow: "Recortes reais",
      title: "Interfaces reais, fluxos operacionais e produto construído de ponta a ponta.",
      copy: "Os recortes mostram o LeafDFe, o Leaf Booking e o Dispatcher sem transformar o portfólio em uma lista de telas."
    },
    featureCases: [
      {
        title: "LeafDFe",
        eyebrow: "SaaS fiscal",
        summary:
          "SaaS fiscal para tirar consulta, manifestação e guarda de DF-e da rotina manual, com cobrança, autenticação e multiempresa no mesmo fluxo.",
        points: [
          "Consulta e manifestação na SEFAZ para NF-e, CT-e, MDF-e e NFS-e, via SOAP/mTLS com certificado A1.",
          "Download de XML e DANFE, guarda em nuvem, relatórios e operação multiempresa.",
          "Checkout, autenticação, Redis, Prisma e Cloudflare R2 encaixados no produto."
        ],
        stack: ["Next.js", "React", "TypeScript", "Prisma", "Clerk", "Upstash Redis", "Cloudflare R2", "AbacatePay", "SEFAZ"],
        link: { label: "leafdfe.com.br", href: "https://www.leafdfe.com.br/" },
        images: [
          {
            image: "./media/leaf-dashboard.png",
            alt: "Screenshot do dashboard do LeafDFe",
            title: "Dashboard fiscal"
          },
          {
            image: "./media/leaf-documentos.png",
            alt: "Screenshot da tela de documentos fiscais do LeafDFe",
            title: "Documentos fiscais"
          },
          {
            image: "./media/leaf-multiempresas.png",
            alt: "Screenshot da tela de unidades e certificados do LeafDFe",
            title: "Multiempresa"
          },
          {
            image: "./media/leaf-relatorios.png",
            alt: "Screenshot da tela de relatórios fiscais do LeafDFe",
            title: "Relatórios"
          }
        ]
      },
      {
        title: "Leaf Booking",
        eyebrow: "SaaS de agendamento multi-tenant",
        summary:
          "Plataforma de agendamento online para negócios de serviços, com experiência mobile para o cliente e operação diária completa para o estabelecimento.",
        points: [
          "Booking público em poucos passos, agenda Dia | Semana | Mês e gestão de serviços, profissionais e disponibilidade.",
          "Arquitetura multi-tenant preparada para mercados BR e IE, com pagamentos por PIX ou Stripe conforme o país.",
          "Notificações, lembretes e integrações de WhatsApp organizadas por tenant, com administração operacional e visão de plataforma."
        ],
        stack: ["Next.js", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
        link: { label: "Ver código no GitHub", href: "https://github.com/ramosbezzu/leaf-booking" },
        images: [
          {
            image: "./media/leaf-booking-agenda.png",
            alt: "Agenda diária e calendário operacional do Leaf Booking",
            title: "Agenda operacional"
          },
          {
            image: "./media/leaf-booking-whatsapp.png",
            alt: "Configuração de mensagens e lembretes por WhatsApp no Leaf Booking",
            title: "Automação por WhatsApp"
          },
          {
            image: "./media/leaf-booking-pix.png",
            alt: "Configuração de pagamento PIX e conciliação no Leaf Booking",
            title: "Pagamento e conciliação PIX"
          }
        ]
      }
    ],
    projectsSection: {
      eyebrow: "Projetos selecionados",
      title: "Quatro produtos que mostram onde eu agrego mais valor.",
      copy:
        "Nem tudo pode ficar público. Então preferi explicar o problema, a decisão técnica e o tipo de entrega, em vez de encher a página de descrição genérica."
    },
    businessSection: {
      eyebrow: "Negócio e processo",
      title: "Experiência prática com ERP, dados, requisitos e operação."
    },
    stackSection: {
      eyebrow: "Tecnologias e ferramentas",
      title: "O que uso para construir, integrar e operar software."
    },
    contactSection: {
      eyebrow: "Contato",
      title: "Se quiser conversar sobre desenvolvimento full stack, suporte técnico ou automação, estou por aqui.",
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
      { value: "~5 anos", label: "em software ERP, do estágio ao N3" },
      { value: "300", label: "clientes na base atendida" },
      { value: "20+", label: "clientes treinados" },
      { value: "C1", label: "inglês certificado (EF SET)" }
    ],
    projects: [
      {
        title: "LeafDFe",
        tone: "brand",
        status: "Em produção",
        meta: "SaaS fiscal / Next.js + Prisma + integrações",
        summary:
          "SaaS fiscal que centraliza consulta, manifestação e guarda de DF-e para reduzir rotina manual no time fiscal.",
        highlights: [
          "Consulta e manifestação na SEFAZ para NF-e, CT-e, MDF-e e NFS-e.",
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
        title: "Dispatcher",
        tone: "accent",
        status: "Ferramenta interna de IA na Softland",
        meta: "React + Vite + Express + SQLite + Gemini",
        summary:
          "Ferramenta interna que transforma áudio e anotações de atendimento em relatórios e tickets no Redmine. Usada por 3 analistas durante 6 meses, com economia de 2 a 3 horas por dia em registros manuais.",
        highlights: [
          "Interface em React/Vite feita para uso interno contínuo.",
          "Backend Express com autenticação, rate limit, Socket.io e persistência em SQLite.",
          "Fluxo ligado a processo interno, IA e ferramenta corporativa."
        ],
        stack: ["React", "TypeScript", "Vite", "Express", "SQLite", "Socket.io", "Gemini"],
        links: []
      },
      {
        title: "Leaf Booking",
        tone: "paper",
        status: "MVP validado localmente",
        meta: "SaaS de agendamento / Next.js + NestJS + PostgreSQL",
        summary:
          "Plataforma multi-tenant de agendamento para negócios de serviços, com booking público mobile e uma agenda operacional para o time.",
        highlights: [
          "Agendamento público, disponibilidade por profissional e agenda em visualizações de dia, semana e mês.",
          "Admin do negócio para serviços, clientes, profissionais, marca, pagamentos e notificações.",
          "Arquitetura por mercado com PIX no Brasil, Stripe em EUR e filas BullMQ para tarefas assíncronas."
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "NestJS",
          "Prisma",
          "PostgreSQL",
          "Redis",
          "BullMQ"
        ],
        links: [{ label: "Ver repositório", href: "https://github.com/ramosbezzu/leaf-booking" }]
      },
      {
        title: "Leaf Delivery",
        tone: "paper",
        status: "Em produção",
        meta: "SaaS de pedidos / NestJS + PostgreSQL",
        summary:
          "Plataforma multi-tenant de pedidos para restaurantes e operação local, com loja, PDV, cozinha, WhatsApp, iFood e PIX.",
        highlights: [
          "Backend migrado de rotas Next.js para NestJS/Fastify, com workers BullMQ no GCP Cloud Run.",
          "Testes com Vitest e Playwright e monitoramento com Sentry."
        ],
        stack: ["Next.js", "NestJS", "Fastify", "PostgreSQL", "Redis", "BullMQ"],
        links: [{ label: "Produto ao vivo", href: "https://leafdelivery.com.br/" }]
      }
    ],
    galleryItems: [
      {
        label: "Leaf Booking",
        title: "Agenda diária para uma operação com múltiplos profissionais",
        image: "./media/leaf-booking-agenda.png",
        alt: "Agenda diária e calendário operacional do Leaf Booking",
        fileHint: "leaf booking / agenda"
      },
      {
        label: "Leaf Booking",
        title: "Automação de confirmações e lembretes por WhatsApp",
        image: "./media/leaf-booking-whatsapp.png",
        alt: "Configuração de mensagens e lembretes por WhatsApp no Leaf Booking",
        fileHint: "leaf booking / whatsapp"
      },
      {
        label: "Leaf Booking",
        title: "Configuração de PIX, webhook e conciliação",
        image: "./media/leaf-booking-pix.png",
        alt: "Configuração de pagamento PIX e conciliação no Leaf Booking",
        fileHint: "leaf booking / pagamentos"
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
        title: "Suporte de ERP, do N1 ao N3",
        description:
          "Na Softland Sistemas atendia de 15 a 30 chamados por dia numa base de cerca de 300 clientes (188 no ERP legado em Delphi), com pico de 50 clientes num dia de SEFAZ fora do ar. Investigava incidentes com SQL e logs e entregava ao desenvolvimento causa raiz e passos de reprodução."
      },
      {
        title: "Treinamento de clientes",
        description:
          "Treinei mais de 20 clientes nos módulos Fiscal, CRM, Financeiro, Estoque e integrações bancárias (CNAB 240 e 400), incluindo uma turma presencial de mais de 10 pessoas."
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
        label: "Linguagens",
        description: "TypeScript, JavaScript e SQL no trabalho com SaaS. Python e Shell em ferramentas e automação; Java na experiência profissional com ERP.",
        items: ["TypeScript", "JavaScript", "SQL", "Python", "Shell", "Java"]
      },
      {
        label: "Frontend",
        description: "Interfaces dos produtos Leaf e do Dispatcher, com estado, dados e layouts responsivos.",
        items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vite", "zustand", "SWR"]
      },
      {
        label: "Backend e APIs",
        description: "APIs REST, validação e workers nos SaaS. FastAPI nas ferramentas Python; mensageria e processamento assíncrono com RabbitMQ e filas BullMQ.",
        items: ["Node.js", "NestJS", "Fastify", "Express", "FastAPI", "RabbitMQ", "BullMQ", "Zod"]
      },
      {
        label: "Dados e persistência",
        description: "Bancos relacionais e não relacionais: consultas SQL, migrations com Prisma, MongoDB, cache com Redis e armazenamento em produtos e ferramentas internas.",
        items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Upstash Redis", "SQLite"]
      },
      {
        label: "Cloud e operação",
        description: "Deploy com Cloud Run, Cloud SQL e Cloud Build no Google Cloud, além de Vercel e Railway. Containers, versionamento, CI/CD e monitoramento.",
        items: ["Google Cloud", "Vercel", "Railway", "Docker", "Git", "GitHub", "GitHub Actions", "Sentry"]
      },
      {
        label: "Testes e qualidade",
        description: "Testes automatizados, validação de fluxos no navegador, componentes em Storybook e análise estática.",
        items: ["Vitest", "Playwright", "Storybook", "ESLint", "Biome"]
      },
      {
        label: "IA e automação",
        description: "Desenvolvimento assistido por Claude Code, integração com Gemini no Dispatcher e busca de contexto com RAG e ChromaDB no Paulus.",
        items: ["Claude Code", "Gemini", "RAG", "ChromaDB"]
      },
      {
        label: "Integrações de produto",
        description: "Autenticação, pagamentos, WhatsApp e serviços fiscais: SOAP, mTLS, certificados A1 e XML na integração com a SEFAZ.",
        items: ["Clerk", "Cloudflare R2", "Socket.io", "AbacatePay", "Stripe", "SEFAZ", "Evolution API", "iFood"]
      },
      {
        label: "ERP e ferramentas corporativas",
        description: "Java e AngularJS na manutenção de ERP, JasperReports para relatórios e Redmine no fluxo de chamados e na integração do Dispatcher.",
        items: ["Java", "AngularJS", "JasperReports", "Redmine"]
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
        label: "Case delivery",
        value: "leafdelivery.com.br",
        href: "https://leafdelivery.com.br/",
        description: "SaaS de pedidos em produção, com NestJS, filas BullMQ e integrações de WhatsApp, iFood e PIX.",
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
        "Portfolio of Guilherme Bezzuoli Ramos: full stack developer with L1 to L3 ERP support experience, a tax SaaS in production, internal AI tools and integrations."
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
        "I'm <strong>Guilherme Bezzuoli Ramos</strong>, a full stack developer with almost 5 years at an ERP software company, from development intern to L3 support, plus self-built SaaS products in production. I work with TypeScript, Node.js/NestJS, React/Next.js and PostgreSQL, and years of client-facing ERP incident work taught me to turn business rules into reliable software.",
      manifestoTitle: "Page visual",
      manifestoText:
        "The visual system came from LeafDFe. I wanted a drier page with strong blocks and a few curves, without falling into generic portfolio styling.",
      ctaProjects: "See projects",
      ctaLeaf: "Open LeafDFe",
      identity: ["23 years old", "Brazil-based", "Native Portuguese", "English C1 (EF SET certified)"],
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
      eyebrow: "Main cases",
      title: "Two Leaf products: tax operations and booking."
    },
    evidence: {
      eyebrow: "Real proof",
      title: "Real interfaces, operational flows and end-to-end product work.",
      copy: "These views cover LeafDFe, Leaf Booking and Dispatcher without turning the portfolio into a screen dump."
    },
    featureCases: [
      {
        title: "LeafDFe",
        eyebrow: "Tax SaaS",
        summary:
          "Tax SaaS for moving Brazilian fiscal-document lookup, manifestation and storage out of manual routines, with billing, authentication and multi-company workflows in the same flow.",
        points: [
          "SEFAZ lookups and manifestation for NF-e, CT-e, MDF-e and NFS-e over SOAP/mTLS with A1 certificates.",
          "XML and DANFE downloads, cloud storage, reports and multi-company operation.",
          "Checkout, authentication, Redis, Prisma and Cloudflare R2 connected inside the product."
        ],
        stack: ["Next.js", "React", "TypeScript", "Prisma", "Clerk", "Upstash Redis", "Cloudflare R2", "AbacatePay", "SEFAZ"],
        link: { label: "leafdfe.com.br", href: "https://www.leafdfe.com.br/" },
        images: [
          {
            image: "./media/leaf-dashboard.png",
            alt: "Screenshot of the LeafDFe dashboard",
            title: "Tax dashboard"
          },
          {
            image: "./media/leaf-documentos.png",
            alt: "Screenshot of the LeafDFe document list",
            title: "Fiscal documents"
          },
          {
            image: "./media/leaf-multiempresas.png",
            alt: "Screenshot of the LeafDFe units and certificates view",
            title: "Multi-company"
          },
          {
            image: "./media/leaf-relatorios.png",
            alt: "Screenshot of LeafDFe reports",
            title: "Reports"
          }
        ]
      },
      {
        title: "Leaf Booking",
        eyebrow: "Multi-tenant booking SaaS",
        summary:
          "Online scheduling platform for service businesses, combining a mobile booking experience for customers with a complete daily workspace for operators.",
        points: [
          "Public booking in a few steps, Day | Week | Month calendar views and management for services, professionals and availability.",
          "Multi-tenant architecture designed for BR and IE markets, routing payments through PIX or Stripe according to country.",
          "Tenant-scoped notifications, reminders and WhatsApp integrations, with both operational admin and platform-level controls."
        ],
        stack: ["Next.js", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
        link: { label: "View code on GitHub", href: "https://github.com/ramosbezzu/leaf-booking" },
        images: [
          {
            image: "./media/leaf-booking-agenda.png",
            alt: "Leaf Booking daily schedule and operational calendar",
            title: "Operational calendar"
          },
          {
            image: "./media/leaf-booking-whatsapp.png",
            alt: "WhatsApp messages and reminders configuration in Leaf Booking",
            title: "WhatsApp automation"
          },
          {
            image: "./media/leaf-booking-pix.png",
            alt: "PIX payment and reconciliation configuration in Leaf Booking",
            title: "PIX payments and reconciliation"
          }
        ]
      }
    ],
    projectsSection: {
      eyebrow: "Selected work",
      title: "Four products that show where I add the most value.",
      copy:
        "Not everything can be public. So I focused on the problem, the technical choices and the kind of delivery behind each project instead of padding the page with generic copy."
    },
    businessSection: {
      eyebrow: "Business context",
      title: "Hands-on experience with ERP workflows, data, requirements and operations."
    },
    stackSection: {
      eyebrow: "Technologies and tools",
      title: "What I use to build, integrate and operate software."
    },
    contactSection: {
      eyebrow: "Contact",
      title: "If you want to talk about full stack development, technical support or automation, I'm available.",
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
      { value: "~5 yrs", label: "in ERP software, intern to L3" },
      { value: "300", label: "clients in the supported base" },
      { value: "20+", label: "client companies trained" },
      { value: "C1", label: "English (EF SET certified)" }
    ],
    projects: [
      {
        title: "LeafDFe",
        tone: "brand",
        status: "Live product",
        meta: "Tax SaaS / Next.js + Prisma + integrations",
        summary:
          "Tax SaaS that centralizes lookup, manifestation and storage of Brazilian fiscal documents to cut manual work from the fiscal team.",
        highlights: [
          "SEFAZ lookups and manifestation for NF-e, CT-e, MDF-e and NFS-e.",
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
        title: "Dispatcher",
        tone: "accent",
        status: "Internal AI tool at Softland",
        meta: "React + Vite + Express + SQLite + Gemini",
        summary:
          "Internal tool that turns support-call audio and notes into reports and Redmine tickets. Used by 3 analysts for 6 months, saving 2 to 3 hours of manual logging a day.",
        highlights: [
          "React/Vite interface built for repeated internal use.",
          "Express backend with authentication, rate limiting, Socket.io and SQLite persistence.",
          "Workflow tied to internal requests, AI transcription and corporate tooling."
        ],
        stack: ["React", "TypeScript", "Vite", "Express", "SQLite", "Socket.io", "Gemini"],
        links: []
      },
      {
        title: "Leaf Booking",
        tone: "paper",
        status: "Locally validated MVP",
        meta: "Booking SaaS / Next.js + NestJS + PostgreSQL",
        summary:
          "Multi-tenant scheduling platform for service businesses, with a mobile public booking flow and an operational calendar for the team.",
        highlights: [
          "Public booking, professional availability and day, week and month calendar views.",
          "Business admin for services, clients, professionals, branding, payments and notifications.",
          "Market-aware architecture with PIX in Brazil, Stripe in EUR and BullMQ queues for asynchronous jobs."
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "NestJS",
          "Prisma",
          "PostgreSQL",
          "Redis",
          "BullMQ"
        ],
        links: [{ label: "View repository", href: "https://github.com/ramosbezzu/leaf-booking" }]
      },
      {
        title: "Leaf Delivery",
        tone: "paper",
        status: "Live product",
        meta: "Ordering SaaS / NestJS + PostgreSQL",
        summary:
          "Multi-tenant ordering platform for restaurants and local businesses, with storefront, POS, kitchen display, WhatsApp, iFood and PIX.",
        highlights: [
          "Backend migrated from Next.js routes to NestJS/Fastify, with BullMQ workers on GCP Cloud Run.",
          "Vitest and Playwright tests and Sentry monitoring."
        ],
        stack: ["Next.js", "NestJS", "Fastify", "PostgreSQL", "Redis", "BullMQ"],
        links: [{ label: "Live product", href: "https://leafdelivery.com.br/" }]
      }
    ],
    galleryItems: [
      {
        label: "Leaf Booking",
        title: "Daily calendar for a multi-professional operation",
        image: "./media/leaf-booking-agenda.png",
        alt: "Leaf Booking daily schedule and operational calendar",
        fileHint: "leaf booking / calendar"
      },
      {
        label: "Leaf Booking",
        title: "Automated WhatsApp confirmations and reminders",
        image: "./media/leaf-booking-whatsapp.png",
        alt: "WhatsApp messages and reminders configuration in Leaf Booking",
        fileHint: "leaf booking / whatsapp"
      },
      {
        label: "Leaf Booking",
        title: "PIX setup, webhook and reconciliation workflow",
        image: "./media/leaf-booking-pix.png",
        alt: "PIX payment and reconciliation configuration in Leaf Booking",
        fileHint: "leaf booking / payments"
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
        title: "ERP support, from L1 to L3",
        description:
          "At Softland Sistemas I handled 15 to 30 tickets a day across a base of about 300 clients (188 on the legacy Delphi ERP), peaking at 50 clients in one day during a SEFAZ outage. I investigated incidents with SQL and logs and handed developers root cause and reproduction steps."
      },
      {
        title: "Client training",
        description:
          "I trained 20+ client companies on the Tax, CRM, Finance, Inventory and bank integration (CNAB 240 and 400) modules, including an on-site class of 10+ people."
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
        label: "Languages",
        description: "TypeScript, JavaScript and SQL in SaaS work. Python and Shell for tooling and automation; Java in professional ERP development.",
        items: ["TypeScript", "JavaScript", "SQL", "Python", "Shell", "Java"]
      },
      {
        label: "Frontend",
        description: "Interfaces for Leaf products and Dispatcher, including state management, data fetching and responsive layouts.",
        items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vite", "zustand", "SWR"]
      },
      {
        label: "Backend and APIs",
        description: "REST APIs, validation and workers in SaaS products. FastAPI for Python tools; messaging and async processing with RabbitMQ and BullMQ queues.",
        items: ["Node.js", "NestJS", "Fastify", "Express", "FastAPI", "RabbitMQ", "BullMQ", "Zod"]
      },
      {
        label: "Data and persistence",
        description: "Relational and non-relational databases: SQL queries, Prisma migrations, MongoDB, Redis caching and storage in products and internal tools.",
        items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Upstash Redis", "SQLite"]
      },
      {
        label: "Cloud and operations",
        description: "Deployment with Cloud Run, Cloud SQL and Cloud Build on Google Cloud, plus Vercel and Railway. Containers, version control, CI/CD and monitoring.",
        items: ["Google Cloud", "Vercel", "Railway", "Docker", "Git", "GitHub", "GitHub Actions", "Sentry"]
      },
      {
        label: "Testing and quality",
        description: "Automated tests, browser flow checks, components in Storybook and static analysis.",
        items: ["Vitest", "Playwright", "Storybook", "ESLint", "Biome"]
      },
      {
        label: "AI and automation",
        description: "AI-assisted development with Claude Code, Gemini integration in Dispatcher and context retrieval with RAG and ChromaDB in Paulus.",
        items: ["Claude Code", "Gemini", "RAG", "ChromaDB"]
      },
      {
        label: "Product integrations",
        description: "Authentication, payments, WhatsApp and fiscal services: SOAP, mTLS, A1 certificates and XML in the SEFAZ integration.",
        items: ["Clerk", "Cloudflare R2", "Socket.io", "AbacatePay", "Stripe", "SEFAZ", "Evolution API", "iFood"]
      },
      {
        label: "ERP and business tools",
        description: "Java and AngularJS in ERP maintenance, JasperReports for reports and Redmine in support workflows and the Dispatcher integration.",
        items: ["Java", "AngularJS", "JasperReports", "Redmine"]
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
        label: "Delivery case",
        value: "leafdelivery.com.br",
        href: "https://leafdelivery.com.br/",
        description: "Ordering SaaS in production, with NestJS, BullMQ queues and WhatsApp, iFood and PIX integrations.",
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
            ? `<img class="stack-tag__icon" src="${icon.src}" alt="" loading="lazy" onerror="this.parentElement.classList.remove('has-icon'); this.parentElement.classList.add('is-fallback'); this.remove();" />`
            : ""
        }
      </span>
      <span>${name}</span>
    </span>
  `;
}

function renderCaseSlideshow(items, label) {
  return `
    <div class="case-slideshow case-slideshow--${items.length}" aria-label="${label}">
      ${items
        .map(
          (item, index) => `
            <figure class="case-slide" style="--slide-index: ${index};">
              <img src="${item.image}" alt="${item.alt}" loading="lazy" />
              <figcaption>${item.title}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
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

function renderFeatureCases(content) {
  const container = document.querySelector("#feature-cases");
  if (!container) return;

  container.innerHTML = content.featureCases
    .map(
      (featureCase) => `
        <article class="feature-case" data-reveal>
          ${renderCaseSlideshow(featureCase.images, `${featureCase.title} slideshow`)}
          <div class="feature-case__body">
            <p class="feature-case__eyebrow">${featureCase.eyebrow}</p>
            <h3>${featureCase.title}</h3>
            <p class="feature-case__summary">${featureCase.summary}</p>
            <ul class="feature-case__points">
              ${featureCase.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
            <div class="feature-case__stack">
              ${featureCase.stack.map(renderStackTag).join("")}
            </div>
            <a class="feature-case__link" href="${featureCase.link.href}" target="_blank" rel="noreferrer">
              ${featureCase.link.label}
            </a>
          </div>
        </article>
      `
    )
    .join("");
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
                ? `<img class="stack-wall__icon" src="${icon.src}" alt="" loading="lazy" onerror="this.parentElement.classList.remove('has-icon'); this.parentElement.classList.add('is-fallback'); this.remove();" />`
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

  const bookingSlides = content.galleryItems.filter((item) => item.label === "Leaf Booking");
  const dfeSlides = content.galleryItems.filter((item) => item.label === "LeafDFe");
  const proofs = content.galleryItems.filter(
    (item) => !["Leaf Booking", "LeafDFe"].includes(item.label)
  );

  const renderProofs = (items) =>
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
    <article class="gallery-showcase" data-reveal>
      <div class="gallery-showcase__head">
        <p>LeafDFe</p>
        <span>fiscal / SaaS</span>
      </div>
      ${renderCaseSlideshow(dfeSlides, "LeafDFe slideshow")}
    </article>
    <article class="gallery-showcase" data-reveal>
      <div class="gallery-showcase__head">
        <p>Leaf Booking</p>
        <span>agendamento / SaaS</span>
      </div>
      ${renderCaseSlideshow(bookingSlides, "Leaf Booking slideshow")}
    </article>
    <div class="gallery-cluster gallery-cluster--proofs">
      ${renderProofs(proofs)}
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
          <h3 class="stack-group__label">${group.label}</h3>
          <p class="stack-group__description">${group.description}</p>
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
    { threshold: 0.01 }
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
  renderFeatureCases(content);
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
