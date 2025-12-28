// src/data.js
// Converted from your legacy HTML portfolio into the data model your React app expects.
// Notes:
// - Put /public/profile.png and /public/resume.pdf (or rename paths below).
// - Project "media" can be handled in ProjectCard: youtubeEmbed | image | linkPreview.

export const profile = {
  name: {
    en: "Yi-Yang Lin",
    zh: "林益揚",
    fr: "Yi-Yang Lin",
  },
  title: {
    en: "Software | Hardware | Operations",
    zh: "軟體 | 硬體 | 營運",
    fr: "Logiciel | Matériel | Opérations",
  },
  tagline: {
    en: "Computer science professional passionate about solving complex problems with engineering.",
    zh: "熱愛用工程解決複雜問題的資工背景工程師。",
    fr: "Ingénieur passionné par la résolution de problèmes complexes.",
  },
  location: {
    en: "Taipei • Remote",
    zh: "台北 • 遠端",
    fr: "Taipei • Télétravail",
  },
  email: "yiyanglin0102@gmail.com",
  socials: [
    { label: "CV", href: "/files/Yi-Yang_Lin-CV.pdf" }, // if you move to /public, use "/Yi-Yang_Lin-CV.pdf"
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yiyang-lin/" },
    { label: "GitHub", href: "https://github.com/yiyanglin0102/" },
    { label: "Email", href: "mailto:yiyanglin0102@gmail.com" },
    { label: "Phone", href: "tel:2063552065" },
    { label: "LINE", href: "https://line.me/ti/p/RpwCL5pov5" },
    { label: "WeChat", href: "weixin://contacts/profile/yiyanglin0102" },
    {
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=+12063552065",
    },
  ],
};

/* ================= ABOUT ================= */

export const about = {
  headline: {
    en: "About Me",
    zh: "關於我",
    fr: "À propos",
  },
  // Keep the first paragraph short for the top area. Keep the long paragraph as a second item.
  body: {
    en: [
      "Welcome to my personal web page! My name is Yi-Yang Lin, and I'm a computer science professional with a passion for using engineering to solve complex problems and create innovative solutions...",
      "With a strong background in Computer Science, I'm deeply passionate about leveraging technology to address intricate challenges and pioneer innovative solutions within the software, hardware, and healthcare industry. Over the years, I've honed my expertise in both software and hardware through diverse projects across academia and industry, including WiFi, Bluetooth, 5G mobile tool validation, course projects, and personal initiatives. I’m seeking opportunities to take on complex problems and collaborate with cutting-edge technologies. If you're curious to learn more about my work or explore potential collaborations, feel free to reach out. Thank you for visiting—excited to connect!",
    ],
    zh: [
      "歡迎來到我的個人網站！我叫林益揚，擁有資工背景，熱愛用工程解決複雜問題並打造創新解決方案……",
      "我具備扎實的電腦科學背景，致力於運用科技解決具挑戰性的問題，並在軟體、硬體以及醫療相關領域推動創新。多年來我透過學術與業界多元專案累積軟硬整合能力，包含 WiFi、Bluetooth、5G 測試工具驗證、課程專案及個人專案等。我正在尋找新的機會，期待與前沿技術一起解決困難問題、交付成果。若你想更了解我的作品或討論合作，歡迎隨時聯絡。謝謝你的造訪，期待認識你！",
    ],
    fr: [
      "Bienvenue sur mon site ! Je m’appelle Yi-Yang Lin, ingénieur en informatique passionné par la résolution de problèmes complexes et la création de solutions innovantes…",
      "Avec une solide formation en informatique, je suis motivé par l’idée d’utiliser la technologie pour résoudre des défis ambitieux dans les domaines du logiciel, du matériel et de la santé. J’ai acquis de l’expérience via des projets variés (WiFi, Bluetooth, validation d’outils 5G, projets académiques et personnels). Je recherche des opportunités pour travailler sur des sujets complexes et collaborer avec des technologies de pointe. N’hésitez pas à me contacter pour échanger—merci de votre visite !",
    ],
  },
  highlights: {
    en: [
      "Software + hardware experience",
      "RF / WiFi / Bluetooth validation background",
      "Strong tooling, automation, and problem-solving",
    ],
    zh: [
      "軟硬體整合經驗",
      "RF / WiFi / Bluetooth 驗證背景",
      "重視自動化、工具化與問題拆解",
    ],
    fr: [
      "Expérience logiciel + matériel",
      "Validation RF / WiFi / Bluetooth",
      "Automatisation, outillage, résolution de problèmes",
    ],
  },
};

