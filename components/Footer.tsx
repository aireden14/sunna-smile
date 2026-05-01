"use client";

import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { clinic, instagramHref, whatsappHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="px-4 pb-10 pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass flex flex-col gap-8 rounded-[2.5rem] p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Rights */}
            <div className="flex flex-col gap-4">
              <div className="text-[20px] font-bold text-white tracking-tight">
                {clinic.name}
              </div>
              <div className="text-[13px] text-white/50 leading-relaxed">
                © {new Date().getFullYear()} {clinic.name}. <br/>
                {lang === "ru" ? "Все права защищены." : "Барлық құқықтар қорғалған."}
              </div>
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-clinic-500 shrink-0 mt-0.5" />
                <div className="text-[14px] text-white/70">
                  <div className="font-bold text-white mb-1">{lang === "ru" ? "Адрес" : "Мекен-жайы"}</div>
                  {lang === "ru" ? "г. Алматы, пр. Аль-Фараби, 17/1" : "Алматы қ., Әл-Фараби даңғ., 17/1"}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-clinic-500 shrink-0 mt-0.5" />
                <div className="text-[14px] text-white/70">
                  <div className="font-bold text-white mb-1">{lang === "ru" ? "График работы" : "Жұмыс кестесі"}</div>
                  {lang === "ru" ? "Пн-Сб: 09:00 — 20:00" : "Дс-Сн: 09:00 — 20:00"}
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4 md:items-end">
              <div className="font-bold text-white mb-1">{lang === "ru" ? "Мы в соцсетях" : "Әлеуметтік желілер"}</div>
              <div className="flex items-center gap-3">
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-clinic-500 hover:border-clinic-400 hover:shadow-lg hover:shadow-clinic-500/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-green-500 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-[11px] text-white/20 uppercase tracking-[0.2em]">
            {lang === "ru" 
              ? "Лицензия на медицинскую деятельность № KZ · Не является публичной офертой" 
              : "Медициналық қызметке лицензия № KZ · Жалпыға ортақ оферта болып табылмайды"}
          </div>
        </div>
      </div>
    </footer>
  );
}
