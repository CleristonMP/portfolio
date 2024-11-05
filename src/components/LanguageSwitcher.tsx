import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="lang-switcher-ctr">
      <button onClick={() => changeLanguage("pt")}>🇧🇷</button>|
      <button onClick={() => changeLanguage("en")}>🇺🇸</button>
    </div>
  );
};

export default LanguageSwitcher;