/* ================= PROJECTS ================= */
/**
 * Recommended shape for ProjectCard:
 * - title, description can be language objects
 * - media: { type: "youtube"|"image"|"link", ... }
 */
export const projects = [
  {
    title: {
      en: "Iris Recognition in CNN ResNet",
      zh: "CNN ResNet 虹膜辨識",
      fr: "Reconnaissance d’iris (CNN ResNet)",
    },
    description: {
      en: "Explored CNN-based iris recognition, building on foundational work by John Daugman and Libor Masek. Integrated preprocessing and ResNet models to improve accuracy.",
      zh: "研究以 CNN 強化虹膜辨識，結合前處理與 ResNet 模型以提升辨識準確度。",
      fr: "Étude de la reconnaissance d’iris via CNN, avec prétraitement et modèles ResNet pour améliorer la précision.",
    },
    tags: ["Deep Learning", "CNN", "ResNet"],
    media: { type: "youtube", embedId: "8YlDx2TiurQ", width: 320, height: 220 },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/Iris_Recognition_in_Deep_Learning",
      },
    ],
  },
  {
    title: {
      en: "Electronic Health Record System",
      zh: "電子病歷系統",
      fr: "Système de dossier médical électronique",
    },
    description: {
      en: "A healthcare web app for physicians, staff, and patients. Supports reservation/calendar events, patient management, and messaging.",
      zh: "提供醫師/院方/病患使用的醫療系統：行事曆預約、病患管理與訊息功能。",
      fr: "Application de santé : calendrier/réservations, gestion patient, messagerie.",
    },
    tags: ["Web", "Healthcare", "Full-stack"],
    media: { type: "youtube", embedId: "yAvIbZjLZE8", width: 320, height: 220 },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/Server-Side-Web-Development/tree/main/Term_Project/Code",
      },
    ],
  },
  {
    title: {
      en: "OpenAI Chatbot Integration",
      zh: "OpenAI 聊天機器人整合",
      fr: "Intégration Chatbot OpenAI",
    },
    description: {
      en: "Real-time web chat app integrating OpenAI (GPT-4) via API, deployed with AWS Amplify, Lambda, and API Gateway.",
      zh: "整合 OpenAI API 的即時聊天應用，並使用 AWS Amplify/Lambda/API Gateway 部署。",
      fr: "Chat temps réel intégrant l’API OpenAI, déployé sur AWS (Amplify/Lambda/API Gateway).",
    },
    tags: ["OpenAI", "AWS", "Serverless"],
    media: { type: "youtube", embedId: "F0pb-6ueQZY", width: 320, height: 220 },
    links: [
      { label: "Live", href: "https://chat.yiyanglin.com/" },
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/ChatAI",
      },
    ],
  },
  {
    title: {
      en: "FitnessTrack (Android App)",
      zh: "FitnessTrack（Android）",
      fr: "FitnessTrack (Android)",
    },
    description: {
      en: "Android health app to log meals, nutrition, and ratings to support diet + workout routines.",
      zh: "Android 健康紀錄 App：記錄餐點、營養與評分，協助飲食與運動管理。",
      fr: "App Android santé : suivi repas/nutrition et habitudes sportives.",
    },
    tags: ["Android", "Kotlin/Java", "Health"],
    media: { type: "youtube", embedId: "pOAI-BYW0SI", width: 320, height: 220 },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/FitnessTrack",
      },
    ],
  },
  {
    title: {
      en: "Social Media Video Downloader",
      zh: "社群影片下載器",
      fr: "Téléchargeur vidéo réseaux sociaux",
    },
    description: {
      en: "Web crawler to download videos from platforms like YouTube, Instagram, and TikTok based on keywords and links.",
      zh: "依照關鍵字與連結，爬取並下載 YouTube/Instagram/TikTok 等平台影片。",
      fr: "Crawler pour télécharger des vidéos (YouTube/Instagram/TikTok) via mots-clés et liens.",
    },
    tags: ["Python", "Crawler", "Automation"],
    media: { type: "youtube", embedId: "lfRdoNt2Oog", width: 320, height: 220 },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/Advanced-Programming-Techniques/tree/main/Final_Project",
      },
    ],
  },
  {
    title: {
      en: "WiscShop (Dialogflow Virtual Assistant)",
      zh: "WiscShop（Dialogflow 虛擬助理）",
      fr: "WiscShop (Assistant Dialogflow)",
    },
    description: {
      en: "Built a conversational shopping assistant in Dialogflow with intents/entities for navigation and purchase flows.",
      zh: "使用 Dialogflow 建置購物對話助理，設計 intents/entities 支援導購與購買流程。",
      fr: "Assistant conversationnel Dialogflow : intents/entities pour navigation et achats.",
    },
    tags: ["Dialogflow", "NLP", "Assistant"],
    media: { type: "youtube", embedId: "SZ6gJJwQ9sw", width: 320, height: 220 },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/dialogflow-wiscShop-agent",
      },
    ],
  },
  {
    title: {
      en: "Fitness Tracker (React Native)",
      zh: "Fitness Tracker（React Native）",
      fr: "Fitness Tracker (React Native)",
    },
    description: {
      en: "React Native fitness tracking app (Expo) with RESTful APIs and essential screens for a fitness workflow.",
      zh: "以 React Native（Expo）打造健身追蹤 App，串接 RESTful API 與核心頁面流程。",
      fr: "App React Native (Expo) : suivi fitness avec APIs REST.",
    },
    tags: ["React Native", "Expo", "REST API"],
    media: { type: "youtube", embedId: "l1LzQlchSTk", width: 320, height: 220 },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/finess-tracker-react-native",
      },
    ],
  },
  {
    title: {
      en: "React UI Course Guide System",
      zh: "React 課程導覽系統",
      fr: "Système de guide de cours (React)",
    },
    description: {
      en: "Course selection UI with ratings and recommendations based on likes/dislikes.",
      zh: "線上選課 UI：完成評分系統並依喜好推薦課程。",
      fr: "UI de sélection de cours : notes et recommandations.",
    },
    tags: ["React", "UI", "Recommendations"],
    media: { type: "youtube", embedId: "oXZlwEDlZB0", width: 320, height: 220 },
    links: [
      { label: "Live", href: "https://course.yiyanglin.com/" },
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/react-course-guide",
      },
    ],
  },
  {
    title: {
      en: "Badger Shop (UI / E-commerce)",
      zh: "Badger Shop（前端 UI / 電商）",
      fr: "Badger Shop (UI / e-commerce)",
    },
    description: {
      en: "Built an e-commerce UI using design thinking and visual design practices.",
      zh: "以設計思維與視覺設計方法打造電商前端 UI。",
      fr: "UI e-commerce conçue via design thinking et pratiques de design visuel.",
    },
    tags: ["UI", "E-commerce", "Frontend"],
    media: {
      type: "image",
      src: "/images/badger-shop-UI.png",
      alt: "Badger Shop UI",
    },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/badger-shop",
      },
      { label: "Live", href: "https://yiyanglin0102.github.io/badger-shop/" },
    ],
  },
  {
    title: {
      en: "3D Graphics Town & Helicopters",
      zh: "3D 城鎮與直升機動畫",
      fr: "Ville 3D & hélicoptères",
    },
    description: {
      en: "THREE.js graphics project featuring 3D animations and Bezier-curve motion paths.",
      zh: "使用 THREE.js 製作 3D 動畫並用 Bezier 曲線設計運動路徑。",
      fr: "Projet THREE.js : animations 3D et trajectoires via courbes de Bézier.",
    },
    tags: ["Three.js", "Graphics", "Animation"],
    media: { type: "image", src: "/images/town.png", alt: "3D Town" },
    links: [{ label: "View Project", href: "/projects" }],
  },
  {
    title: {
      en: "Wardrobe",
      zh: "虛擬衣櫥",
      fr: "Garde-robe virtuelle",
    },
    description: {
      en: "Web app to help users decide outfits by uploading photos into a virtual wardrobe.",
      zh: "上傳衣物照片到虛擬衣櫥，協助搭配穿搭決策的網站。",
      fr: "Appli web : téléversement de vêtements pour aider au choix des tenues.",
    },
    tags: ["Web", "UX", "Product"],
    media: { type: "youtube", embedId: "j-sS0GdESgI", width: 320, height: 220 },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/wardrobe-1",
      },
    ],
  },
  {
    title: {
      en: "Meal Plan Analysis",
      zh: "餐點規劃分析系統",
      fr: "Analyse de plan de repas",
    },
    description: {
      en: "Meal database GUI to build and analyze food lists and output meal plans.",
      zh: "具備 GUI 的餐點資料庫系統：建立/分析食物清單並輸出規劃。",
      fr: "Base de données repas avec GUI : analyse et génération de plans.",
    },
    tags: ["GUI", "Database", "Java"],
    media: {
      type: "youtube",
      embedId: "ELissurlKzw",
      start: 151,
      width: 320,
      height: 220,
    },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/CS400/tree/master/p5",
      },
    ],
  },
  {
    title: {
      en: "Buffer Manager (B+ Tree Index Manager in C++)",
      zh: "Buffer Manager（C++ B+ Tree）",
      fr: "Buffer Manager (B+ Tree en C++)",
    },
    description: {
      en: "Built page-level buffer management over an I/O layer to support B+ tree index nodes and a disk image of the index file.",
      zh: "在 I/O layer 之上實作頁面層的 buffer 管理，支援 B+ tree 索引節點並建立磁碟索引映像。",
      fr: "Gestion de buffer au-dessus de la couche I/O pour un index B+ tree et son image disque.",
    },
    tags: ["C++", "DB Systems", "B+ Tree"],
    media: { type: "image", src: "/images/buffer.png", alt: "Buffer Manager" },
    links: [
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/CS564/tree/master/p3",
      },
    ],
  },
  {
    title: {
      en: "Personal Bio Website",
      zh: "個人 Bio 網站",
      fr: "Site bio personnel",
    },
    description: {
      en: "Personal bio website hosted on Netlify using HTML/CSS/JS with various function patterns.",
      zh: "使用 HTML/CSS/JS 製作個人 bio 網站並部署到 Netlify。",
      fr: "Site bio personnel (HTML/CSS/JS) hébergé sur Netlify.",
    },
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    media: { type: "image", src: "/images/bio.png", alt: "Bio website" },
    links: [
      { label: "Live", href: "https://bio.yiyanglin.com/" },
      {
        label: "View Project",
        href: "https://github.com/yiyanglin0102/Personal-Bio-Website/",
      },
    ],
  },
];

