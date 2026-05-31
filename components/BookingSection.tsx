"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, Stethoscope, ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

// Mock data for available slots
const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Skip Sundays
    if (d.getDay() !== 0) {
      dates.push(d);
    }
  }
  return dates.slice(0, 7); // Show next 7 available days
};

const availableTimes = ["10:00", "11:30", "14:00", "15:30", "17:00"];

export default function BookingSection() {
  const { t, lang } = useLanguage();
  const dates = generateDates();
  
  const dayNames = lang === "ru" 
    ? ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    : ["Жс", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"];

  const services = lang === "ru" ? [
    { id: "implant", label: "Имплантация (отсутствует зуб)", doctor: "Доктор Арман (Хирург-имплантолог)" },
    { id: "veneers", label: "Виниры и эстетика", doctor: "Доктор Айдана (Ортопед-эстетист)" },
    { id: "treatment", label: "Болит зуб / Лечение", doctor: "Доктор Асель (Терапевт-эндодонтист)" },
    { id: "consultation", label: "Первичная консультация", doctor: "Дежурный врач" },
  ] : [
    { id: "implant", label: "Имплантация (тіс жоқ)", doctor: "Арман дәрігер (Хирург-имплантолог)" },
    { id: "veneers", label: "Винирлер және эстетика", doctor: "Айдана дәрігер (Ортопед-эстетист)" },
    { id: "treatment", label: "Тіс ауырады / Емдеу", doctor: "Әсел дәрігер (Терапевт-эндодонтист)" },
    { id: "consultation", label: "Алғашқы консультация", doctor: "Кезекші дәрігер" },
  ];
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback">("idle");
  const [error, setError] = useState("");
  const [lastWhatsappMessage, setLastWhatsappMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !phone) return;

    const dateStr = `${dayNames[selectedDate.getDay()]}, ${selectedDate.getDate()} ${selectedDate.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'kk-KZ', { month: 'long' })}`;
    
    const message = lang === "ru" 
      ? `Здравствуйте! Хочу забронировать время на консультацию.
Имя: ${name}
Телефон: ${phone}
Дата: ${dateStr}
Время: ${selectedTime}
Услуга: ${selectedService.label}
Врач: ${selectedService.doctor}`
      : `Сәлеметсіз бе! Консультацияға уақыт брондағым келеді.
Аты: ${name}
Телефон: ${phone}
Күні: ${dateStr}
Уақыты: ${selectedTime}
Қызмет: ${selectedService.label}
Дәрігер: ${selectedService.doctor}`;

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          lang,
          date: dateStr,
          time: selectedTime,
          service: selectedService.label,
          doctor: selectedService.doctor,
          page: window.location.href,
        }),
      });

      if (!response.ok) throw new Error("lead_failed");
      setLastWhatsappMessage(message);
      setStatus("sent");
      setName("");
      setPhone("");
    } catch {
      setStatus("fallback");
      setError(
        lang === "ru"
          ? "Telegram-заявка временно недоступна, открыли WhatsApp с готовым сообщением."
          : "Telegram өтінімі уақытша қолжетімсіз, WhatsApp дайын хабарламамен ашылды."
      );
      window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="booking" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 md:mb-16 max-w-2xl text-center flex flex-col items-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <CalendarIcon className="h-3.5 w-3.5" />
            {t("nav.booking")}
          </span>
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[48px] leading-tight">
            {lang === "ru" ? "Выберите удобное время" : "Ыңғайлы уақытты таңдаңыз"}
          </h2>
          <p className="mt-4 text-[16px] text-white/70 sm:text-[18px]">
            {lang === "ru" ? "Забронируйте визит онлайн." : "Онлайн режимде жазылыңыз."}
          </p>
        </div>

        <div className="glass rounded-[2.5rem] p-5 md:p-10 shadow-2xl max-w-4xl mx-auto border border-white/10 bg-white/5 backdrop-blur-2xl">
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            
            {/* Service Selection */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-clinic-500" /> {lang === "ru" ? "Что вас беспокоит?" : "Сізді не мазалайды?"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`cursor-pointer rounded-2xl border-2 p-4 transition-all active:scale-[0.98] ${
                      selectedService.id === service.id
                        ? "border-clinic-500 bg-clinic-500/10 shadow-lg shadow-clinic-500/10"
                        : "border-white/10 hover:border-white/30 bg-white/5"
                    }`}
                  >
                    <div className="font-bold text-white">{service.label}</div>
                    <div className="text-sm text-white/40 mt-1">{lang === "ru" ? "Врач" : "Дәрігер"}: {service.doctor}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Date Selection */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-clinic-500" /> {lang === "ru" ? "Выберите день" : "Күнді таңдаңыз"}
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {dates.map((date, i) => {
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    return (
                      <div
                        key={i}
                        onClick={() => setSelectedDate(date)}
                        className={`cursor-pointer rounded-xl border-2 p-3 text-center transition-all active:scale-[0.95] ${
                          isSelected
                            ? "border-clinic-500 bg-clinic-500 text-white shadow-lg shadow-clinic-500/20"
                            : "border-white/10 hover:border-white/30 bg-white/5 text-white"
                        }`}
                      >
                        <div className={`text-[10px] uppercase mb-1 font-bold ${isSelected ? "text-white/90" : "text-clinic-400"}`}>
                          {dayNames[date.getDay()]}
                        </div>
                        <div className="text-lg md:text-xl font-bold">
                          {date.getDate()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div className={!selectedDate ? "opacity-30 pointer-events-none" : ""}>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-clinic-500" /> {lang === "ru" ? "Выберите время" : "Уақытты таңдаңыз"}
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map((time) => (
                    <div
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`cursor-pointer rounded-xl border-2 py-4 text-center font-bold transition-all active:scale-[0.95] ${
                        selectedTime === time
                          ? "border-clinic-500 bg-clinic-500 text-white shadow-lg shadow-clinic-500/20"
                          : "border-white/10 hover:border-white/30 bg-white/5 text-white"
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className={!selectedTime ? "opacity-30 pointer-events-none" : ""}>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-clinic-500" /> {lang === "ru" ? "Ваши данные" : "Деректеріңіз"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={lang === "ru" ? "Ваше имя" : "Атыңыз"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-5 py-4 h-14 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-clinic-500 outline-none backdrop-blur-sm transition-all"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-5 py-4 h-14 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-clinic-500 outline-none backdrop-blur-sm transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              {status === "sent" && (
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="text-sm font-semibold text-clinic-300">
                    {lang === "ru" ? "Заявка отправлена. Мы скоро свяжемся с вами." : "Өтінім жіберілді. Жақында сізбен хабарласамыз."}
                  </p>
                  <a
                    href={whatsappHref(lastWhatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white underline decoration-clinic-300/60 underline-offset-4 transition hover:text-clinic-200"
                  >
                    {lang === "ru" ? "Можно сразу написать в WhatsApp" : "WhatsApp-қа бірден жазуға болады"}
                  </a>
                </div>
              )}
              {error && (
                <p className="text-center text-sm font-semibold text-white/70">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !name || !phone || status === "sending"}
                className="btn-apple-primary w-full h-16 text-lg"
              >
                {status === "sending" ? (lang === "ru" ? "Отправляем..." : "Жіберіліп жатыр...") : (lang === "ru" ? "Записаться" : "Жазылу")} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
