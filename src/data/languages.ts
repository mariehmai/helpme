export interface Language {
  locale: string;
  title: string;
  native: string;
  flag: string;
  code: string;
}

export const languages: Language[] = [
  {
    locale: "en",
    title: "English",
    native: "English",
    flag: "🇺🇸",
    code: "EN",
  },
  {
    locale: "fr",
    title: "French",
    native: "Français",
    flag: "🇫🇷",
    code: "FR",
  },
  {
    locale: "es",
    title: "Spanish",
    native: "Español",
    flag: "🇪🇸",
    code: "ES",
  },
];
