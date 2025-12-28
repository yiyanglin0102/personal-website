// src/App.js
import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

import {
  profile,
  about,
  projects,
  experience,
  contact,
  education,
} from "./data";
import { LangContext } from "./providers";
import { t } from "./i18n";

// Helper: supports either plain string/array OR {en, zh-TW, zh-CN, fr...}
function pickLang(value, lang, fallback = "en") {
  if (value == null) return value;
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value;

  // object with language keys
  const exact = value?.[lang];
  if (exact != null) return exact;

  // Chinese fallback rules
  if (lang === "zh-TW")
    return (
      value["zh-TW"] ??
      value["zh"] ??
      value[fallback] ??
      Object.values(value)[0]
    );
  if (lang === "zh-CN")
    return (
      value["zh-CN"] ??
      value["zh"] ??
      value[fallback] ??
      Object.values(value)[0]
    );

  // generic fallback
  return value[fallback] ?? value.en ?? Object.values(value)[0];
}

export default function App() {
  const { lang } = React.useContext(LangContext);

  // Convert vertical mouse wheel to horizontal scroll on Projects row
  React.useEffect(() => {
    const el = document.querySelector(".cardsScroll");
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // NAV (added education)
  const navLinks = [
    { label: t(lang, "nav_about"), href: "#about" },
    { label: t(lang, "nav_projects"), href: "#projects" },
    { label: t(lang, "nav_experience"), href: "#experience" },
    { label: t(lang, "nav_education"), href: "#education" },
    { label: t(lang, "nav_contact"), href: "#contact" },
  ];

  // Profile fields may be tri-language objects now
  const profileName = pickLang(profile.name, lang) ?? "";
  const profileTitle = pickLang(profile.title, lang) ?? "";
  const profileTagline = pickLang(profile.tagline, lang) ?? "";
  const profileLocation = pickLang(profile.location, lang) ?? "";

  // About now has per-language arrays/strings
  const aboutHeadline = pickLang(about.headline, lang) ?? t(lang, "nav_about");
  const aboutBody = pickLang(about.body, lang) ?? [];
  const aboutHighlights = pickLang(about.highlights, lang) ?? [];

  // Contact now has per-language strings
  const contactHeadline =
    pickLang(contact.headline, lang) ?? t(lang, "nav_contact");

  const highlightsLabel =
    lang === "zh" ? "重點" : lang === "fr" ? "Points forts" : "Highlights";

  return (
    <div className="app" id="top">
      <Navbar links={navLinks} />

      {/* HERO */}
      <main className="hero">
        <div className="container hero-scale">
          <div className="hero__inner">
            <div className="hero__left">
              {/* NOTE: Don't call t(lang, profileTitle). profileTitle is already localized text */}
              <p className="pill">{profileTitle}</p>

              <h1 className="hero__title">
                {profileName}
                <span className="dot">.</span>
              </h1>

              <p className="hero__tagline">{profileTagline}</p>

              <div className="hero__meta">
                <span className="muted">{profileLocation}</span>
              </div>

              <div className="hero__actions">
                <a
                  className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
                  href="#projects"
                >
                  {t(lang, "hero_cta_projects")}
                </a>
                <a
                  className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
                  href="#contact"
                >
                  {t(lang, "hero_cta_contact")}
                </a>
              </div>

              <div className="socials">
                {profile.socials.map((s) => (
                  <a
                    key={s.href}
                    className="social"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hero__right">
              <div className="heroCard">
                <div className="heroCard__top">
                  <div className="avatar" aria-label="profile picture">
                    <img
                      src="/profile.png"
                      alt={`${profileName} profile`}
                      loading="eager"
                    />
                  </div>
                  <div>
                    <div className="heroCard__name">{profileName}</div>
                    <div className="muted">{profileTitle}</div>
                  </div>
                </div>

                <div className="heroCard__body">
                  <div className="stat">
                    <div className="stat__k">
                      {lang === "zh"
                        ? "重點"
                        : lang === "fr"
                        ? "Focus"
                        : "Focus"}
                    </div>
                    <div className="stat__v">React • Systems • Performance</div>
                  </div>

                  <div className="stat">
                    <div className="stat__k">
                      {lang === "zh"
                        ? "目標"
                        : lang === "fr"
                        ? "Ouvert à"
                        : "Open to"}
                    </div>
                    <div className="stat__v">
                      {lang === "zh"
                        ? "前端 / 全端職缺"
                        : lang === "fr"
                        ? "Postes Frontend / Full-stack"
                        : "Frontend / Full-Stack roles"}
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat__k">
                      {lang === "zh"
                        ? "時區"
                        : lang === "fr"
                        ? "Fuseau horaire"
                        : "Timezone"}
                    </div>
                    <div className="stat__v">Asia/Taipei (UTC+8)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <Section id="about" title={aboutHeadline}>
        <div className="grid2">
          <div>
            {(Array.isArray(aboutBody) ? aboutBody : [aboutBody]).map(
              (p, i) => (
                <p key={i} className="p">
                  {p}
                </p>
              )
            )}
          </div>

          <div className="panel">
            <h3 className="panel__title">{highlightsLabel}</h3>
            <ul className="list">
              {(Array.isArray(aboutHighlights)
                ? aboutHighlights
                : [aboutHighlights]
              ).map((h) => (
                <li key={h} className="list__item">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PROJECTS (horizontal scroll always) */}
      <Section
        id="projects"
        title={t(lang, "nav_projects")}
        subtitle={t(lang, "projects_subtitle")}
      >
        <div className="cardsScroll">
          <div className="cardsRow">
            {projects.map((p, idx) => (
              <ProjectCard key={idx} project={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={t(lang, "nav_experience")}>
        <div className="timeline">
          {experience.map((e, idx) => {
            const role = pickLang(e.role, lang) ?? "";
            const bullets = pickLang(e.bullets, lang) ?? [];

            return (
              <div key={idx} className="timeline__item">
                <div className="timeline__meta">
                  <div className="timeline__role">{role}</div>
                  <div className="muted">{e.company}</div>
                </div>

                <div className="timeline__period">{e.period}</div>

                <ul className="list">
                  {(Array.isArray(bullets) ? bullets : [bullets]).map((b) => (
                    <li key={b} className="list__item">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title={t(lang, "nav_education")}>
        <div className="timeline">
          {education.map((e, idx) => {
            const degree = pickLang(e.degree, lang) ?? "";
            const details = pickLang(e.details, lang) || [];

            return (
              <div key={idx} className="timeline__item">
                <div className="timeline__meta">
                  <div className="timeline__role">{degree}</div>
                  <div className="muted">{pickLang(e.school, lang)}</div>
                </div>

                <div className="timeline__period">{e.period}</div>

                {details.length > 0 && (
                  <ul className="list">
                    {(Array.isArray(details) ? details : [details]).map(
                      (d, i) => (
                        <li key={i} className="list__item">
                          {d}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* CONTACT (left title + right form) */}
      <Section id="contact" title={contactHeadline}>
        <div className="contactSplit">
          {/* LEFT */}
          <div className="contactLeft">
            <h3 className="contactTitle">
              {lang === "zh"
                ? "聯絡我"
                : lang === "fr"
                ? "Entrer en contact"
                : "GET IN TOUCH"}
            </h3>

            <p className="contactDesc">
              {lang === "zh"
                ? "有合作想法或問題，歡迎隨時留言。"
                : lang === "fr"
                ? "Une idée, un projet ou une question ? Écrivez-moi."
                : "Have a project, idea, or question? Feel free to reach out."}
            </p>
          </div>

          {/* RIGHT */}
          <div className="contactRight">
            <form method="POST" action="https://formspree.io/f/mzbkoayg">
              <input
                type="hidden"
                name="_subject"
                value="Contact request from personal website"
              />

              <div className="form-field">
                <input
                  type="email"
                  name="_replyto"
                  placeholder={
                    lang === "zh"
                      ? "你的 Email"
                      : lang === "fr"
                      ? "Votre email"
                      : "Your email"
                  }
                  required
                />
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  rows="5"
                  placeholder={
                    lang === "zh"
                      ? "你的訊息"
                      : lang === "fr"
                      ? "Votre message"
                      : "Your message"
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
              >
                {lang === "zh" ? "送出" : lang === "fr" ? "Envoyer" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
