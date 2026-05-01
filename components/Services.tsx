"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Stethoscope,
  Smile,
  Sparkles,
  Syringe,
  Crown,
  Baby,
  HeartPulse,
  ShieldCheck,
  Utensils,
} from "lucide-react";

export default function Services() {
  const { t, lang } = useLanguage();

  const services = lang === "ru" ? [
    {
      icon: Syringe,
      title: "Имплантация",
      desc: "Straumann, Nobel Biocare. All-on-4 / All-on-6 за 1 день.",
    },
    {
      icon: Smile,
      title: "Эстетика",
      desc: "Виниры E.max, цифровая визуализация будущей улыбки.",
    },
    {
      icon: Sparkles,
      title: "Отбеливание",
      desc: "Zoom 4 · ZOOM White. До 8 тонов за один визит.",
    },
    {
      icon: HeartPulse,
      title: "Омоложение лица",
      desc: "Сохранение овала лица и предотвращение возрастных морщин.",
    },
    {
      icon: ShieldCheck,
      title: "Постоянная фиксация",
      desc: "Отказ от съемных протезов. Зубы, которые не подведут.",
    },
    {
      icon: Utensils,
      title: "Здоровье ЖКТ",
      desc: "Идеальное жевание мяса и овощей. Долголетие начинается с еды.",
    },
    {
      icon: Crown,
      title: "Протезирование",
      desc: "Циркониевые коронки, мосты, съёмные протезы нового поколения.",
    },
    {
      icon: Stethoscope,
      title: "Терапия",
      desc: "Лечение кариеса под микроскопом. Без боли, под седацией.",
    },
    {
      icon: Baby,
      title: "Детская стоматология",
      desc: "Бережный приём, игровая атмосфера, профилактика.",
    },
  ] : [
    {
      icon: Syringe,
      title: "Имплантация",
      desc: "Straumann, Nobel Biocare. 1 күнде All-on-4 / All-on-6.",
    },
    {
      icon: Smile,
      title: "Эстетика",
      desc: "E.max винирлері, болашақ күлкіні цифрлық визуализациялау.",
    },
    {
      icon: Sparkles,
      title: "Ағарту",
      desc: "Zoom 4 · ZOOM White. Бір рет келгенде 8 тонға дейін.",
    },
    {
      icon: HeartPulse,
      title: "Бетті жасарту",
      desc: "Бет сопақшасын сақтау және жасқа байланысты әжімдердің алдын алу.",
    },
    {
      icon: ShieldCheck,
      title: "Тұрақты фиксация",
      desc: "Алынбалы протездерден бас тарту. Сізді алдамайтын тістер.",
    },
    {
      icon: Utensils,
      title: "Асқазан-ішек жолдарының саулығы",
      desc: "Ет пен көкөністерді мінсіз шайнау. Ұзақ өмір сүру тамақтанудан басталады.",
    },
    {
      icon: Crown,
      title: "Протездеу",
      desc: "Цирконий коронкалары, көпірлер, жаңа буынның алынбалы протездері.",
    },
    {
      icon: Stethoscope,
      title: "Терапия",
      desc: "Кариесті микроскоппен емдеу. Ауырсынусыз, седациямен.",
    },
    {
      icon: Baby,
      title: "Балалар стоматологиясы",
      desc: "Ұқыпты қабылдау, ойын атмосферасы, алдын алу.",
    },
  ];

  return (
    <section id="services" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 md:mb-14 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4">{t("nav.services")}</span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[52px] leading-tight">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-[16px] text-white/70 sm:text-[18px] text-balance">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass group cursor-default rounded-3xl p-6 md:p-8 border border-white/5 bg-white/5 backdrop-blur-xl"
            >
              <div className="mb-6 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-clinic-500 to-clinic-800 text-white shadow-lg shadow-clinic-500/20">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-white/60">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
