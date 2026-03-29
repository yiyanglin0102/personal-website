// src/i18n.js

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
    hero_cta_contact: "Contact",

    projects_subtitle: "A few things I’ve built recently.",

    highlights_label: "Highlights",

    stat_focus_k: "Focus",
    stat_focus_v: "Systems • Interfaces • Performance",
    stat_tz_k: "Timezone",
    stat_tz_v: "London (UTC+0)",

    contact_title: "Get in Touch",
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
    stat_tz_v: "倫敦（UTC+0）",

    contact_title: "Get in Touch",
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
    hero_cta_contact: "留言",

    projects_subtitle: "最近的一些项目。",

    highlights_label: "重点",

    stat_focus_k: "重点",
    stat_focus_v: "系统 • 界面 • 性能",
    stat_tz_k: "时区",
    stat_tz_v: "伦敦（UTC+0）",

    contact_title: "Get in Touch",
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
    hero_cta_contact: "Contact",

    projects_subtitle: "Quelques projets récents.",

    highlights_label: "Points forts",

    stat_focus_k: "Focus",
    stat_focus_v: "Systèmes • Interfaces • Performance",
    stat_tz_k: "Fuseau horaire",
    stat_tz_v: "Londres (UTC+0)",

    contact_title: "Get in Touch",
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
    hero_cta_contact: "お問い合わせ",

    projects_subtitle: "最近作ったものの一部です。",

    highlights_label: "ポイント",

    stat_focus_k: "注力",
    stat_focus_v: "システム • インターフェース • パフォーマンス",
    stat_tz_k: "タイムゾーン",
    stat_tz_v: "ロンドン（UTC+0）",

    contact_title: "Get in Touch",
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
    hero_cta_contact: "Contacto",

    projects_subtitle: "Algunas cosas que he construido recientemente.",

    highlights_label: "Destacados",

    stat_focus_k: "Enfoque",
    stat_focus_v: "Sistemas • Interfaces • Rendimiento",
    stat_tz_k: "Zona horaria",
    stat_tz_v: "Londres (UTC+0)",

    contact_title: "Get in Touch",
    contact_desc: "¿Tienes un proyecto o una pregunta? Escríbeme.",
    contact_email_placeholder: "Tu correo",
    contact_message_placeholder: "Tu mensaje",
    contact_send: "Enviar",

    theme_light: "Claro",
    theme_dark: "Oscuro",
  },

  /* ---------- Arabic ---------- */
  ar: {
    nav_about: "نبذة",
    nav_projects: "المشاريع",
    nav_experience: "الخبرة",
    nav_education: "التعليم",
    nav_contact: "تواصل",

    hero_title: "مهندس برمجيات",
    hero_cta_projects: "عرض المشاريع",
    hero_cta_contact: "تواصل",

    projects_subtitle: "بعض الأشياء التي قمت ببنائها مؤخرًا.",

    highlights_label: "أبرز النقاط",

    stat_focus_k: "التركيز",
    stat_focus_v: "الأنظمة • الواجهات • الأداء",
    stat_tz_k: "المنطقة الزمنية",
    stat_tz_v: "لندن (UTC+0)",

    contact_title: "Get in Touch",
    contact_desc: "هل لديك مشروع أو فكرة أو سؤال؟ لا تتردد في التواصل.",
    contact_email_placeholder: "بريدك الإلكتروني",
    contact_message_placeholder: "رسالتك",
    contact_send: "إرسال",

    theme_light: "فاتح",
    theme_dark: "داكن",
  },

  /* ---------- Korean ---------- */
  ko: {
    nav_about: "소개",
    nav_projects: "프로젝트",
    nav_experience: "경력",
    nav_education: "학력",
    nav_contact: "연락",

    hero_title: "소프트웨어 엔지니어",
    hero_cta_projects: "프로젝트 보기",
    hero_cta_contact: "연락",

    projects_subtitle: "최근에 만든 프로젝트 일부입니다.",

    highlights_label: "핵심",

    stat_focus_k: "집중 분야",
    stat_focus_v: "시스템 • 인터페이스 • 성능",
    stat_tz_k: "시간대",
    stat_tz_v: "런던 (UTC+0)",

    contact_title: "Get in Touch",
    contact_desc: "프로젝트나 질문이 있다면 언제든지 연락하세요.",
    contact_email_placeholder: "이메일",
    contact_message_placeholder: "메시지",
    contact_send: "보내기",

    theme_light: "라이트",
    theme_dark: "다크",
  },

  /* ---------- Vietnamese ---------- */
  vi: {
    nav_about: "Giới thiệu",
    nav_projects: "Dự án",
    nav_experience: "Kinh nghiệm",
    nav_education: "Học vấn",
    nav_contact: "Liên hệ",

    hero_title: "Kỹ sư phần mềm",
    hero_cta_projects: "Xem dự án",
    hero_cta_contact: "Liên hệ",

    projects_subtitle: "Một vài dự án tôi đã xây dựng gần đây.",

    highlights_label: "Điểm nổi bật",

    stat_focus_k: "Trọng tâm",
    stat_focus_v: "Hệ thống • Giao diện • Hiệu năng",
    stat_tz_k: "Múi giờ",
    stat_tz_v: "Luân Đôn (UTC+0)",

    contact_title: "Get in Touch",
    contact_desc: "Bạn có dự án hay câu hỏi? Hãy gửi tin nhắn cho tôi.",
    contact_email_placeholder: "Email của bạn",
    contact_message_placeholder: "Tin nhắn của bạn",
    contact_send: "Gửi",

    theme_light: "Sáng",
    theme_dark: "Tối",
  },

  /* ---------- Thai ---------- */
  th: {
    nav_about: "เกี่ยวกับ",
    nav_projects: "ผลงาน",
    nav_experience: "ประสบการณ์",
    nav_education: "การศึกษา",
    nav_contact: "ติดต่อ",

    hero_title: "วิศวกรซอฟต์แวร์",
    hero_cta_projects: "ดูผลงาน",
    hero_cta_contact: "ติดต่อ",

    projects_subtitle: "ตัวอย่างผลงานที่ผมสร้างขึ้นล่าสุด",

    highlights_label: "จุดเด่น",

    stat_focus_k: "โฟกัส",
    stat_focus_v: "ระบบ • อินเทอร์เฟซ • ประสิทธิภาพ",
    stat_tz_k: "เขตเวลา",
    stat_tz_v: "ลอนดอน (UTC+0)",

    contact_title: "Get in Touch",
    contact_desc: "มีโปรเจกต์ ไอเดีย หรือคำถาม? ติดต่อผมได้เลย",
    contact_email_placeholder: "อีเมลของคุณ",
    contact_message_placeholder: "ข้อความของคุณ",
    contact_send: "ส่ง",

    theme_light: "สว่าง",
    theme_dark: "มืด",
  },

  /* ---------- German ---------- */
  de: {
    nav_about: "Über mich",
    nav_projects: "Projekte",
    nav_experience: "Erfahrung",
    nav_education: "Ausbildung",
    nav_contact: "Kontakt",

    hero_title: "Softwareingenieur",
    hero_cta_projects: "Projekte ansehen",
    hero_cta_contact: "Kontakt",

    projects_subtitle: "Einige Projekte, die ich kürzlich gebaut habe.",

    highlights_label: "Highlights",

    stat_focus_k: "Fokus",
    stat_focus_v: "Systeme • Schnittstellen • Performance",
    stat_tz_k: "Zeitzone",
    stat_tz_v: "London (UTC+0)",

    contact_title: "Get in Touch",
    contact_desc: "Haben Sie ein Projekt oder eine Frage? Schreiben Sie mir.",
    contact_email_placeholder: "Ihre E-Mail",
    contact_message_placeholder: "Ihre Nachricht",
    contact_send: "Senden",

    theme_light: "Hell",
    theme_dark: "Dunkel",
  },

  /* ---------- Dutch ---------- */
  nl: {
    nav_about: "Over mij",
    nav_projects: "Projecten",
    nav_experience: "Ervaring",
    nav_education: "Opleiding",
    nav_contact: "Contact",

    hero_title: "Software engineer",
    hero_cta_projects: "Bekijk projecten",
    hero_cta_contact: "Contact",

    projects_subtitle: "Een paar projecten die ik onlangs heb gebouwd.",

    highlights_label: "Highlights",

    stat_focus_k: "Focus",
    stat_focus_v: "Systemen • Interfaces • Performance",
    stat_tz_k: "Tijdzone",
    stat_tz_v: "Londen (UTC+0)",

    contact_title: "Get in Touch",
    contact_desc: "Heb je een project of vraag? Stuur gerust een bericht.",
    contact_email_placeholder: "Je e-mail",
    contact_message_placeholder: "Je bericht",
    contact_send: "Versturen",

    theme_light: "Licht",
    theme_dark: "Donker",
  },
};

/* =========================================================
 * Translation helper
 * ========================================================= */
export function t(lang, key) {
  const L = normalizeLang(lang);
  return dict?.[L]?.[key] ?? dict?.en?.[key] ?? key;
}