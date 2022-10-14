import "react-i18next";
import en from "./i18n/locales/en/en-us.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof en;
  }
}
