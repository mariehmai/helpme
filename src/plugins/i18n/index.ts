import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

const messages = {
  en,
  es,
  fr,
};

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "fr",
  messages,
});
