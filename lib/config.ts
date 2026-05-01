export const clinic = {
  name: "Sunna Smile",
  tagline: "Революция вашей улыбки",
  city: "Алматы",
  address: "пр. Аль-Фараби, 77, Алматы",
  phoneDisplay: "+7 (700) 123-45-67",
  // WhatsApp prefers numbers without + or spaces
  whatsappNumber: "77001234567",
  instagramHandle: "sunna_smile_",
  email: "hello@sunnasmile.kz",
  hours: "Пн–Сб · 09:00 – 21:00",
};

export const whatsappHref = (text = "Здравствуйте! Хочу записаться на консультацию в Sunna Smile.") =>
  `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const instagramHref = `https://instagram.com/${clinic.instagramHandle}`;
