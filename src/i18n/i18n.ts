import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationPT from "./locales/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    pt: { translation: translationPT },
  },
  lng: "en", // Idioma inicial
  fallbackLng: "pt", // Idioma de fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
