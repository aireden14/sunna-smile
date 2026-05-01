"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { clinic, whatsappHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#implantology", label: t("nav.implantology") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#cases", label: t("nav.cases") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "shadow-glass-lg" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 pl-2">
            <Logo />
            <span className="hidden min-[360px]:block text-[15px] font-semibold tracking-tight text-white">
              {clinic.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-[13px] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-primary hidden h-10 px-5 py-0 text-[13px] sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              aria-label="menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl lg:hidden"
            >
              {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 rounded-3xl p-4 lg:hidden border border-white/10"
            >
              <div className="mb-4 px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Меню</span>
              </div>
              <div className="space-y-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-white/80 hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-primary mt-4 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                {t("hero.cta")}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-clinic-500 to-clinic-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
        <path d="M12 2c-3.3 0-6 2.7-6 6 0 3 1.5 5 2.5 7.5S8 22 10 22s2-1.5 2-3.5c0 2 0 3.5 2 3.5s1.5-4 2.5-6.5S20 11 20 8c0-3.3-2.7-6-6-6z" />
      </svg>
    </div>
  );
}
