import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationIT from './locales/it.json';

const resources = {
  en: { translation: translationEN },
  it: { translation: translationIT },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it', // Lingua di default
    fallbackLng: 'it', // Lingua di fallback
    interpolation: {
      escapeValue: false, // React già esegue la sanitizzazione
    },
  });

export default i18n;
