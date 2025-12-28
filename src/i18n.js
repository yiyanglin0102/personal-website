// src/i18n.js

// Language selector options (UI)
export const LANGS = [
  { code: "en", label: "EN" },

  // Chinese variants
  { code: "zh-TW", label: "繁中" },
  { code: "zh-CN", label: "简中" },

  // Existing French
  { code: "fr", label: "FR" },

  // More languages
  { code: "ja", label: "日本語" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "ko", label: "한국어" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ภาษาไทย" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
];

// Map any language code to a base language we actually have translations for.
// You can gradually add full dictionaries later.
export function normalizeLang(lang) {
  if (!lang) return "en";
  // Handle Chinese variants -> use zh-TW/zh-CN if present, else zh
  if (lang === "zh-TW" || lang === "zh-HK") return "zh-TW";
  if (lang === "zh-CN" || lang === "zh-SG") return "zh-CN";

  // If you later add full dicts for these, you can remove mapping.
  if (lang === "ja") return "en";
  if (lang === "es") return "en";
  if (lang === "ar") return "en";
  if (lang === "ko") return "en";
  if (lang === "vi") return "en";
  if (lang === "th") return "en";
  if (lang === "de") return "en";
  if (lang === "nl") return "en";

  return lang; // en/fr/etc.
}

// Dictionary: keep minimal keys for now.
// For new languages we fallback to English until you add translations.
export const dict = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",

    hero_title: "Engineer",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Get in Touch",

    projects_subtitle: "A few things I’ve built recently.",

    theme_light: "Light",
    theme_dark: "Dark",
  },

  // Traditional Chinese (Taiwan)
  "zh-TW": {
    nav_about: "關於",
    nav_projects: "作品",
    nav_experience: "經歷",
    nav_education: "學歷",
    nav_contact: "聯絡",

    hero_title: "工程師",
    hero_cta_projects: "看作品",
    hero_cta_contact: "聯絡我",

    projects_subtitle: "最近做的一些專案。",

    theme_light: "淺色",
    theme_dark: "深色",
  },

  // Simplified Chinese (Mainland)
  "zh-CN": {
    nav_about: "关于",
    nav_projects: "作品",
    nav_experience: "经历",
    nav_education: "学历",
    nav_contact: "联系",

    hero_title: "工程师",
    hero_cta_projects: "看作品",
    hero_cta_contact: "联系我",

    projects_subtitle: "最近做的一些项目。",

    theme_light: "浅色",
    theme_dark: "深色",
  },

  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_education: "Formation",
    nav_contact: "Contact",

    hero_title: "Ingénieur",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",

    projects_subtitle: "Quelques projets récents.",

    theme_light: "Clair",
    theme_dark: "Sombre",
  },
};

export function t(lang, key) {
  const L = normalizeLang(lang);
  return dict?.[L]?.[key] ?? dict?.en?.[key] ?? key;
}
