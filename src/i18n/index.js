import en from "./locales/en/en-us.json";
import pt from "./locales/pt/pt-br.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: pt,
  en: en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
});

export default i18n;
