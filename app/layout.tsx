import type { Metadata } from "next";
import { CookieNotice } from "@/components/CookieNotice";
import { TrackingScripts } from "@/components/TrackingScripts";
import "./globals.css";

const siteUrl = "https://drajessicamayara.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Dra. Jéssica Mayara | Biomédica Tricologista",
    template: "%s | Dra. Jéssica Mayara",
  },

  description:
    "Tratamentos estéticos e capilares personalizados com naturalidade, segurança e cuidado individualizado em Brasília.",

  applicationName: "Dra. Jéssica Mayara",

  authors: [
    {
      name: "Dra. Jéssica Mayara",
    },
  ],

  creator: "Dra. Jéssica Mayara",
  publisher: "Dra. Jéssica Mayara",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dra. Jéssica Mayara | Biomédica Tricologista",
    description:
      "Ciência e propósito em cada detalhe do seu cuidado. Conheça os tratamentos estéticos e capilares da Dra. Jéssica Mayara.",
    url: siteUrl,
    siteName: "Dra. Jéssica Mayara",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/dra-jessica-mayara-foto.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Jéssica Mayara, biomédica tricologista",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dra. Jéssica Mayara | Biomédica Tricologista",
    description:
      "Tratamentos estéticos e capilares personalizados com naturalidade e segurança.",
    images: ["/images/dra-jessica-mayara-foto.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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