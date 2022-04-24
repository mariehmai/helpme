import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

export const languages = [
  {
    flag: "uk",
    locale: "en",
    title: "English",
  },
  {
    flag: "es",
    locale: "es",
    title: "Español",
  },
  {
    flag: "fr",
    locale: "fr",
    title: "Français",
  },
];

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "fr",
  messages: {
    en,
    es,
    fr,
  },
});
