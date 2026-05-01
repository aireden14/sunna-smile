"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, Banknote } from "lucide-react";
import { whatsappHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { t, lang } = useLanguage();

  const plans = lang === "ru" ? [
    {
      name: "Имплант + Коронка",
      price: "40 000",
      oldPrice: "48 333",
      desc: "ПАКЕТ «ПОД КЛЮЧ»",
      features: [
        "Швейцарский/Корейский имплант",
        "Установка и анестезия",
        "Формирователь десны",
        "Циркониевая коронка",
        "Пожизненная гарантия на корень",
      ],
      highlight: false,
    },
    {
      name: "All-on-4 (Все на 4-х)",
      price: "от 185 000",
      oldPrice: "от 235 000",
      desc: "ЕШЬТЕ МЯСО В ТОТ ЖЕ ДЕНЬ",
      features: [
        "4 премиум импланта",
        "Хирургический шаблон",
        "Несъемный протез в тот же день",
        "Все снимки и осмотры включены",
        "Полный возврат вкуса и комфорта",
      ],
      highlight: true,
    },
    {
      name: "Виниры E.max",
      price: "17 500",
      oldPrice: "21 666",
      desc: "ЗА 1 ЕДИНИЦУ",
      features: [
        "Digital Smile Design (3D-модель)",
        "Сверхтонкая керамика",
        "Минимальная обточка",
        "Установка за 2-3 визита",
        "Естественный цвет и прозрачность",
      ],
      highlight: false,
    },
  ] : [
    {
      name: "Имплант + Коронка",
      price: "40 000",
      oldPrice: "48 333",
      desc: "«ТОЛЫҚ ПАКЕТ»",
      features: [
        "Швейцариялық/Кореялық имплант",
        "Орнату және анестезия",
        "Қызыл иекті қалыптастырушы",
        "Цирконий коронкасы",
        "Түбірге өмірлік кепілдік",
      ],
      highlight: false,
    },
    {
      name: "All-on-4 (Барлығы 4-де)",
      price: "185 000 бастап",
      oldPrice: "235 000 бастап",
      desc: "СОЛ КҮНІ ЕТ ЖЕҢІЗ",
      features: [
        "4 премиум имплант",
        "Хирургиялық үлгі",
        "Сол күні алынбайтын протез",
        "Барлық түсірілімдер мен тексерулер қосылған",
        "Дәм мен жайлылықты толық қайтару",
      ],
      highlight: true,
    },
    {
      name: "E.max винирлері",
      price: "17 500",
      oldPrice: "21 666",
      desc: "1 БІРЛІК ҮШІН",
      features: [
        "Digital Smile Design (3D-модель)",
        "Өте жұқа керамика",
        "Минималды егеу",
        "2-3 визитте орнату",
        "Табиғи түс пен мөлдірлік",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 md:mb-16 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <CreditCard className="h-3.5 w-3.5" />
            {lang === "ru" ? "Инвестиции в здоровье" : "Денсаулыққа инвестиция"}
          </span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[52px] leading-tight">
            {lang === "ru" ? "Честная цена без сюрпризов" : "Тосын сыйсыз әділ баға"}
          </h2>
          <p className="mt-6 text-[16px] text-white/70 sm:text-[18px]">
            {lang === "ru" 
              ? "Вы платите только ту сумму, которая указана в плане лечения. Цены ниже указаны с учетом "
              : "Сіз тек емдеу жоспарында көрсетілген соманы төлейсіз. Төмендегі бағалар "}
            <strong className="text-white">
              {lang === "ru" ? "халяльной рассрочки на 12 месяцев без % и переплат" : "пайызсыз және артық төлемсіз 12 айға адал бөліп төлеуді"}
            </strong>
            {lang === "ru" ? "." : " ескере отырып көрсетілген."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass flex flex-col rounded-[2.5rem] p-6 md:p-8 relative transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-xl ${
                plan.highlight ? "ring-2 ring-clinic-500 shadow-2xl shadow-clinic-500/20" : ""
              }`}
            >
              <div className="text-[12px] font-bold uppercase tracking-widest text-clinic-500 mb-2">
                {plan.desc}
              </div>
              <h3 className="text-[22px] md:text-[24px] font-bold text-white mb-4">
                {plan.name}
              </h3>
              <div className="flex flex-col gap-1 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] md:text-[36px] font-bold text-white">
                    {plan.price} ₸
                  </span>
                  <span className="text-[14px] text-white/40">/{lang === "ru" ? "мес" : "ай"}</span>
                </div>
                {plan.oldPrice && (
                  <div className="text-[14px] text-white/30 line-through decoration-clinic-500/50 decoration-2">
                    {plan.oldPrice} ₸/{lang === "ru" ? "мес" : "ай"}
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-clinic-500" />
                    <span className="text-[14px] md:text-[15px] leading-snug text-white/70">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappHref(
                  lang === "ru" 
                    ? `Здравствуйте! Интересует пакет: ${plan.name} по халяльной рассрочке. Можно узнать подробнее?` 
                    : `Сәлеметсіз бе! Маған ${plan.name} пакеті адал бөліп төлеу бойынша қызықты. Толығырақ білуге бола ма?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-2xl font-bold transition-all h-14 flex items-center justify-center ${
                  plan.highlight 
                    ? "btn-apple-primary" 
                    : "btn-apple-glass"
                }`}
              >
                {lang === "ru" ? "Узнать подробности" : "Толығырақ білу"}
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-[13px] md:text-[14px] text-white/40 text-center">
          <Banknote className="h-5 w-5 text-clinic-500" />
          <span>
            {lang === "ru" 
              ? "Оформление рассрочки занимает 10 минут. Без участия банков второго уровня с сомнительными условиями." 
              : "Бөліп төлеуді рәсімдеу 10 минут алады. Күмәнді шарттары бар екінші деңгейлі банктердің қатысуынсыз."}
          </span>
        </div>
      </div>
    </section>
  );
}
