"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Case = {
  id: string;
  title: string;
  tag: string;
  description: string;
  beforeImage: string;
  afterImage: string;
};

export default function BeforeAfter() {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);

  const cases: Case[] = lang === "ru" ? [
    {
      id: "veneers",
      title: "Керамические виниры E.max",
      tag: "Эстетика · 10 зубов",
      description:
        "Преображение за 2 визита. Исправили форму и цвет зубов, создав гармоничную и естественную эстетику, о которой мечтала пациентка.",
      beforeImage: "/images/veneers_before.png",
      afterImage: "/images/veneers_after.png",
    },
    {
      id: "implant",
      title: "Имплантация All-on-4",
      tag: "Имплантология · Nobel",
      description:
        "Восстановление всех зубов за 1 день по технологии All-on-4. Вернули возможность комфортно жевать и открыто улыбаться.",
      beforeImage: "/images/implant_before.png",
      afterImage: "/images/implant_after.png",
    },
    {
      id: "whitening",
      title: "ZOOM 4 Whitening",
      tag: "Отбеливание · 8 тонов",
      description:
        "Осветление на 8 тонов всего за 90 минут. Абсолютно безопасно для эмали благодаря современной системе Philips Zoom 4.",
      beforeImage: "/images/whitening_before.png",
      afterImage: "/images/whitening_after.png",
    },
  ] : [
    {
      id: "veneers",
      title: "E.max керамикалық винирлері",
      tag: "Эстетика · 10 тіс",
      description:
        "2 визиттегі өзгеріс. Тістердің пішіні мен түсін түзетіп, пациент армандаған үйлесімді және табиғи эстетиканы жасадық.",
      beforeImage: "/images/veneers_before.png",
      afterImage: "/images/veneers_after.png",
    },
    {
      id: "implant",
      title: "All-on-4 имплантациясы",
      tag: "Имплантология · Nobel",
      description:
        "All-on-4 технологиясы бойынша 1 күнде барлық тістерді қалпына келтіру. Ыңғайлы шайнау және ашық күлу мүмкіндігін қайтардық.",
      beforeImage: "/images/implant_before.png",
      afterImage: "/images/implant_after.png",
    },
    {
      id: "whitening",
      title: "ZOOM 4 Whitening",
      tag: "Ағарту · 8 тон",
      description:
        "Небәрі 90 минут ішінде 8 тонға ағарту. Philips Zoom 4 заманауи жүйесінің арқасында эмаль үшін мүлдем қауіпсіз.",
      beforeImage: "/images/whitening_before.png",
      afterImage: "/images/whitening_after.png",
    },
  ];

  const c = cases[index];

  return (
    <section id="cases" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 md:mb-12 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            {lang === "ru" ? "Портфолио" : "Портфолио"}
          </span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[52px] leading-tight">
            {lang === "ru" ? "Улыбки, которые говорят сами за себя" : "Өздігінен сөйлейтін күлкілер"}
          </h2>
          <p className="mt-4 text-[16px] text-white/70 sm:text-[18px]">
            {lang === "ru" ? "Оцените реальные результаты наших пациентов. Потяните ползунок, чтобы увидеть разницу." : "Пациенттеріміздің нақты нәтижелерін бағалаңыз. Айырмашылықты көру үшін жүгірткіні тартыңыз."}
          </p>
        </div>

        <div className="glass-strong rounded-[2.5rem] p-4 md:p-6 border border-white/10 bg-white/5 backdrop-blur-2xl">
          <Slider
            key={c.id}
            before={<img src={c.beforeImage} alt="Before" className="h-full w-full object-cover" />}
            after={<img src={c.afterImage} alt="After" className="h-full w-full object-cover" />}
            lang={lang}
          />

          <div className="mt-8 md:mt-10 flex flex-col items-start justify-between gap-6 px-2 sm:flex-row sm:items-center">
            <div className="flex-1">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-clinic-500">
                {c.tag}
              </div>
              <h3 className="mt-2 text-[24px] md:text-[32px] font-bold text-white leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 max-w-xl text-[14.5px] md:text-[16px] text-white/60 leading-relaxed">
                {c.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="prev case"
                onClick={() =>
                  setIndex((i) => (i - 1 + cases.length) % cases.length)
                }
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="next case"
                onClick={() => setIndex((i) => (i + 1) % cases.length)}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 px-2">
            {cases.map((cc, i) => (
              <button
                key={cc.id}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-12 bg-clinic-500" : "w-6 bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`case ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  before,
  after,
  lang,
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  lang: string;
}) {
  const [pos, setPos] = useState(55);
  const dragging = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const setFromX = useCallback((clientX: number) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromX(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [setFromX]);

  return (
    <div
      ref={boxRef}
      onMouseDown={(e) => {
        dragging.current = true;
        setFromX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromX(e.touches[0].clientX);
      }}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-[2rem]"
    >
      {/* After (bottom layer) */}
      <div className="absolute inset-0">{after}</div>
      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {before}
      </div>

      {/* Labels */}
      <span className="absolute left-4 top-4 rounded-full bg-black/50 px-4 py-1.5 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
        {lang === "ru" ? "До" : "Дейін"}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-clinic-600/80 px-4 py-1.5 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10 shadow-lg shadow-clinic-600/20">
        {lang === "ru" ? "После" : "Кейін"}
      </span>

      {/* Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/30 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-0.5 text-white">
            <ChevronLeft className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

