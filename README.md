# Sunna Smile — Dental Landing

Премиальный лендинг стоматологической клиники в стиле **Apple / Liquid Glass**.

- **Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · lucide-react
- **Разделы:** Hero · Услуги · Deep Dive Имплантология · Before/After слайдер · Instagram Feed (авто-подтяжка) · Контакты + карта · Footer
- **CTA:** WhatsApp на номер из `lib/config.ts`

## Быстрый старт

```bash
cd apps/sunna-smile
npm install
cp .env.local.example .env.local      # необязательно, для live Instagram
npm run dev                            # http://localhost:3030
```

Production build:

```bash
npm run build
npm start
```

## Instagram Auto-Pull

По умолчанию в секции `SocialFeed` показывается демо-сетка. Чтобы включить
автоматическую подтяжку реальных постов из `@sunna_smile_`:

1. Получите **long-lived access token** через
   [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started).
2. Пропишите в `.env.local`:
   ```
   INSTAGRAM_ACCESS_TOKEN=IGQVJ...
   INSTAGRAM_LIMIT=12
   ```
3. Перезапустите `npm run dev`. Серверный роут `/api/instagram` автоматически
   подтянет последние посты (кэш 10 минут).

Если токена нет — компонент работает в **demo-режиме** с плейсхолдерами и
структурой, готовой к подключению.

## Настройка клиники

Все контакты и handle Instagram — в `lib/config.ts`:

```ts
export const clinic = {
  name: "Sunna Smile",
  whatsappNumber: "77001234567",
  instagramHandle: "sunna_smile_",
  // ...
};
```

## Дизайн-токены

- Цвета: `tailwind.config.ts → colors.clinic`
- Glass-утилиты: `app/globals.css → .glass`, `.glass-strong`, `.btn-apple-*`
- Меш-фон: `.mesh-bg` (радиальные градиенты в clinical blue/white/silver)

## Структура

```
app/
  layout.tsx        — метаданные + mesh bg
  page.tsx          — сборка секций
  api/instagram/    — серверный роут для IG Basic Display
components/
  Navigation Hero Services Implantology BeforeAfter SocialFeed Contact Footer
lib/
  config.ts         — контакты клиники
```

## Деплой

Подходит для Vercel / Netlify. На Vercel — `Add New Project → apps/sunna-smile`,
пробросить переменную `INSTAGRAM_ACCESS_TOKEN` в Environment Variables.
