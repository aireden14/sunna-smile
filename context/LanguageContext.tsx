"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ru" | "kz";

interface Translations {
  [key: string]: {
    [key: string]: string | string[] | any;
  };
}

export const translations: Translations = {
  ru: {
    nav: {
      services: "Услуги",
      implantology: "Имплантология",
      pricing: "Цены",
      cases: "Результаты",
      reviews: "Отзывы",
      contact: "Контакты",
    },
    hero: {
      tagline: "Премиальная стоматология для вас и ваших родителей",
      title: "Революция вашей улыбки",
      desc: "Создаем улыбки, которые меняют жизнь. Швейцарские стандарты качества, цифровая точность и эстетика премиум-класса. Лечение во сне — без боли и стресса.",
      cta: "Записаться на консультацию",
      stats_patients: "Счастливых пациентов",
      stats_experience: "Лет опыта",
      floating_smile: "Превью улыбки за 1 визит",
      floating_guarantee: "Пожизненная гарантия",
    },
    quiz: {
      promo_title: "Получите 5 000 ₸ на лечение",
      promo_desc: "Пройдите тест и закрепите бонус на 30 дней.",
      cta: "Пройти тест и получить бонус",
      success_title: "Бонус почти ваш!",
      success_desc: "Нажмите на кнопку ниже, чтобы закрепить бонус в WhatsApp. А также подпишитесь на наш Instagram для полезных советов:",
      whatsapp_btn: "Забрать бонус в WhatsApp",
      insta_btn: "Подписаться в Instagram",
      back: "Вернуться на сайт",
    },
    services: {
      title: "Направления нашей экспертизы",
      desc: "От гигиены до сложных реконструкций всей челюсти.",
    },
    pricing: {
      title: "Честные цены и условия",
      desc: "Мы ценим прозрачность. Никаких скрытых платежей, только честный расчет и удобная рассрочка.",
    }
  },
  kz: {
    nav: {
      services: "Қызметтер",
      implantology: "Имплантология",
      pricing: "Бағалар",
      cases: "Нәтижелер",
      reviews: "Пікірлер",
      contact: "Контактілер",
    },
    hero: {
      tagline: "Сіз бен ата-анаңызға арналған премиум стоматология",
      title: "Күлкіңіздің революциясы",
      desc: "Өмірді өзгертетін күлкі сыйлаймыз. Швейцариялық сапа стандарттары, цифрлық дәлдік және премиум-класс эстетикасы. Ұйқыдағы емдеу — ауырсынусыз және стресссіз.",
      cta: "Консультацияға жазылу",
      stats_patients: "Бақытты емделушілер",
      stats_experience: "Жыл тәжірибе",
      floating_smile: "1 визитте күлкі превьюі",
      floating_guarantee: "Өмірлік кепілдік",
    },
    quiz: {
      promo_title: "Емделуге 5 000 ₸ алыңыз",
      promo_desc: "Тесттен өтіп, бонусты 30 күнге бекітіңіз.",
      cta: "Тесттен өту және бонусты алу",
      success_title: "Бонус сіздікі деуге болады!",
      success_desc: "WhatsApp-та бонусты бекіту үшін төмендегі батырманы басыңыз. Сондай-ақ пайдалы кеңестер алу үшін біздің Instagram-ға жазылыңыз:",
      whatsapp_btn: "Бонусты WhatsApp-та алу",
      insta_btn: "Instagram-ға жазылу",
      back: "Сайтқа оралу",
    },
    services: {
      title: "Біздің сараптама бағыттары",
      desc: "Гигиенадан бастап бүкіл жақ сүйегін күрделі қайта құруға дейін.",
    },
    pricing: {
      title: "Әділ бағалар мен шарттар",
      desc: "Біз ашықтықты бағалаймыз. Ешқандай жасырын төлемдер жоқ, тек әділ есеп және ыңғайлы бөліп төлеу.",
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ru");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved) setLang(saved);
    setIsLoaded(true);
  }, []);

  const t = (path: string) => {
    const keys = path.split(".");
    let result = translations[lang];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  if (!isLoaded) return null;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
