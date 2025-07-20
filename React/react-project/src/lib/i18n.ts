import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enCommon from '../locales/en/common.json';
import ruCommon from '../locales/ru/common.json';
import frCommon from '../locales/fr/common.json';
import esCommon from '../locales/es/common.json';
import jaCommon from '../locales/ja/common.json';
import zhCommon from '../locales/zh/common.json';
import trCommon from '../locales/tr/common.json';
import itCommon from '../locales/it/common.json';
import csCommon from '../locales/cs/common.json';
import koCommon from '../locales/ko/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  ru: {
    common: ruCommon,
  },
  fr: {
    common: frCommon,
  },
  es: {
    common: esCommon,
  },
  ja: {
    common: jaCommon,
  },
  zh: {
    common: zhCommon,
  },
  tr: {
    common: trCommon,
  },
  it: {
    common: itCommon,
  },
  cs: {
    common: csCommon,
  },
  ko: {
    common: koCommon,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    defaultNS: 'common',
    ns: ['common'],
  });

export default i18n; 