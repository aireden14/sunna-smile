import type { Metadata, Viewport } from "next";
import "./globals.css";
import Background from "@/components/Background";
import LanguageModal from "@/components/LanguageModal";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Sunna Smile | Революция вашей улыбки",
  description: "Премиальная стоматология в Алматы. Имплантация и виниры по швейцарским протоколам.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <LanguageProvider>
          <Background />
          <LanguageModal />
          <main className="relative z-10">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
