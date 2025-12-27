// src/providers.js
import React from "react";

const THEME_KEY = "portfolio_theme";
const LANG_KEY = "portfolio_lang";

export const ThemeContext = React.createContext(null);
export const LangContext = React.createContext(null);

export function Providers({ children }) {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem(THEME_KEY) || "dark";
  });

  const [lang, setLang] = React.useState(() => {
    return localStorage.getItem(LANG_KEY) || "en";
  });

  React.useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const valueTheme = React.useMemo(() => ({ theme, setTheme }), [theme]);
  const valueLang = React.useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <LangContext.Provider value={valueLang}>{children}</LangContext.Provider>
    </ThemeContext.Provider>
  );
}
