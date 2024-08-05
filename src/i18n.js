// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Asegúrate de que este paquete esté instalado
import LanguageDetector from 'i18next-browser-languagedetector'; // Opcional

i18n
  .use(Backend) // Para cargar las traducciones desde un backend
  .use(LanguageDetector) // Opcional, para detectar el idioma del navegador
  .use(initReactI18next) // Pasa i18n al react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta a tus archivos de traducción
    },
  });

export default i18n;
