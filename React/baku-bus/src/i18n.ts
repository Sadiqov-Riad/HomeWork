import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импорт переводов
import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';
import azTranslations from './locales/az.json';

const resources = {
  en: {
    translation: enTranslations
  },
  ru: {
    translation: ruTranslations
  },
  az: {
    translation: azTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 