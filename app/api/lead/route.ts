import { NextResponse } from "next/server";

type LeadBody = {
  name?: string;
  phone?: string;
  lang?: string;
  date?: string;
  time?: string;
  service?: string;
  doctor?: string;
  page?: string;
};

const leadEndpoint =
  process.env.LEAD_ENDPOINT_URL || "https://tg-transcriber-bot-feka.onrender.com/lead";

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function whatsappLinkFromPhone(phone = "") {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 10) digits = `7${digits}`;
  if (digits.length === 11 && digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  return digits.length >= 10 ? `https://wa.me/${digits}` : "";
}

async function sendDirectTelegramLead({
  name,
  phone,
  date,
  time,
  service,
  doctor,
  page,
  lang,
}: {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  doctor: string;
  page: string;
  lang: string;
}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || process.env.LEADS_CHAT_ID;
  if (!token || !chatId) return false;

  const whatsappLink = whatsappLinkFromPhone(phone);
  const text = [
    "<b>Новая заявка: Запись Sunna Smile</b>",
    "",
    "<b>Сайт:</b> sunna-smile",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    whatsappLink ? `<b>WhatsApp:</b> ${escapeHtml(whatsappLink)}` : "",
    "",
    `<b>Сообщение:</b> Запись на ${escapeHtml(date)} в ${escapeHtml(time)}`,
    service ? `<b>Услуга:</b> ${escapeHtml(service)}` : "",
    doctor ? `<b>Врач:</b> ${escapeHtml(doctor)}` : "",
    `<b>Язык:</b> ${escapeHtml(lang || "ru")}`,
    page ? `<b>Страница:</b> ${escapeHtml(page)}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  let body: LeadBody = {};

  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const service = String(body.service || "").trim();
  const doctor = String(body.doctor || "").trim();
  const date = String(body.date || "").trim();
  const time = String(body.time || "").trim();

  if (!name || phone.replace(/\D/g, "").length < 7 || !date || !time) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const leadResponse = await fetch(leadEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.LEAD_FORM_SECRET
        ? { "X-Lead-Secret": process.env.LEAD_FORM_SECRET }
        : {}),
    },
    body: JSON.stringify({
      site: "sunna-smile",
      title: "Запись Sunna Smile",
      name,
      phone,
      message: `Запись на ${date} в ${time}`,
      page: body.page || "",
      fields: {
        "Дата": date,
        "Время": time,
        "Услуга": service,
        "Врач": doctor,
        "Язык": body.lang || "ru",
      },
    }),
  });

  if (
    !leadResponse.ok &&
    !(await sendDirectTelegramLead({
      name,
      phone,
      date,
      time,
      service,
      doctor,
      page: body.page || "",
      lang: body.lang || "ru",
    }))
  ) {
    return NextResponse.json({ ok: false, error: "lead_request_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
