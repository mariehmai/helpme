import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '@/plugins/i18n/locales/en.json'
import es from '@/plugins/i18n/locales/es.json'
import fr from '@/plugins/i18n/locales/fr.json'

Vue.use(VueI18n)

const messages = {
  en,
  es,
  fr
}

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  messages
})
