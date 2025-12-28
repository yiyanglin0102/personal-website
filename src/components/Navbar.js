// src/components/Navbar.js
import React from "react";
import { ThemeContext, LangContext } from "../providers";
import { LANGS, t } from "../i18n";

export default function Navbar({ links, hidden = false }) {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { lang, setLang } = React.useContext(LangContext);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className={`nav ${hidden ? "nav--hidden" : ""}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="Home">
          YL
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__controls">
          <select
            className="control"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Language"
          >
            {LANGS.map((x) => (
              <option key={x.code} value={x.code}>
                {x.label}
              </option>
            ))}
          </select>

          <button className="control control--btn" onClick={toggleTheme}>
            {theme === "dark" ? t(lang, "theme_dark") : t(lang, "theme_light")}
          </button>
        </div>
      </div>
    </header>
  );
}
