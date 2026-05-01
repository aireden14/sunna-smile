"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Guarantees() {
  const { t, lang } = useLanguage();

  const features = lang === "ru" ? [
    {
      title: "Пожизненная гарантия",
      desc: "От производителя на импланты Straumann и Nobel.",
      icon: Award,
    },
    {
      title: "Официальный договор",
      desc: "Вся ответственность и гарантии до 10 лет на работу врачей зафиксированы юридически.",
      icon: FileText,
    },
  ] : [
    {
      title: "Өмірлік кепілдік",
      desc: "Straumann және Nobel импланттарына өндіруші тарапынан.",
      icon: Award,
    },
    {
      title: "Ресми келісімшарт",
      desc: "Барлық жауапкершілік пен дәрігерлер жұмысына 10 жылға дейінгі кепілдік заңды түрде бекітілген.",
      icon: FileText,
    },
  ];

  return (
    <section id="guarantees" className="relative px-4 py-16 md:py-24 bg-[#050505] text-white rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-mesh-clinic opacity-10 mix-blend-overlay" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow border-white/20 bg-white/10 text-white mb-4 inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              {lang === "ru" ? "Юридическая безопасность" : "Заңды қауіпсіздік"}
            </span>
            <h2 className="text-[32px] font-bold tracking-tight sm:text-[48px] leading-tight mb-6">
              {lang === "ru" ? "Международные сертификаты и гарантия в договоре" : "Халықаралық сертификаттар және келісімшарттағы кепілдік"}
            </h2>
            <p className="max-w-md text-[16px] text-white/60 sm:text-[18px] leading-relaxed">
              {lang === "ru" 
                ? "Мы не просто обещаем качество. Каждая коронка и каждый имплант имеют свой паспорт подлинности." 
                : "Біз жай ғана сапаға уәде бермейміз. Әрбір коронка мен әрбір импланттың өзіндік түпнұсқалық паспорты бар."}
            </p>

            <div className="mt-10 space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/5 text-clinic-500 border border-white/10">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-bold text-white">{f.title}</h4>
                    <p className="mt-1 text-[15px] text-white/50 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md aspect-video md:aspect-auto md:h-[420px]">
            <img
              src="/images/certs/certificates.png"
              alt="Dental Certificates"
              className="h-full w-full object-cover rounded-[2rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