/* ================= EXPERIENCE ================= */

export const experience = [
  {
    company: "Delaware North",
    period: "June 2025 — June 2025",
    role: {
      en: "IT Technician (Part-time) · Minnesota",
      zh: "IT 技術員（兼職）· 明尼蘇達",
      fr: "Technicien IT (temps partiel) · Minnesota",
    },
    bullets: {
      en: [
        "Provided technical maintenance for desktops, laptops, networks, and printers.",
        "Supported Oracle Micros POS systems including installation and troubleshooting to ensure seamless operations.",
      ],
      zh: [
        "維護桌機、筆電、網路與印表機，提供員工技術支援。",
        "支援 Oracle Micros POS 系統：安裝、故障排除，確保營運順暢。",
      ],
      fr: [
        "Maintenance technique (PC, laptops, réseau, imprimantes).",
        "Support Oracle Micros POS : installation et dépannage pour garantir la continuité.",
      ],
    },
    links: [{ label: "JD", href: "/files/DelawareNorth_JD.png" }],
  },
  {
    company: "Chowbus Inc",
    period: "November 2024 — April 2025",
    role: {
      en: "Technical Support Associate (Full-time) · New York",
      zh: "技術支援工程師（全職）· 紐約",
      fr: "Support technique (temps plein) · New York",
    },
    bullets: {
      en: [
        "Installed, configured, and supported SaaS POS systems (networking, hardware, integrations) and delivered post-sales support.",
        "Conducted B2B customer training across dine-in/takeout/call-in/online ordering, customization, discounts, payment flows, loyalty programs, and menu/pricing management.",
      ],
      zh: [
        "安裝、設定與支援 SaaS POS 系統（網路、硬體、整合），並提供售後技術支援。",
        "進行 B2B 客戶訓練：內用/外帶/電話/線上訂單、客製化、折扣、付款流程、會員與菜單/價格管理等。",
      ],
      fr: [
        "Installation/configuration/support de systèmes POS SaaS (réseau, matériel, intégrations) et support après-vente.",
        "Formation B2B : commandes (sur place/à emporter/téléphone/en ligne), personnalisation, remises, paiement, fidélité, gestion menus/prix.",
      ],
    },
    links: [
      { label: "JD", href: "/files/Chowbus_JD.pdf" },
      { label: "Strategy", href: "/files/Chowbus_Strategy.jpg" },
      {
        label: "NY Video",
        href: "https://www.youtube.com/watch?v=mHGXuEmX0dI",
      },
    ],
  },
  {
    company: "Google LLC",
    period: "June 2023 — August 2023",
    role: {
      en: "Engineering Intern (Full-time)",
      zh: "工程實習生（全職）",
      fr: "Stagiaire ingénieur (temps plein)",
    },
    bullets: {
      en: [
        "Designed Python scripts to bridge C++ configuration files into signaling equipment inputs.",
        "Used internal tooling (Piper, google3, Critique) to build infrastructure scripts for Pixel RF test equipment.",
        "Queried Spanner via SQL to generate combo key data structures.",
      ],
      zh: [
        "設計 Python 腳本串接 C++ 設定檔並輸入到量測/信令設備。",
        "使用內部工具（Piper, google3, Critique）開發 Pixel RF 測試設備的基礎工具。",
        "使用 SQL 從 Spanner 查詢資料並生成 combo key 結構。",
      ],
      fr: [
        "Scripts Python pour relier des configs C++ aux entrées d’équipements de signalisation.",
        "Utilisation d’outils internes (Piper, google3, Critique) pour l’infra des tests Pixel RF.",
        "Requêtes SQL (Spanner) pour générer des structures de clés combinées.",
      ],
    },
    links: [
      { label: "Internship", href: "/files/Google_Internship.pdf" },
      { label: "JD", href: "/files/Google_Intern_JD.pdf" },
    ],
  },
  {
    company: "Intel Corporation",
    period: "January 2021 — November 2021",
    role: {
      en: "Wireless Driver Validation Engineer (Full-time)",
      zh: "無線驅動驗證工程師（全職）",
      fr: "Ingénieur validation driver sans fil (temps plein)",
    },
    bullets: {
      en: [
        "Implemented and maintained HW/SW regression validation tools.",
        "Built automation framework infrastructure for driver validation.",
        "Validated Intel wireless adapter drivers (WiFi).",
      ],
      zh: [
        "維護與開發軟硬體回歸驗證工具。",
        "建立自動化框架基礎設施以提升驗證效率。",
        "進行 Intel 無線網卡（WiFi）驅動驗證。",
      ],
      fr: [
        "Mise en place et maintenance d’outils de validation régression HW/SW.",
        "Infrastructure d’automatisation pour validation drivers.",
        "Validation de drivers WiFi (adaptateurs sans fil Intel).",
      ],
    },
    links: [
      { label: "WiFi Regression", href: "/files/xVT_WiFi_Regression.pdf" },
      { label: "JD", href: "/files/Intel_JD.pdf" },
    ],
  },
  {
    company: "Army Communication Electronics Information Training Center",
    period: "June 2020 — November 2020",
    role: {
      en: "Signaller — Army Signal Corps",
      zh: "通信兵 — 陸軍通信兵科",
      fr: "Transmissions — Corps des transmissions",
    },
    bullets: {
      en: [
        "Mobile communications infrastructure and strategy.",
        "Computer network approach and mobile microwave communication system.",
      ],
      zh: ["行動通訊基礎設施與軍事策略。", "電腦網路與行動微波通訊系統。"],
      fr: [
        "Infrastructure de communications mobiles et stratégie.",
        "Réseaux informatiques et systèmes de communication micro-ondes mobiles.",
      ],
    },
    links: [{ label: "Note", href: "/files/military_note.pdf" }],
  },
  {
    company: "Computer Science Learning Center (UW–Madison)",
    period: "January 2019 — May 2019",
    role: {
      en: "CS Tutor (Part-time)",
      zh: "資工助教/家教（兼職）",
      fr: "Tuteur informatique (temps partiel)",
    },
    bullets: {
      en: [
        "Tutored 50+ students on Java programming projects and improved teaching practices via weekly pedagogy seminars.",
        "Recorded a YouTube Makefile instruction demo to help students learn build concepts.",
      ],
      zh: [
        "輔導 50+ 位學生完成 Java 程式專案，並透過每週教學研討提升教學方法。",
        "錄製 Makefile 教學影片協助學生理解建置概念。",
      ],
      fr: [
        "Tutorat de 50+ étudiants (projets Java) et amélioration pédagogique via séminaires.",
        "Vidéo YouTube sur Makefile pour expliquer les concepts de build.",
      ],
    },
    links: [
      {
        label: "CSLC",
        href: "https://www.cs.wisc.edu/computer-sciences-learning-center-cslc/",
      },
    ],
  },
  {
    company: "BETTER — Cup Rental System (Student startup)",
    period: "May 2019 — August 2019",
    role: {
      en: "Software Technician",
      zh: "軟體技術人員",
      fr: "Technicien logiciel",
    },
    bullets: {
      en: [
        "Maintained a cup rental system to reduce disposable cup waste in partnership with merchants.",
        "Worked in a diverse student team with cross-cultural collaboration.",
      ],
      zh: [
        "維護杯子租借系統，與店家合作降低一次性杯具浪費。",
        "在多元文化學生團隊中協作。",
      ],
      fr: [
        "Maintenance d’un système de location de gobelets pour réduire les déchets.",
        "Collaboration dans une équipe étudiante multiculturelle.",
      ],
    },
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/Cup.Rental.System/",
      },
    ],
  },
];

