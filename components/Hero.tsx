import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./ButtonLink";
import { InstagramIcon } from "./icons";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden bg-[#A98F78] pt-28 text-white monogram-bg">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.28),transparent_30rem),linear-gradient(135deg,#CBB7A3_0%,#A98F78_52%,#987B64_100%)]" />
      <div className="container-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-28 md:grid-cols-[1fr_0.92fr]">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.34em] text-[#EFE3D7]">{siteConfig.role}</p>
          <h1 className="font-serif-display text-6xl font-semibold leading-[0.95] md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-white/82">
            Ciência e propósito em cada detalhe do seu cuidado.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={siteConfig.whatsappUrl}
              variant="light"
              trackingEvent="whatsapp_click"
              trackingLabel="hero"
            >
              Agendar consulta
            </ButtonLink>
            <ButtonLink
              href={siteConfig.instagramUrl}
              icon={<InstagramIcon className="h-4 w-4" />}
              variant="light"
              trackingEvent="instagram_click"
              trackingLabel="hero"
            >
              Instagram
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] self-end">
          <div className="absolute -inset-5 rounded-[3rem] bg-white/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-t-[11rem] rounded-b-[2rem] border border-white/25 bg-[#EFE3D7]/15 soft-shadow">
            {/* Troque siteConfig.portraitImage em lib/site-config.ts para atualizar a foto principal. */}
            <Image
              src={siteConfig.portraitImage}
              alt="Foto da Dra. Jéssica Mayara"
              width={900}
              height={900}
              priority
              className="h-[560px] w-full object-cover object-[50%_28%]"
            />
            <div className="hero-fade absolute inset-x-0 bottom-0 h-44" />
          </div>
        </div>
      </div>

      <div className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-44" />
      <a
        href="#sobre"
        aria-label="Ir para a seção sobre"
        className="absolute bottom-8 left-1/2 z-20 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/40 bg-white/18 text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#8F7460]"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
