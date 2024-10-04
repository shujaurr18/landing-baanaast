import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translation/eng.json";
import thaiTranslation from "./translation/thai.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    thai: {
      translation: thaiTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
