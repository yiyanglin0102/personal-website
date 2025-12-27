import React from "react";
import { LangContext } from "../providers";

function pickLang(value, lang, fallback = "en") {
  if (value == null) return value;
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value;
  return value[lang] ?? value[fallback] ?? Object.values(value)[0];
}

export default function ProjectCard({ project }) {
  const { lang } = React.useContext(LangContext);

  const title = pickLang(project.title, lang) ?? "";
  const description = pickLang(project.description, lang) ?? "";

  return (
    <article className="card">
      <div className="card__top">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
      </div>

      <div className="card__meta">
        <div className="tags">
          {(project.tags ?? []).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="card__links">
          {(project.links ?? []).map((l) => (
            <a
              key={l.href}
              className="link"
              href={l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
