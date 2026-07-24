import type { Metadata } from "next";
import { CookieNotice } from "@/components/CookieNotice";
import { TrackingScripts } from "@/components/TrackingScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Jéssica Mayara | Biomédica Tricologista",
  description:
    "Tratamentos estéticos personalizados com naturalidade, segurança e cuidado individualizado.",
  openGraph: {
    title: "Dra. Jéssica Mayara | Biomédica Tricologista",
    description: "Ciência e propósito em cada detalhe do seu cuidado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <TrackingScripts />
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
