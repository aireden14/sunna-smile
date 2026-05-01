"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Sparkles, ShieldCheck, Star } from "lucide-react";
import { whatsappHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t, lang } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const renderTitle = () => {
    const title = t("hero.title");
    if (lang === "ru") {
      return (
        <>
          <span className="text-apple-shimmer">Революция</span> вашей улыбки
        </>
      );
    } else {
      return (
        <>
          Күлкіңіздің <span className="text-apple-shimmer">революциясы</span>
        </>
      );
    }
  };

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden px-4 pb-12 pt-36 sm:pt-44 flex flex-col items-center justify-center min-h-[85vh]"
    >
      {/* Background Glows for Depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <motion.div
          style={{ y, opacity }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center relative"
        >
          {/* Floating cards - CENTERED ON SIDES */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.8 },
              x: { duration: 0.8, delay: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="glass absolute -left-20 xl:-left-36 top-1/2 -translate-y-1/2 hidden lg:block max-w-[220px] p-5 rounded-[2rem] shadow-2xl z-10"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-clinic-400 mb-2 font-bold">
              Digital Smile Design
            </div>
            <div className="text-[15px] font-semibold text-white leading-tight">
              {t("hero.floating_smile")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, 15, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 1 },
              x: { duration: 0.8, delay: 1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="glass absolute -right-20 xl:-right-36 top-1/2 -translate-y-1/2 hidden lg:block p-5 rounded-[2rem] shadow-2xl z-10"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black shadow-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-[0.2em] text-clinic-400 font-bold mb-1">
                  Straumann
                </div>
                <div className="text-[15px] font-semibold text-white leading-tight">
                  {t("hero.floating_guarantee")}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.25em] text-white/40 mb-8 block"
          >
            {t("hero.tagline")}
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] md:text-[86px] font-bold tracking-tight text-white mb-8 leading-[1.05] text-balance"
          >
            {renderTitle()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 max-w-2xl text-balance text-[18px] leading-relaxed text-white/60 sm:text-[22px]"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-primary w-full sm:w-auto px-10 h-16 text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {t("hero.cta")}
            </a>
            <a href="#implantology" className="btn-apple-glass w-full sm:w-auto px-10 h-16 text-lg">
              {t("nav.implantology")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[14px] text-white/30"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-clinic-500/50" />
              10 {t("hero.stats_experience")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-clinic-500/50 text-clinic-500/50" />
              4.9 · 1200+ {t("hero.stats_patients")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-clinic-500/50" />
              Straumann · Nobel · 3Shape
            </span>
          </motion.div>

          {/* Mobile version of the cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row w-full gap-4 lg:hidden"
          >
            <div className="glass flex-1 p-4 sm:p-5 rounded-[1.5rem] flex items-center gap-4 text-left">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-clinic-400 font-bold mb-0.5">
                  Digital Smile Design
                </div>
                <div className="text-[13px] font-semibold text-white leading-tight">
                  {t("hero.floating_smile")}
                </div>
              </div>
            </div>

            <div className="glass flex-1 p-4 sm:p-5 rounded-[1.5rem] flex items-center gap-4 text-left">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-black">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-clinic-400 font-bold mb-0.5">
                  Straumann
                </div>
                <div className="text-[13px] font-semibold text-white leading-tight">
                  {t("hero.floating_guarantee")}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
