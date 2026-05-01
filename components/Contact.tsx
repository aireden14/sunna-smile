"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { clinic, whatsappHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t, lang } = useLanguage();

  const items = lang === "ru" ? [
    { icon: MapPin, label: "Адрес", value: "г. Алматы, пр. Аль-Фараби, 17/1" },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (777) 000-00-00",
      href: `tel:+${clinic.whatsappNumber}`,
    },
    { icon: Clock, label: "Часы работы", value: "Пн-Сб: 09:00 — 20:00" },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@sunnasmile.kz",
      href: "mailto:info@sunnasmile.kz",
    },
  ] : [
    { icon: MapPin, label: "Мекен-жайы", value: "Алматы қ., Әл-Фараби даңғ., 17/1" },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (777) 000-00-00",
      href: `tel:+${clinic.whatsappNumber}`,
    },
    { icon: Clock, label: "Жұмыс кестесі", value: "Дс-Сн: 09:00 — 20:00" },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@sunnasmile.kz",
      href: "mailto:info@sunnasmile.kz",
    },
  ];

  return (
    <section id="contact" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong grid grid-cols-1 gap-10 rounded-[3rem] p-6 md:p-12 border border-white/10 bg-white/5 backdrop-blur-2xl lg:grid-cols-2">
          <div className="flex flex-col">
            <span className="eyebrow mb-4 inline-flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5" />
              {lang === "ru" ? "Свяжитесь с нами" : "Бізбен байланысыңыз"}
            </span>
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-white leading-tight mb-6">
              {lang === "ru" ? "Сделайте первый шаг к идеальной улыбке" : "Кемел күлкіге алғашқы қадам жасаңыз"}
            </h2>
            <p className="max-w-md text-[16px] md:text-[18px] text-white/60 leading-relaxed mb-8">
              {lang === "ru" 
                ? "Запишитесь на подробную консультацию и получите 3D-снимок челюсти в подарок. Ответим в WhatsApp за 2 минуты." 
                : "Толық консультацияға жазылыңыз және сыйлыққа жақ сүйегінің 3D-түсірілімін алыңыз. WhatsApp-та 2 минут ішінде жауап береміз."}
            </p>

            <ul className="space-y-6 mb-10">
              {items.map((item, i) => (
                <Item key={i} {...item} />
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://2gis.kz/almaty/search/%D0%BF%D1%80.%20%D0%90%D0%BB%D1%8C-%D0%A4%D0%B0%D1%80%D0%B0%D0%B1%D0%B8%2C%2017%2F1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-primary h-14"
              >
                {lang === "ru" ? "Открыть в 2GIS" : "2GIS-те ашу"}
              </a>
              <a
                href={whatsappHref()}
                className="btn-apple-glass h-14 text-white"
              >
                <MessageCircle className="h-5 w-5" />
                {lang === "ru" ? "Запись в WhatsApp" : "WhatsApp арқылы жазылу"}
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square md:aspect-auto w-full overflow-hidden rounded-[2.5rem] border border-white/10"
          >
            <iframe
              title="Sunna Smile Map"
              className="absolute inset-0 h-full w-full opacity-60 grayscale-[0.3] invert-[0.9] hue-rotate-180"
              loading="lazy"
              src="https://maps.google.com/maps?q=%D0%BF%D1%80.%20%D0%90%D0%BB%D1%8C-%D0%A4%D0%B0%D1%80%D0%B0%D0%B1%D0%B8%2017%2F1&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="glass pointer-events-none absolute bottom-6 left-6 right-6 rounded-2xl p-5 border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="text-[11px] font-bold uppercase tracking-widest text-clinic-500 mb-1">
                Sunna Smile · {lang === "ru" ? "Алматы" : "Алматы"}
              </div>
              <div className="text-[15px] font-bold text-white leading-snug">
                {lang === "ru" ? "пр. Аль-Фараби, 17/1" : "Әл-Фараби даңғ., 17/1"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/5 text-clinic-500 border border-white/10 group-hover:bg-clinic-500/10 group-hover:border-clinic-500/30 transition-all">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-0.5">
          {label}
        </div>
        <div className="text-[16px] font-bold text-white">{value}</div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
