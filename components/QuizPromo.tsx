"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Gift, Sparkles, CheckCircle2, Instagram, MessageSquare } from "lucide-react";
import { whatsappHref, instagramHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function QuizPromo() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = lang === "ru" ? [
    {
      id: "target",
      title: "Для кого вы ищете лечение?",
      options: ["Для себя", "Для родителей", "Для близких", "Для детей"],
    },
    {
      id: "problem",
      title: "Что вас беспокоит больше всего?",
      options: [
        "Отсутствует один или несколько зубов",
        "Не устраивает эстетика (цвет, форма)",
        "Полное отсутствие зубов",
        "Нужна просто проверка и чистка",
      ],
    },
    {
      id: "timeline",
      title: "Когда планируете начать лечение?",
      options: [
        "Как можно скорее (болит / срочно)",
        "В течение этого месяца",
        "В ближайшие полгода",
        "Пока просто прицениваюсь",
      ],
    },
    {
      id: "priority",
      title: "Что для вас важнее всего при выборе клиники?",
      options: [
        "Пожизненная гарантия и премиум-материалы",
        "Опыт и статус врача",
        "Безболезненность и комфорт",
        "Халяльная рассрочка без %",
      ],
    },
    {
      id: "age",
      title: "Укажите ваш возраст (для подбора плана лечения)",
      options: ["До 30 лет", "30-45 лет", "45-60 лет", "Старше 60 лет"],
    },
  ] : [
    {
      id: "target",
      title: "Емдеуді кімге іздеп жүрсіз?",
      options: ["Өзіме", "Ата-анама", "Жақындарыма", "Балаларға"],
    },
    {
      id: "problem",
      title: "Сізді не көбірек мазалайды?",
      options: [
        "Бір немесе бірнеше тіс жоқ",
        "Эстетикасы (түсі, пішіні) ұнамайды",
        "Тістері мүлдем жоқ",
        "Тек тексеру және тазалау қажет",
      ],
    },
    {
      id: "timeline",
      title: "Емдеуді қашан бастауды жоспарлайсыз?",
      options: [
        "Мүмкіндігінше тезірек (ауырады / шұғыл)",
        "Осы айдың ішінде",
        "Жақын жарты жылда",
        "Әзірге тек бағасын біліп жүрмін",
      ],
    },
    {
      id: "priority",
      title: "Клиника таңдағанда сіз үшін ең маңыздысы не?",
      options: [
        "Өмірлік кепілдік және премиум материалдар",
        "Дәрігердің тәжірибесі мен мәртебесі",
        "Ауырсынусыз және жайлылық",
        "Пайызсыз адал бөліп төлеу",
      ],
    },
    {
      id: "age",
      title: "Жасыңызды көрсетіңіз (емдеу жоспарын таңдау үшін)",
      options: ["30 жасқа дейін", "30-45 жас", "45-60 жас", "60 жастан жоғары"],
    },
  ];

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: option });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // Move to phone input
    }
  };

  const handleSubmit = () => {
    if (!phone) return;
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Trigger Banner */}
      <section className="relative px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="glass overflow-hidden rounded-[2.5rem] p-6 md:p-14 text-center relative isolate shadow-[0_0_50px_rgba(59,125,255,0.15)] border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex flex-col md:flex-row items-center gap-3 mb-6 md:mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-1.5 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-yellow-400 ring-1 ring-yellow-500/50">
                  <Sparkles className="h-3.5 w-3.5" /> {t("quiz.promo_title")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1.5 text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-red-400/80 border border-red-500/20">
                  {lang === "ru" ? "Осталось всего 7 сертификатов" : "Тек 7 сертификат қалды"}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {t("quiz.promo_title")}
              </h2>
              <p className="text-sm md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl text-balance">
                {t("quiz.promo_desc")}
              </p>
              
              <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-apple-primary w-full sm:w-auto h-14 px-8 text-lg"
                >
                  {t("quiz.cta")} <ChevronRight className="h-5 w-5" />
                </button>
                <p className="text-[11px] md:text-sm text-white/40 font-medium italic">
                  {lang === "ru" ? "*Уже 142 человека получили этот бонус" : "*Осы айда 142 адам осы бонусты алды"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-clinic-950/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-clinic-900 ring-1 ring-black/5 dark:ring-white/10"
            >
              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-clinic-100 dark:bg-clinic-800">
                <motion.div 
                  className="h-full bg-clinic-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep) / (questions.length + 1)) * 100}%` }}
                />
              </div>

              <div className="p-8 md:p-10">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-clinic-400 hover:text-clinic-600 transition-colors"
                >
                  ✕
                </button>

                {!isSubmitted ? (
                  currentStep < questions.length ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <span className="text-sm font-semibold text-clinic-500 uppercase tracking-wider mb-2 block">
                        {lang === "ru" ? `Вопрос ${currentStep + 1} из ${questions.length}` : `Сұрақ ${currentStep + 1} / ${questions.length}`}
                      </span>
                      <h3 className="text-2xl font-bold text-clinic-900 dark:text-white mb-6">
                        {questions[currentStep].title}
                      </h3>
                      <div className="space-y-3">
                        {questions[currentStep].options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOptionSelect(option)}
                            className="w-full text-left px-6 py-4 rounded-xl border-2 border-clinic-100 dark:border-clinic-800 hover:border-clinic-500 dark:hover:border-clinic-500 hover:bg-clinic-50 dark:hover:bg-clinic-800/50 transition-all font-medium text-clinic-900 dark:text-white"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mx-auto mb-6">
                        <Gift className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-clinic-900 dark:text-white text-center mb-2">
                        {lang === "ru" ? "Бонус закреплен за вами!" : "Бонус сізге бекітілді!"}
                      </h3>
                      <p className="text-center text-clinic-600 dark:text-clinic-400 mb-8">
                        {lang === "ru" ? "Оставьте номер телефона, чтобы мы могли отправить вам подтверждение." : "Растауды жіберу үшін телефон нөміріңізді қалдырыңыз."}
                      </p>
                      <div className="space-y-4">
                        <input
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-6 py-4 rounded-xl border-2 border-clinic-100 dark:border-clinic-800 bg-white dark:bg-clinic-900 text-clinic-900 dark:text-white focus:border-clinic-500 outline-none text-lg"
                        />
                        <button
                          onClick={handleSubmit}
                          disabled={!phone}
                          className="btn-apple-primary w-full h-14"
                        >
                          {t("quiz.whatsapp_btn")}
                        </button>
                      </div>
                    </motion.div>
                  )
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-4"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-clinic-900 dark:text-white mb-2">
                      {t("quiz.success_title")}
                    </h3>
                    <p className="max-w-[320px] text-[15px] text-clinic-600 dark:text-clinic-400 mb-8 text-balance leading-relaxed">
                      {t("quiz.success_desc")}
                    </p>
                    
                    <div className="flex flex-col w-full gap-3">
                      <a
                        href={whatsappHref(lang === "ru" ? `Здравствуйте! Я прошел квиз и хочу закрепить бонус 5 000 ₸.
Мой номер: ${phone}
Ответы:
- Для кого: ${answers.target}
- Проблема: ${answers.problem}
- Сроки: ${answers.timeline}
- Приоритет: ${answers.priority}
- Возраст: ${answers.age}` : `Сәлеметсіз бе! Мен квизден өттім және 5 000 ₸ бонусты бекіткім келеді.
Менің нөмірім: ${phone}
Жауаптар:
- Кім үшін: ${answers.target}
- Мәселе: ${answers.problem}
- Мерзімі: ${answers.timeline}
- Басымдық: ${answers.priority}
- Жасы: ${answers.age}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-clinic-600 text-white font-bold hover:bg-clinic-700 transition-all shadow-lg shadow-clinic-500/20"
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span>{t("quiz.whatsapp_btn")}</span>
                      </a>

                      <a
                        href={instagramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl border-2 border-pink-100 dark:border-pink-900/30 text-pink-600 dark:text-pink-400 font-bold hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-all"
                      >
                        <Instagram className="w-5 h-5" />
                        <span>{t("quiz.insta_btn")}</span>
                      </a>
                    </div>
                    
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        setTimeout(() => {
                          setIsSubmitted(false);
                          setCurrentStep(0);
                          setAnswers({});
                          setPhone("");
                        }, 500);
                      }}
                      className="mt-6 text-sm text-clinic-400 hover:text-clinic-600 transition-colors"
                    >
                      {t("quiz.back")}
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
