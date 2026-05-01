"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageModal() {
  const { setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (!saved) {
      setIsOpen(true);
    }
  }, []);

  const selectLanguage = (l: "ru" | "kz") => {
    setLang(l);
    localStorage.setItem("lang", l);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-clinic-900/40 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="glass-strong w-full max-w-sm overflow-hidden rounded-[32px] p-8 text-center shadow-2xl"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-clinic-900 mb-2">
                Выберите язык
              </h2>
              <p className="text-clinic-800/60 font-medium">
                Тілді таңдаңыз
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => selectLanguage("ru")}
                className="btn-apple-primary py-4 text-lg"
              >
                Русский
              </button>
              <button
                onClick={() => selectLanguage("kz")}
                className="btn-apple-glass py-4 text-lg border-clinic-200"
              >
                Қазақ тілі
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