/* ================= EDUCATION ================= */

export const education = [
  {
    school: {
      en: "Boston University",
      zh: "波士頓大學",
      fr: "Université de Boston",
    },
    period: "2022 — 2024",
    degree: {
      en: "Master of Science in Computer Science",
      zh: "電腦科學碩士",
      fr: "Master en informatique",
    },
    details: {
      en: [],
      zh: [],
      fr: [],
    },
  },

  {
    school: {
      en: "University of Wisconsin–Madison",
      zh: "威斯康辛大學麥迪遜分校",
      fr: "Université du Wisconsin à Madison",
    },
    period: "2018 — 2022",
    degree: {
      en: "Bachelor of Science in Computer Science",
      zh: "電腦科學學士",
      fr: "Licence en informatique",
    },
    details: {
      en: [],
      zh: [],
      fr: [],
    },
  },

  {
    school: {
      en: "Bellevue College",
      zh: "貝爾維尤學院",
      fr: "Bellevue College",
    },
    period: "2016 — 2018",
    degree: {
      en: "Associate of Arts and Sciences - Distinction",
      zh: "文理副學士 - 傑出",
      fr: "Associate of Arts and Sciences - distinction",
    },
    details: {
      en: ["Member of Phi Theta Kappa Honor Society."],
      zh: ["Phi Theta Kappa 榮譽學會會員。"],
      fr: ["Membre de Phi Theta Kappa (société d'honneur)."],
    },
  },

  {
    school: {
      en: "Concordia Middle & High School",
      zh: "協同高級中學",
      fr: "Collège et lycée Concordia",
    },
    period: "2015",
    degree: {
      en: "High School Diploma",
      zh: "高中畢業",
      fr: "Diplôme de fin d’études",
    },
    details: {
      en: [],
      zh: [],
      fr: [],
    },
  },
];

