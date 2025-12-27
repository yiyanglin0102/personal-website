// src/i18n.js
export const LANGS = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "fr", label: "FR" },
];

// Minimal dictionary. Add/adjust keys as you like.
export const dict = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",

    hero_title: "Software Engineer",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Get in Touch",

    projects_subtitle: "A few things I’ve built recently.",
    contact_body: "Want to work together? Email me and I’ll reply soon.",
    contact_cta: "Email me",

    theme_light: "Light",
    theme_dark: "Dark",
  },
  zh: {
    nav_about: "關於",
    nav_projects: "作品",
    nav_experience: "經歷",
    nav_contact: "聯絡",

    hero_title: "軟體工程師",
    hero_cta_projects: "看作品",
    hero_cta_contact: "聯絡我",

    projects_subtitle: "最近做的一些專案。",
    contact_body: "想合作嗎？寄信給我，我會盡快回覆。",
    contact_cta: "寄信給我",

    theme_light: "淺色",
    theme_dark: "深色",
  },
  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_contact: "Contact",

    hero_title: "Ingénieur Logiciel",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",

    projects_subtitle: "Quelques projets récents.",
    contact_body: "Envie de collaborer ? Écrivez-moi et je répondrai rapidement.",
    contact_cta: "M’écrire",

    theme_light: "Clair",
    theme_dark: "Sombre",
  },
};

export function t(lang, key) {
  return dict?.[lang]?.[key] ?? dict?.en?.[key] ?? key;
}
