"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, ExternalLink, RefreshCw } from "lucide-react";
import { clinic, instagramHref } from "@/lib/config";

export type IgMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp?: string;
};

type ApiResponse = {
  ok: boolean;
  configured: boolean;
  data: IgMedia[];
  error?: string;
};

export default function SocialFeed() {
  const [state, setState] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/instagram", { cache: "no-store" });
      const json: ApiResponse = await res.json();
      setState(json);
    } catch (e) {
      setState({
        ok: false,
        configured: false,
        data: [],
        error: (e as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const configured = state?.configured && state?.ok && state.data.length > 0;
  const items: IgMedia[] = configured ? state!.data : placeholderFeed;

  return (
    <section id="feed" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <Instagram className="h-3.5 w-3.5" />
            Instagram · @{clinic.instagramHandle}
          </span>
          <h2 className="text-[36px] font-semibold tracking-tight text-white sm:text-[52px] leading-tight">
            Больше счастливых улыбок
          </h2>
          <p className="mt-4 text-[16px] text-white/70 sm:text-[18px]">
            Следите за нашими ежедневными кейсами, отзывами пациентов и полезными советами от врачей в Instagram.
          </p>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={load}
              className="btn-apple-glass h-11 px-5 py-0 text-[13px]"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Обновить
            </button>
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-primary h-11 px-5 py-0 text-[13px]"
            >
              <Instagram className="h-4 w-4" />
              Перейти в профиль
            </a>
          </div>
        </div>

        {!configured && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50/80 px-4 py-2 text-[12.5px] text-amber-900 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Demo-режим · для live-подтяжки задайте INSTAGRAM_ACCESS_TOKEN
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((m, i) => (
            <motion.a
              key={m.id}
              href={m.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 8) * 0.04, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-glass backdrop-blur-xl"
            >
              <img
                src={m.thumbnail_url || m.media_url}
                alt={m.caption?.slice(0, 80) || "Sunna Smile post"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />

              {m.media_type === "VIDEO" && (
                <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md">
                  <Play className="h-4 w-4" />
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-white">
                  <ExternalLink className="h-3 w-3" />
                  Открыть в Instagram
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}


const placeholderFeed: IgMedia[] = [
  {
    id: "ph-1",
    media_type: "IMAGE",
    media_url: "/images/social_ba_1.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Идеальные виниры E.max. До и после трансформации. #SunnaSmile #Veneers",
  },
  {
    id: "ph-2",
    media_type: "IMAGE",
    media_url: "/images/hero.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Наша уютная клиника ждет вас! Современное оборудование и комфорт. #DentalClinic",
  },
  {
    id: "ph-3",
    media_type: "IMAGE",
    media_url: "/images/veneers_after.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Секрет идеальной улыбки — в деталях. Керамика высшего качества. #SmileDesign",
  },
  {
    id: "ph-4",
    media_type: "IMAGE",
    media_url: "/images/implant_step2.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Индивидуальный план лечения для каждого пациента. Начинаем с консультации. #Health",
  },
  {
    id: "ph-5",
    media_type: "IMAGE",
    media_url: "/images/whitening_after.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Белоснежная улыбка за 60 минут с Zoom 4. Безопасно и эффективно. #Whitening",
  },
  {
    id: "ph-6",
    media_type: "IMAGE",
    media_url: "/images/implant_step1.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Цифровая диагностика — основа точной имплантации. Сканируем в 3D. #DigitalDentistry",
  },
  {
    id: "ph-7",
    media_type: "IMAGE",
    media_url: "/images/implant_step4.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Завершающий этап — установка коронки. Неотличимо от своих зубов. #DentalImplants",
  },
  {
    id: "ph-8",
    media_type: "VIDEO",
    media_url: "/images/hero.png",
    permalink: `https://instagram.com/${clinic.instagramHandle}`,
    caption: "Добро пожаловать в Sunna Smile! Видео-тур по нашей клинике. #Almaty",
  },
];
