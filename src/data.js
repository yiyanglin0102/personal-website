// src/data.js

export const profile = {
  name: {
    en: "Yi Yang Lin",
    zh: "林益揚",
    fr: "Yi Yang Lin",
  },
  title: {
    en: "Software Engineer",
    zh: "軟體工程師",
    fr: "Ingénieur Logiciel",
  },
  tagline: {
    en: "Build fast, polished web experiences.",
    zh: "打造快速、精緻且易用的網頁體驗。",
    fr: "Je crée des expériences web rapides et soignées.",
  },
  location: {
    en: "Taipei • Remote",
    zh: "台北 • 遠端",
    fr: "Taipei • Télétravail",
  },
  email: "yiyanglin0102@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yiyanglin0102/" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yiyang-lin/" },
    { label: "Resume", href: "/files/Yi-Yang_Lin-CV.pdf" },
  ],
};

/* ================= ABOUT ================= */

export const about = {
  headline: {
    en: "About",
    zh: "關於我",
    fr: "À propos",
  },
  body: {
    en: [
      "I’m a software engineer focused on building reliable, user-friendly products.",
      "I enjoy working with React, TypeScript, system design, and performance optimization.",
    ],
    zh: [
      "我是一名軟體工程師，專注於打造穩定且易用的產品。",
      "我喜歡使用 React、TypeScript，並投入系統設計與效能優化。",
    ],
    fr: [
      "Je suis ingénieur logiciel, spécialisé dans la création de produits fiables et intuitifs.",
      "J’aime travailler avec React, TypeScript, l’architecture logicielle et la performance.",
    ],
  },
  highlights: {
    en: [
      "React & modern UI",
      "APIs, AWS & scalability",
      "Strong testing & DX habits",
    ],
    zh: [
      "React 與現代化 UI",
      "API、AWS 與可擴展架構",
      "重視測試與開發者體驗",
    ],
    fr: [
      "React et UI modernes",
      "APIs, AWS et scalabilité",
      "Bonnes pratiques de test & DX",
    ],
  },
};

/* ================= PROJECTS ================= */

export const projects = [
  {
    title: {
      en: "Project Atlas",
      zh: "Atlas 專案",
      fr: "Projet Atlas",
    },
    description: {
      en: "A dashboard that visualizes real-time metrics with clean UX and fast performance.",
      zh: "即時數據儀表板，兼顧清晰的 UX 與高效能。",
      fr: "Un tableau de bord affichant des métriques en temps réel avec une UX fluide.",
    },
    tags: ["React", "Node.js", "AWS"],
    links: [
      { label: "Live", href: "https://example.com" },
      { label: "Code", href: "https://github.com/" },
    ],
  },
  {
    title: {
      en: "Checkout Kit",
      zh: "結帳模組",
      fr: "Kit de Paiement",
    },
    description: {
      en: "A payments integration kit with webhooks, retries, and observability.",
      zh: "包含 Webhook、重試機制與監控的金流整合模組。",
      fr: "Un module de paiement avec webhooks, retries et observabilité.",
    },
    tags: ["Stripe", "Serverless", "DynamoDB"],
    links: [{ label: "Case Study", href: "https://example.com" }],
  },
  {
    title: {
      en: "Realtime Chat",
      zh: "即時聊天室",
      fr: "Chat Temps Réel",
    },
    description: {
      en: "A chat app with typing indicators, attachments, and unread counters.",
      zh: "支援輸入提示、附件與未讀計數的聊天室。",
      fr: "Application de chat avec indicateurs de frappe et pièces jointes.",
    },
    tags: ["GraphQL", "Subscriptions", "React"],
    links: [{ label: "Code", href: "https://github.com/" }],
  },
];

/* ================= EXPERIENCE ================= */

export const experience = [
  {
    role: {
      en: "Tech Support Associate",
      zh: "技術支援工程師",
      fr: "Support Technique",
    },
    company: "Company Name",
    period: "2024 — Present",
    bullets: {
      en: [
        "Improved incident response and customer issue triage.",
        "Built internal tools to speed up diagnostics and reporting.",
      ],
      zh: [
        "改善客戶事件回應流程與問題分類效率。",
        "開發內部工具以加快除錯與回報速度。",
      ],
      fr: [
        "Amélioration du traitement des incidents clients.",
        "Création d’outils internes pour accélérer le diagnostic.",
      ],
    },
  },
  {
    role: {
      en: "Software Engineer",
      zh: "軟體工程師",
      fr: "Ingénieur Logiciel",
    },
    company: "Previous Company",
    period: "2022 — 2024",
    bullets: {
      en: [
        "Owned features from design to production.",
        "Optimized performance and reduced bundle size.",
      ],
      zh: [
        "負責功能從設計到上線的完整流程。",
        "優化效能並縮小前端 bundle 大小。",
      ],
      fr: [
        "Responsable des fonctionnalités de la conception à la production.",
        "Optimisation des performances et réduction du bundle.",
      ],
    },
  },
];

/* ================= CONTACT ================= */

export const contact = {
  headline: {
    en: "Contact",
    zh: "聯絡我",
    fr: "Contact",
  },
  body: {
    en: "Want to work together? Email me and I’ll reply soon.",
    zh: "有合作想法嗎？歡迎寄信給我。",
    fr: "Envie de collaborer ? Écrivez-moi.",
  },
  ctaLabel: {
    en: "Email me",
    zh: "寄信給我",
    fr: "M’écrire",
  },
};
