"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center p-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
      <div className="relative flex items-center h-7 sm:h-8">
        {(["ru", "kz"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`
              relative px-3 sm:px-5 h-full text-[12px] sm:text-[13px] font-bold tracking-widest transition-colors duration-300 flex items-center justify-center min-w-[48px] sm:min-w-[60px] rounded-full
              ${lang === l ? "text-black" : "text-white/50 hover:text-white"}
            `}
          >
            {lang === l && (
              <motion.div
                layoutId="active-lang-pill"
                className="absolute inset-0 bg-white rounded-full shadow-md"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className="relative z-20 uppercase">{l}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
