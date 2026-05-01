"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, lang } = useLanguage();

  const faqs = lang === "ru" ? [
    {
      q: "А имплантация — это больно?",
      a: "Абсолютно нет. Мы используем современную компьютерную анестезию и, по желанию, седацию (лечение во сне). Вы ничего не почувствуете. Большинство пациентов говорят, что удаление зуба переносится сложнее, чем установка импланта.",
    },
    {
      q: "Приживется ли имплант?",
      a: "Приживаемость швейцарских имплантов Straumann, которые мы используем, составляет 99.8%. Если по какой-то невероятной причине имплант не приживется, мы бесплатно переустановим его по гарантии.",
    },
    {
      q: "Сколько времени занимает установка?",
      a: "Сама хирургическая часть занимает около 15-20 минут на один имплант. Если это комплекс All-on-4 (полная челюсть), операция длится 2-3 часа, после чего в этот же день вы уходите с новыми зубами.",
    },
    {
      q: "Смогу ли я есть мясо и твердую пищу?",
      a: "Безусловно! Импланты Straumann и Nobel Biocare восстанавливают жевательную функцию на 100%. Вы снова сможете наслаждаться сочным стейком, грызть яблоки и чувствовать вкус любимых блюд без опасений. Это полноценные новые зубы, которые ощущаются как свои.",
    },
    {
      q: "Даете ли вы гарантию?",
      a: "Мы работаем официально по договору. На импланты Straumann и Nobel предоставляется пожизненная международная гарантия от производителя. На наши ортопедические работы (коронки, виниры) мы даем гарантию до 10 лет.",
    },
  ] : [
    {
      q: "Имплантация ауыр ма?",
      a: "Мүлдем жоқ. Біз заманауи компьютерлік анестезияны және қалауыңыз бойынша седацияны (ұйқыда емдеу) қолданамыз. Сіз ештеңе сезбейсіз. Емделушілердің көбі тіс жұлғанға қарағанда имплант орнату оңайырақ дейді.",
    },
    {
      q: "Имплант жерсіне ме?",
      a: "Біз қолданатын швейцариялық Straumann импланттарының жерсіну көрсеткіші 99.8% құрайды. Егер қандай да бір себептермен имплант жерсінбесе, біз оны кепілдік бойынша тегін қайта орнатамыз.",
    },
    {
      q: "Орнату қанша уақыт алады?",
      a: "Хирургиялық бөлімнің өзі бір имплантқа шамамен 15-20 минут алады. Егер бұл All-on-4 кешені (толық жақ) болса, операция 2-3 сағатқа созылады, содан кейін сол күні жаңа тістермен кетесіз.",
    },
    {
      q: "Мен ет және қатты тағамдарды жей аламын ба?",
      a: "Әрине! Straumann және Nobel Biocare импланттары шайнау функциясын 100% қалпына келтіреді. Сіз қайтадан дәмді стейктерден ләззат алып, алма тістей аласыз. Бұл өз тісіңіздей сезілетін толыққанды жаңа тістер.",
    },
    {
      q: "Кепілдік бересіздер ме?",
      a: "Біз келісімшарт бойынша ресми түрде жұмыс істейміз. Straumann және Nobel импланттарына өндіруші тарапынан өмірлік халықаралық кепілдік беріледі. Біздің ортопедиялық жұмыстарымызға (коронкалар, винирлер) біз 10 жылға дейін кепілдік береміз.",
    },
  ];

  return (
    <section id="faq" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-10 md:mb-16 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <HelpCircle className="h-3.5 w-3.5" />
            {lang === "ru" ? "Частые вопросы" : "Жиі қойылатын сұрақтар"}
          </span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[48px] leading-tight">
            {lang === "ru" ? "Часто задаваемые вопросы" : "Жиі қойылатын сұрақтар"}
          </h2>
          <p className="mt-4 text-[16px] text-white/70 sm:text-[18px]">
            {lang === "ru" ? "Мы собрали ответы на самые популярные вопросы, чтобы вы могли принять взвешенное решение." : "Біз сізге дұрыс шешім қабылдауға көмектесу үшін ең танымал сұрақтарға жауаптар жинадық."}
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-[16px] md:text-[19px] font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 border-white bg-white text-black"
                        : "border-white/20 text-white"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-[15px] md:text-[15.5px] leading-relaxed text-white/70">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
