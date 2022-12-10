import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { default as ar } from 'assets/i18n/ar.json'
import { default as en } from 'assets/i18n/en.json'

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
})

export default i18n
