"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  const trackWhatsapp = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "header",
      });

      if (siteConfig.googleTagId && siteConfig.googleAdsConversionLabel) {
        window.gtag("event", "conversion", {
          send_to: `${siteConfig.googleTagId}/${siteConfig.googleAdsConversionLabel}`,
        });
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-[#FAF7F1]/82 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-5">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#5D4B40] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#A98F78]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={trackWhatsapp}
          className="hidden items-center gap-2 rounded-full bg-[#A98F78] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#A98F78]/24 transition hover:-translate-y-0.5 hover:bg-[#987B64] lg:inline-flex"
        >
          Agendar consulta
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#DDD0C0] bg-white/70 text-[#8F7460] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#DDD0C0] bg-[#FAF7F1] lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-semibold text-[#5D4B40] transition hover:bg-[#EFE3D7]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsapp}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#A98F78] px-5 py-3 text-sm font-semibold text-white"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
