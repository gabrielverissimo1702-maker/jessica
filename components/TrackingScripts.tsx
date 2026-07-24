import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

export function TrackingScripts() {
  if (!siteConfig.googleTagId) {
    return null;
  }

  return (
    <>
      {/* Configure o ID em lib/site-config.ts depois de criar a tag no Google Ads ou GTM. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleTagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.googleTagId}');
        `}
      </Script>
    </>
  );
}
