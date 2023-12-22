import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
     .use(LanguageDetector)
     .use(initReactI18next)
     .init({
          resources: {
               en: {
                    translations: {
                         "خانه": "Home",
                         "تقویم": "Calender",
                         "آنالیز": "Analyze",
                         "ATP": "ATP",
                         "مدیریت ورزشکاران": "Athlete Management",
                         "مخزن تمرین‌ها": "Exercises",
                         "استراتژی": "Strategy",
                         "تنظیمات": "Setting",
                         "آخرین فعالیت‌ها": "Last Activities",
                    },
               },
               fa: {
                    translations: {
                         "خانه": "خانه",
                         "تقویم": "تقویم",
                         "آنالیز": "آنالیز",
                         "ATP": "ATP",
                         "مدیریت ورزشکاران": "مدیریت ورزشکاران",
                         "مخزن تمرین‌ها": "مخزن تمرین‌ها",
                         "استراتژی": "استراژی",
                         "تنظیمات": "تنظیمات",
                         "آخرین فعالیت‌ها": "آخرین فعالیت‌ها",
                    },
               },
          },
          fallbackLng: "fa",
          debug: true,
          ns: ["translations"],
          defaultNS: "translations",
          keySeparator: false,
          interpolation: {
               escapeValue: false,
          },
     });

export default i18n;