/* ================= SKILLS ================= */

export const skills = [
  "Agile",
  "Assembly Language",
  "Batch",
  "Bootstrap",
  "Bioinformatics",
  "BeautifulSoup",
  "Bluetooth",
  "C",
  "C++",
  "CSS",
  "Database",
  "Dialogflow",
  "Eclipse",
  "EMR",
  "EHR",
  "Firebase",
  "Git",
  "Google Cloud Platform",
  "HTML",
  "Health Information System",
  "Health Informatics",
  "Java",
  "JavaFX",
  "JavaScript",
  "Jira",
  "JUnit",
  "Kotlin",
  "Maven",
  "MATLAB",
  "Model-View-Controller",
  "Netlify",
  "Node.js",
  "LaTeX",
  "Linux",
  "POSIX",
  "Python",
  "PHP",
  "React",
  "React Native",
  "Radio Frequency",
  "RESTful API",
  "SQL",
  "SQL Server",
  "Shell",
  "Selenium",
  "Scripting Languages",
  "Three.js",
  "Unix",
  "Unit Test",
  "Vue",
  "Validation",
  "Version Control",
  "WiFi",
  "3GPP",
  "5G",
];

/* ================= CONTACT ================= */

export const contact = {
  headline: {
    en: "Contact",
    zh: "聯絡我",
    fr: "Contact",
  },
  body: {
    en: "Want to work together? Send me a message and I’ll reply soon.",
    zh: "有合作想法嗎？歡迎留言，我會盡快回覆。",
    fr: "Envie de collaborer ? Envoyez-moi un message, je répondrai rapidement.",
  },
  ctaLabel: {
    en: "Send",
    zh: "送出",
    fr: "Envoyer",
  },
  // for your Formspree action
  formAction: "https://formspree.io/f/mzbkoayg",
};
