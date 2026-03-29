/* =========================================================
 * Language selector options (UI)
 * ========================================================= */
export const LANGS = [
  { code: "en", label: "EN" },

  { code: "zh-TW", label: "繁中" },
  { code: "zh-CN", label: "简中" },

  { code: "fr", label: "FR" },

  { code: "ja", label: "日本語" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "ko", label: "한국어" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ภาษาไทย" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
];

/* =========================================================
 * Normalize language code
 * ========================================================= */
export function normalizeLang(lang) {
  if (!lang) return "en";

  if (lang === "zh-TW" || lang === "zh-HK") return "zh-TW";
  if (lang === "zh-CN" || lang === "zh-SG") return "zh-CN";

  return lang;
}

/* =========================================================
 * UI Dictionary
 * ========================================================= */
export const dict = {
  /* ---------- English ---------- */
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",

    hero_title: "Software Engineer",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Get in Touch",

    projects_subtitle: "A few things I’ve built recently.",

    highlights_label: "Highlights",

    stat_focus_k: "Focus",
    stat_focus_v: "Systems • Interfaces • Performance",
    stat_tz_k: "Timezone",
    stat_tz_v: "Europe/London (UTC+0)",

    contact_title: "Get in touch",
    contact_desc: "Have a project, idea, or question? Feel free to reach out.",
    contact_email_placeholder: "Your email",
    contact_message_placeholder: "Your message",
    contact_send: "Send",

    theme_light: "Light",
    theme_dark: "Dark",
  },

  /* ---------- Traditional Chinese ---------- */
  "zh-TW": {
    nav_about: "關於",
    nav_projects: "作品",
    nav_experience: "經歷",
    nav_education: "學歷",
    nav_contact: "聯絡",

    hero_title: "軟體工程師",
    hero_cta_projects: "作品",
    hero_cta_contact: "留言",

    projects_subtitle: "最近做的一些專案。",

    highlights_label: "重點",

    stat_focus_k: "重點",
    stat_focus_v: "系統 • 介面 • 效能",
    stat_tz_k: "時區",
    stat_tz_v: "Europe/London (UTC+0)",

    contact_title: "Get in touch",
    contact_desc: "有合作想法或問題，歡迎隨時留言。",
    contact_email_placeholder: "你的 Email",
    contact_message_placeholder: "你的訊息",
    contact_send: "送出",

    theme_light: "淺色",
    theme_dark: "深色",
  },

  /* ---------- Simplified Chinese ---------- */
  "zh-CN": {
    nav_about: "关于",
    nav_projects: "作品",
    nav_experience: "经历",
    nav_education: "学历",
    nav_contact: "联系",

    hero_title: "软件工程师",
    hero_cta_projects: "作品",
    hero_cta_contact: "联系",

    projects_subtitle: "最近的一些项目。",

    highlights_label: "重点",

    stat_focus_k: "重点",
    stat_focus_v: "系统 • 界面 • 性能",
    stat_tz_k: "时区",
    stat_tz_v: "Europe/London (UTC+0)",

    contact_title: "Get in touch",
    contact_desc: "有合作想法或问题，欢迎随时留言。",
    contact_email_placeholder: "你的邮箱",
    contact_message_placeholder: "你的留言",
    contact_send: "发送",

    theme_light: "浅色",
    theme_dark: "深色",
  },

  /* ---------- French ---------- */
  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_education: "Formation",
    nav_contact: "Contact",

    hero_title: "Ingénieur logiciel",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",

    projects_subtitle: "Quelques projets récents.",

    highlights_label: "Points forts",

    stat_focus_k: "Focus",
    stat_focus_v: "Systèmes • Interfaces • Performance",
    stat_tz_k: "Fuseau horaire",
    stat_tz_v: "Europe/London (UTC+0)",

    contact_title: "Get in touch",
    contact_desc: "Une idée, un projet ou une question ? Écrivez-moi.",
    contact_email_placeholder: "Votre email",
    contact_message_placeholder: "Votre message",
    contact_send: "Envoyer",

    theme_light: "Clair",
    theme_dark: "Sombre",
  },

  /* ---------- Japanese ---------- */
  ja: {
    nav_about: "概要",
    nav_projects: "プロジェクト",
    nav_experience: "経験",
    nav_education: "学歴",
    nav_contact: "連絡先",

    hero_title: "ソフトウェアエンジニア",
    hero_cta_projects: "プロジェクトを見る",
    hero_cta_contact: "連絡する",

    projects_subtitle: "最近作ったものの一部です。",

    highlights_label: "ポイント",

    stat_focus_k: "注力",
    stat_focus_v: "システム • インターフェース • パフォーマンス",
    stat_tz_k: "タイムゾーン",
    stat_tz_v: "Europe/London (UTC+0)",

    contact_title: "Get in touch",
    contact_desc: "プロジェクトや質問があればお気軽にご連絡ください。",
    contact_email_placeholder: "メールアドレス",
    contact_message_placeholder: "メッセージ",
    contact_send: "送信",

    theme_light: "ライト",
    theme_dark: "ダーク",
  },

  /* ---------- Spanish ---------- */
  es: {
    nav_about: "Acerca de",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_education: "Educación",
    nav_contact: "Contacto",

    hero_title: "Ingeniero de software",
    hero_cta_projects: "Ver proyectos",
    hero_cta_contact: "Contactar",

    projects_subtitle: "Algunas cosas que he construido recientemente.",

    highlights_label: "Destacados",

    stat_focus_k: "Enfoque",
    stat_focus_v: "Sistemas • Interfaces • Rendimiento",
    stat_tz_k: "Zona horaria",
    stat_tz_v: "Europe/London (UTC+0)",

    contact_title: "Get in touch",
    contact_desc: "¿Tienes un proyecto o una pregunta? Escríbeme.",
    contact_email_placeholder: "Tu correo",
    contact_message_placeholder: "Tu mensaje",
    contact_send: "Enviar",

    theme_light: "Claro",
    theme_dark: "Oscuro",
  },
};

/* =========================================================
 * Translation helper
 * ========================================================= */
export function t(lang, key) {
  const L = normalizeLang(lang);
  return dict?.[L]?.[key] ?? dict?.en?.[key] ?? key;
}