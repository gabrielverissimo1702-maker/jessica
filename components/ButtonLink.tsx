"use client";

import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "light";
  trackingEvent?: "whatsapp_click" | "instagram_click" | "internal_cta_click";
  trackingLabel?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  trackingEvent,
  trackingLabel,
}: ButtonLinkProps) {
  const styles = {
    primary: "bg-[#A98F78] text-white shadow-lg shadow-[#A98F78]/24 hover:bg-[#987B64]",
    secondary: "border border-[#DDD0C0] bg-white/70 text-[#8F7460] hover:border-[#A98F78] hover:bg-white",
    light: "border border-white/35 bg-white/14 text-white hover:bg-white hover:text-[#8F7460]",
  };

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      onClick={() => {
        if (!trackingEvent || typeof window.gtag !== "function") {
          return;
        }

        window.gtag("event", trackingEvent, {
          event_category: "engagement",
          event_label: trackingLabel ?? String(children),
        });

        if (
          trackingEvent === "whatsapp_click" &&
          siteConfig.googleTagId &&
          siteConfig.googleAdsConversionLabel
        ) {
          window.gtag("event", "conversion", {
            send_to: `${siteConfig.googleTagId}/${siteConfig.googleAdsConversionLabel}`,
          });
        }
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {icon}
      {children}
    </a>
  );
}
