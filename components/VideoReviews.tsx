"use client";

import { motion } from "framer-motion";
import { PlayCircle, Video } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const videos = [
  { id: 1, src: "/videos/reel1.mp4" },
  { id: 2, src: "/videos/reel2.mp4" },
  { id: 3, src: "/videos/reel3.mp4" },
  { id: 4, src: "/videos/reel4.mp4" },
];

export default function VideoReviews() {
  const { t, lang } = useLanguage();
  const duplicatedVideos = [...videos, ...videos, ...videos];

  return (
    <section id="reviews" className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 md:mb-12 max-w-2xl px-4 text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <Video className="h-3.5 w-3.5" />
            {lang === "ru" ? "Видео-отзывы" : "Бейне-пікірлер"}
          </span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[52px] leading-tight">
            {lang === "ru" ? "Эмоции, которые не подделать" : "Жасанды емес эмоциялар"}
          </h2>
          <p className="mt-4 text-[16px] text-white/70 sm:text-[18px]">
            {lang === "ru" ? "Посмотрите на искреннюю радость наших пациентов. Это то, ради чего мы работаем каждый день." : "Пациенттеріміздің шынайы қуанышын көріңіз. Бұл біз күн сайын жұмыс істейтін мақсатымыз."}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 px-4 cursor-grab active:cursor-grabbing"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedVideos.map((vid, i) => (
              <div
                key={`${vid.id}-${i}`}
                className="relative shrink-0 w-[200px] md:w-[300px] aspect-[9/16] rounded-3xl md:rounded-[2.5rem] overflow-hidden glass p-1 border border-white/10"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-black">
                  <video
                    className="h-full w-full object-cover"
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  >
                    <source src={vid.src} type="video/mp4" />
                    {lang === "ru" ? "Ваш браузер не поддерживает видео." : "Браузеріңіз бейнені қолдамайды."}
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white">
                      <PlayCircle className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
