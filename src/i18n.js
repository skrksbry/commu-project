import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./lang/ko.json";
import en from "./lang/en.json";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        ko: {
            lang:ko
        },
        en: {
            lang:en
        }
    },
    ns:['lang'],
    lng: "ko",
    interpolation: {
        escapeValue: false, 
    }
  });
export default i18n;