"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ScanLine,
  Stethoscope,
  Syringe,
  Crown,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { whatsappHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function Implantology() {
  const [active, setActive] = useState(0);
  const { t, lang } = useLanguage();

  const steps = lang === "ru" ? [
    {
      icon: ScanLine,
      title: "3D-диагностика",
      minutes: "30 мин",
      desc: "Компьютерная томография и 3D-сканирование. Создаем цифровой двойник вашей челюсти и показываем будущую улыбку еще до старта.",
      bullets: ["3D-томография", "Сканер iTero", "Digital Smile Design"],
      image: "/images/implant_step1.png",
    },
    {
      icon: Stethoscope,
      title: "План лечения",
      minutes: "45 мин",
      desc: "Консилиум ведущих хирургов и ортопедов. Мы фиксируем точную стоимость, сроки и даем юридическую гарантию в договоре.",
      bullets: ["Консилиум 2 врачей", "Точная смета", "Договор и гарантия"],
      image: "/images/implant_step2.png",
    },
    {
      icon: Syringe,
      title: "Установка импланта",
      minutes: "40–60 мин",
      desc: "Имплантация по 3D-шаблону: точность до миллиметра без лишних разрезов. Во сне или под местной анестезией — абсолютно без боли.",
      bullets: ["Straumann · Nobel", "Navigation surgery", "Седация по желанию"],
      image: "/images/implant_step3.png",
    },
    {
      icon: Crown,
      title: "Идеальная коронка",
      minutes: "1 визит",
      desc: "Установка премиальной циркониевой коронки. Она идеально совпадает по цвету и форме с вашими зубами, возвращая уверенность.",
      bullets: ["Zirconia · E.max", "Estetic match", "Гарантия 10 лет"],
      image: "/images/implant_step4.png",
    },
  ] : [
    {
      icon: ScanLine,
      title: "3D-диагностика",
      minutes: "30 мин",
      desc: "Компьютерлік томография және 3D-сканерлеу. Жақ сүйегіңіздің цифрлық телқожасын жасаймыз және бастамас бұрын болашақ күлкіңізді көрсетеміз.",
      bullets: ["3D-томография", "iTero сканері", "Digital Smile Design"],
      image: "/images/implant_step1.png",
    },
    {
      icon: Stethoscope,
      title: "Емдеу жоспары",
      minutes: "45 мин",
      desc: "Жетекші хирургтар мен ортопедтердің консилиумы. Біз нақты құнын, мерзімін бекітеміз және келісімшартта заңды кепілдік береміз.",
      bullets: ["2 дәрігердің консилиумы", "Нақты смета", "Келісімшарт және кепілдік"],
      image: "/images/implant_step2.png",
    },
    {
      icon: Syringe,
      title: "Имплант орнату",
      minutes: "40–60 мин",
      desc: "3D-үлгі бойынша имплантация: артық кесусіз миллиметрге дейінгі дәлдік. Ұйқыда немесе жергілікті анестезиямен — мүлдем ауырсынусыз.",
      bullets: ["Straumann · Nobel", "Navigation surgery", "Қалауыңызша седация"],
      image: "/images/implant_step3.png",
    },
    {
      icon: Crown,
      title: "Мінсіз коронка",
      minutes: "1 визит",
      desc: "Премиум цирконий коронкасын орнату. Ол тістеріңіздің түсі мен пішініне толық сәйкес келеді, сенімділікті қайтарады.",
      bullets: ["Zirconia · E.max", "Estetic match", "10 жыл кепілдік"],
      image: "/images/implant_step4.png",
    },
  ];

  const S = steps[active];

  return (
    <section id="implantology" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 md:mb-12 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex">{t("nav.implantology")}</span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[52px] text-balance leading-tight">
            {lang === "ru" ? "Безупречная улыбка по швейцарским протоколам" : "Швейцариялық хаттамалар бойынша мінсіз күлкі"}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] text-white/70 sm:text-[19px]">
            {lang === "ru" ? "Мы используем только оригинальные системы имплантации Straumann и Nobel Biocare, обеспечивая 99.8% приживаемости." : "Біз тек түпнұсқа Straumann және Nobel Biocare имплантация жүйелерін қолданамыз, 99.8% жерсінуін қамтамасыз етеміз."}
          </p>
        </div>

        <div className="glass-strong grid grid-cols-1 gap-6 rounded-[2.5rem] p-4 md:p-8 lg:grid-cols-[1.1fr_1.4fr] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">
          {/* Steps list */}
          <div className="flex flex-col gap-3">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`relative flex items-start gap-4 rounded-3xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-white bg-white shadow-xl shadow-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-colors ${
                      isActive
                        ? "bg-clinic-900 text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className={`text-[14px] md:text-[15px] font-bold transition-colors ${isActive ? "text-clinic-950" : "text-white"}`}>
                        {String(i + 1).padStart(2, "0")} · {s.title}
                      </div>
                      <div className={`text-[11px] font-bold transition-colors ${isActive ? "text-clinic-600" : "text-white/40"}`}>
                        {s.minutes}
                      </div>
                    </div>
                    <div className={`mt-1 text-[13px] md:text-[13.5px] leading-snug line-clamp-2 transition-colors ${isActive ? "text-clinic-900/70" : "text-white/60"}`}>
                      {s.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail card */}
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-clinic-50 via-white to-clinic-100 p-6 md:p-8 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col"
              >
                <div className="mt-2 md:mt-6 flex-1 lg:flex lg:gap-8">
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-clinic-600">
                      {lang === "ru" ? `Шаг ${active + 1} / ${steps.length}` : `Қадам ${active + 1} / ${steps.length}`}
                    </div>
                    <h3 className="mt-2 text-[28px] md:text-[40px] font-bold leading-tight tracking-tight text-clinic-950">
                      {S.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-[15px] md:text-[16.5px] leading-relaxed text-clinic-900/80">
                      {S.desc}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {S.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2.5 text-[14px] md:text-[14.5px] font-medium text-clinic-950"
                        >
                          <CheckCircle2 className="h-[18px] w-[18px] text-clinic-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-8 h-48 overflow-hidden rounded-3xl lg:mt-0 lg:h-auto lg:w-64 border border-white/50 shadow-lg">
                    <img
                      src={S.image}
                      alt={S.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={whatsappHref(
                      lang === "ru" 
                        ? `Здравствуйте! Расскажите про шаг "${S.title}" в имплантации.` 
                        : `Сәлеметсіз бе! Имплантациядағы "${S.title}" қадамы туралы айтып беріңізші.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-apple-primary w-full sm:w-auto px-8"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {lang === "ru" ? "Спросить врача" : "Дәрігерден сұрау"}
                  </a>
                  <button
                    onClick={() =>
                      setActive((a) => (a + 1) % steps.length)
                    }
                    className="btn-apple-glass w-full sm:w-auto px-8"
                  >
                    {lang === "ru" ? "Следующий шаг →" : "Келесі қадам →"}
                  </button>
                </div>

                {/* Background step number */}
                <div className="pointer-events-none absolute -right-8 -top-8 select-none text-[180px] md:text-[220px] font-bold leading-none text-clinic-900/5">
                  {active + 1}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
