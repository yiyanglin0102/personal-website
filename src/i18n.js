// src/i18n.js

/* =========================================================
 * Language selector options (UI)
 * ========================================================= */
export const LANGS = [
  { code: "en", label: "EN" },

  // Chinese variants
  { code: "zh-TW", label: "繁中" },
  { code: "zh-CN", label: "简中" },

  // French
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

/* =========================================================
 * Normalize language code
 * ========================================================= */
export function normalizeLang(lang) {
  if (!lang) return "en";

  // Chinese variants
  if (lang === "zh-TW" || lang === "zh-HK") return "zh-TW";
  if (lang === "zh-CN" || lang === "zh-SG") return "zh-CN";

  return lang; // keep all (ja/es/ar/ko/vi/th/de/nl)
}

/* =========================================================
 * UI Dictionary (ALL languages included)
 * ========================================================= */
export const dict = {
  /* ---------- English ---------- */
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

    // About section panel title
    highlights_label: "Highlights",

    // Hero card stats
    stat_focus_k: "Focus",
    stat_focus_v: "React • Systems • Performance",
    stat_open_k: "Open to",
    stat_open_v: "Frontend / Full-Stack roles",
    stat_tz_k: "Timezone",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    // Contact block (left title + description + placeholders + button)
    contact_title: "Get in touch",
    contact_desc: "Have a project, idea, or question? Feel free to reach out.",
    contact_email_placeholder: "Your email",
    contact_message_placeholder: "Your message",
    contact_send: "Send",

    theme_light: "Light",
    theme_dark: "Dark",
  },

  /* ---------- Traditional Chinese (Taiwan) ---------- */
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

    highlights_label: "重點",

    stat_focus_k: "重點",
    stat_focus_v: "React • 系統 • 效能",
    stat_open_k: "目標",
    stat_open_v: "前端 / 全端職缺",
    stat_tz_k: "時區",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "聯絡我",
    contact_desc: "有合作想法或問題，歡迎隨時留言。",
    contact_email_placeholder: "你的 Email",
    contact_message_placeholder: "你的訊息",
    contact_send: "送出",

    theme_light: "淺色",
    theme_dark: "深色",
  },

  /* ---------- Simplified Chinese (Mainland) ---------- */
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

    highlights_label: "重点",

    stat_focus_k: "重点",
    stat_focus_v: "React • 系统 • 性能",
    stat_open_k: "目标",
    stat_open_v: "前端 / 全栈岗位",
    stat_tz_k: "时区",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "联系我",
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

    hero_title: "Ingénieur",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",

    projects_subtitle: "Quelques projets récents.",

    highlights_label: "Points forts",

    stat_focus_k: "Focus",
    stat_focus_v: "React • Systèmes • Performance",
    stat_open_k: "Ouvert à",
    stat_open_v: "Postes Frontend / Full-stack",
    stat_tz_k: "Fuseau horaire",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "Entrer en contact",
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

    hero_title: "エンジニア",
    hero_cta_projects: "プロジェクトを見る",
    hero_cta_contact: "連絡する",

    projects_subtitle: "最近作ったものの一部です。",

    highlights_label: "ポイント",

    stat_focus_k: "注力",
    stat_focus_v: "React • システム • パフォーマンス",
    stat_open_k: "希望",
    stat_open_v: "フロントエンド / フルスタック",
    stat_tz_k: "タイムゾーン",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "お問い合わせ",
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

    hero_title: "Ingeniero",
    hero_cta_projects: "Ver proyectos",
    hero_cta_contact: "Contactar",

    projects_subtitle: "Algunas cosas que he construido recientemente.",

    highlights_label: "Destacados",

    stat_focus_k: "Enfoque",
    stat_focus_v: "React • Sistemas • Rendimiento",
    stat_open_k: "Interesado en",
    stat_open_v: "Roles Frontend / Full-stack",
    stat_tz_k: "Zona horaria",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "Ponte en contacto",
    contact_desc: "¿Tienes un proyecto o una pregunta? Escríbeme.",
    contact_email_placeholder: "Tu correo",
    contact_message_placeholder: "Tu mensaje",
    contact_send: "Enviar",

    theme_light: "Claro",
    theme_dark: "Oscuro",
  },

  /* ---------- Arabic (RTL language) ---------- */
  ar: {
    nav_about: "نبذة",
    nav_projects: "المشاريع",
    nav_experience: "الخبرة",
    nav_education: "التعليم",
    nav_contact: "تواصل",

    hero_title: "مهندس",
    hero_cta_projects: "عرض المشاريع",
    hero_cta_contact: "تواصل معي",

    projects_subtitle: "بعض الأعمال التي أنجزتها مؤخرًا.",

    highlights_label: "أبرز النقاط",

    stat_focus_k: "التركيز",
    stat_focus_v: "React • الأنظمة • الأداء",
    stat_open_k: "متاح لـ",
    stat_open_v: "أدوار Frontend / Full-Stack",
    stat_tz_k: "المنطقة الزمنية",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "تواصل معي",
    contact_desc: "هل لديك مشروع أو فكرة أو سؤال؟ يسعدني التواصل.",
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
    nav_contact: "연락처",

    hero_title: "엔지니어",
    hero_cta_projects: "프로젝트 보기",
    hero_cta_contact: "연락하기",

    projects_subtitle: "최근에 만든 프로젝트 일부입니다.",

    highlights_label: "핵심",

    stat_focus_k: "포커스",
    stat_focus_v: "React • 시스템 • 성능",
    stat_open_k: "관심 포지션",
    stat_open_v: "프론트엔드 / 풀스택",
    stat_tz_k: "시간대",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "문의하기",
    contact_desc: "프로젝트/아이디어/질문이 있으면 편하게 연락 주세요.",
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

    hero_title: "Kỹ sư",
    hero_cta_projects: "Xem dự án",
    hero_cta_contact: "Liên hệ",

    projects_subtitle: "Một vài sản phẩm tôi xây dựng gần đây.",

    highlights_label: "Điểm nổi bật",

    stat_focus_k: "Tập trung",
    stat_focus_v: "React • Hệ thống • Hiệu năng",
    stat_open_k: "Quan tâm",
    stat_open_v: "Vị trí Frontend / Full-stack",
    stat_tz_k: "Múi giờ",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "Kết nối",
    contact_desc: "Có dự án, ý tưởng hay câu hỏi? Hãy nhắn cho tôi.",
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

    hero_title: "วิศวกร",
    hero_cta_projects: "ดูผลงาน",
    hero_cta_contact: "ติดต่อฉัน",

    projects_subtitle: "ตัวอย่างผลงานที่ทำล่าสุดบางส่วน",

    highlights_label: "จุดเด่น",

    stat_focus_k: "โฟกัส",
    stat_focus_v: "React • ระบบ • ประสิทธิภาพ",
    stat_open_k: "สนใจงาน",
    stat_open_v: "Frontend / Full-stack",
    stat_tz_k: "เขตเวลา",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "ติดต่อฉัน",
    contact_desc: "มีโปรเจกต์ ไอเดีย หรือคำถาม? ติดต่อมาได้เลย",
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

    hero_title: "Ingenieur",
    hero_cta_projects: "Projekte ansehen",
    hero_cta_contact: "Kontakt aufnehmen",

    projects_subtitle: "Ein paar Dinge, die ich kürzlich gebaut habe.",

    highlights_label: "Highlights",

    stat_focus_k: "Fokus",
    stat_focus_v: "React • Systeme • Performance",
    stat_open_k: "Offen für",
    stat_open_v: "Frontend / Full-Stack Rollen",
    stat_tz_k: "Zeitzone",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "Kontakt",
    contact_desc: "Projekt, Idee oder Frage? Schreib mir gern.",
    contact_email_placeholder: "Deine E-Mail",
    contact_message_placeholder: "Deine Nachricht",
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

    hero_title: "Ingenieur",
    hero_cta_projects: "Bekijk projecten",
    hero_cta_contact: "Neem contact op",

    projects_subtitle: "Een paar dingen die ik onlangs heb gebouwd.",

    highlights_label: "Highlights",

    stat_focus_k: "Focus",
    stat_focus_v: "React • Systemen • Performance",
    stat_open_k: "Open voor",
    stat_open_v: "Frontend / Full-stack rollen",
    stat_tz_k: "Tijdzone",
    stat_tz_v: "Asia/Taipei (UTC+8)",

    contact_title: "Neem contact op",
    contact_desc:
      "Heb je een project, idee of vraag? Stuur gerust een bericht.",
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
