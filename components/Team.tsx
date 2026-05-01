"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Team() {
  const { t, lang } = useLanguage();

  const team = lang === "ru" ? [
    {
      id: "askhat",
      name: "Асхат Кайратович",
      role: "Директор клиники",
      desc: "Я посвятил 17 лет тому, чтобы возвращать людям радость жизни через здоровье их зубов. Моя миссия — чтобы каждый мой пациент снова мог наслаждаться вкусом любимой еды, как в молодости, и чувствовал себя уверенно. Я не просто лечу зубы, я помогаю вам снова полюбить свою улыбку.",
      image: "/images/team/askhat_new.png",
      tags: ["Основатель", "17 лет стажа", "Наставник"],
    },
    {
      id: "arman",
      name: "Доктор Арман",
      role: "Хирург-имплантолог",
      desc: "Провел более 5,000 успешных операций. Специалист по All-on-4 и сложным костным пластикам. Обучался в Швейцарии (Straumann).",
      image: "/images/team/arman.png",
      tags: ["Хирургия", "Straumann Expert"],
    },
    {
      id: "asel",
      name: "Доктор Асель",
      role: "Терапевт, эндодонтист",
      desc: "Ювелирная работа с каналами под микроскопом. Лечит зубы во сне, спасает то, что другие удаляют.",
      image: "/images/team/asel.png",
      tags: ["Микроскоп", "Лечение без боли"],
    },
    {
      id: "aidana",
      name: "Доктор Айдана",
      role: "Ортопед, эстетист",
      desc: "Создает те самые керамические виниры E.max. Проектирует улыбки в 3D (Digital Smile Design).",
      image: "/images/team/aidana.png",
      tags: ["Виниры", "Эстетика"],
    },
  ] : [
    {
      id: "askhat",
      name: "Асхат Қайратұлы",
      role: "Клиника директоры",
      desc: "Мен 17 жылымды тіс саулығы арқылы адамдарға өмір қуанышын қайтаруға арнадым. Менің миссиям — әрбір пациентім жастық шағындағыдай сүйікті тағамының дәмін қайта сезініп, өзіне сенімді болуы. Мен жай ғана тіс емдемеймін, мен сізге өз күлкіңізді қайта жақсы көруге көмектесемін.",
      image: "/images/team/askhat_new.png",
      tags: ["Негізін қалаушы", "17 жыл тәжірибе", "Тәлімгер"],
    },
    {
      id: "arman",
      name: "Арман дәрігер",
      role: "Хирург-имплантолог",
      desc: "5 000-нан астам сәтті ота жасады. All-on-4 және күрделі сүйек пластикасы бойынша маман. Швейцарияда (Straumann) білім алған.",
      image: "/images/team/arman.png",
      tags: ["Хирургия", "Straumann Expert"],
    },
    {
      id: "asel",
      name: "Әсел дәрігер",
      role: "Терапевт, эндодонтист",
      desc: "Микроскоп астында каналдармен зергерлік жұмыс. Тісті ұйқыда емдейді, басқалар жұлып тастайтындарды сақтап қалады.",
      image: "/images/team/asel.png",
      tags: ["Микроскоп", "Ауырсынусыз емдеу"],
    },
    {
      id: "aidana",
      name: "Айдана дәрігер",
      role: "Ортопед, эстетист",
      desc: "Дәл сол E.max керамикалық винирлерін жасайды. Күлкілерді 3D форматта жобалайды (Digital Smile Design).",
      image: "/images/team/aidana.png",
      tags: ["Винирлер", "Эстетика"],
    },
  ];

  const director = team.find(m => m.id === "askhat");
  const doctors = team.filter(m => m.id !== "askhat");

  return (
    <section id="team" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 md:mb-16 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            {lang === "ru" ? "Наша команда" : "Біздің команда"}
          </span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[52px] leading-tight">
            {lang === "ru" ? "Врачи, которым доверяют" : "Сенім білдіретін дәрігерлер"}
          </h2>
          <p className="mt-4 text-[16px] text-white/70 sm:text-[18px]">
            {lang === "ru" 
              ? "В медицине люди покупают у людей. Познакомьтесь с теми, кто будет создавать вашу новую улыбку." 
              : "Медицинада адамдар адамдардан сатып алады. Жаңа күлкіңізді жасайтын мамандармен танысыңыз."}
          </p>
        </div>

        {/* Director - Featured at top */}
        {director && (
          <div className="mb-16 md:mb-24 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-16 glass rounded-[3rem] p-6 md:p-12 border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              {/* Photo Container */}
              <div className="relative shrink-0">
                <div className="relative aspect-square w-56 md:w-72 overflow-hidden rounded-full border-4 border-clinic-500 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-clinic-400 group-hover:shadow-clinic-500/20">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              {/* Content Box */}
              <div className="flex flex-col text-center md:text-left">
                <div className="flex flex-wrap justify-center gap-2 mb-4 md:justify-start">
                  {director.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-clinic-300 ring-1 ring-inset ring-clinic-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-1">
                  <h3 className="text-[28px] md:text-[42px] font-bold text-white leading-tight">
                    {director.name}
                  </h3>
                  <div className="text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em] text-clinic-500">
                    {director.role}
                  </div>
                </div>
                <div className="mt-6 max-w-2xl">
                  <p className="text-[15px] md:text-[18px] leading-relaxed text-white/70 italic">
                    «{director.desc}»
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col items-center text-center glass rounded-[2.5rem] p-6 border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative mb-6 aspect-square w-40 md:w-48 overflow-hidden rounded-full border-4 border-white/10 bg-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.05]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-clinic-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[20px] md:text-[22px] font-bold text-white">
                  {member.name}
                </h3>
                <div className="mt-1 text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-clinic-500">
                  {member.role}
                </div>
                <p className="mt-4 text-[14px] md:text-[14.5px] leading-relaxed text-white/60">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
