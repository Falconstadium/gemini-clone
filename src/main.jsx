import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContextProvider from './context/Context.jsx';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import enTranslation from '../src/locales/en/translation.json';
import frTranslation from '../src/locales/fr/translation.json';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';
import I18NextHttpBackend from 'i18next-http-backend';

const resources = {
  en: {
    global: enTranslation,
  },
  fr: {
    global: frTranslation,
  },
};

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        'cookie',
        'localStorage',
        'sessionStorage',
        'htmlTag',
        'querystring',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '../src/locale/{{lng}}/Translation.json',
    },
  });

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </I18nextProvider>
);
