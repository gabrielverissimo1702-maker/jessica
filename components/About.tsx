import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="section-monogram relative overflow-hidden bg-[#FAF7F1] py-24 md:py-32">
      <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#DDD0C0]/65 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#DDD0C0] bg-white soft-shadow">
            {/* Troque siteConfig.brandingImage em lib/site-config.ts por imagem de consultório, branding ou detalhe profissional. */}
            <Image
              src={siteConfig.brandingImage}
              alt="Dra. Jéssica Mayara em ambiente de atendimento"
              width={900}
              height={1280}
              className="h-[560px] w-full object-cover object-[50%_28%]"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Sobre mim"
            title="Mais que estética. É sobre autoestima, saúde e transformação."
          />
          <div className="mt-7 space-y-5 text-lg leading-8 text-[#5D4B40]">
            <p>
              Sou biomédica tricologista e acredito que resultados consistentes começam com um diagnóstico preciso. Por isso, uno ciência, tecnologia e protocolos personalizados para tratar as causas da queda de cabelo.
            </p>
            <p>
              Cada tratamento é desenvolvido de forma individualizada, com foco na saúde do couro cabeludo, no fortalecimento dos fios e em resultados reais

            </p>
          </div>
          <div className="mt-8">
            <ButtonLink href="#servicos" variant="secondary" trackingEvent="internal_cta_click" trackingLabel="about_services">
              Saiba mais sobre mim
            </ButtonLink>
          </div>
          <div className="mt-8 flex items-center gap-5 rounded-[1.25rem] border border-[#DDD0C0] bg-white/70 p-5">
            <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full border border-[#DDD0C0] bg-[#FAF7F1]">
              <Image
                src={siteConfig.logoImage}
                alt="Monograma da Dra. JÃ©ssica Mayara"
                width={180}
                height={180}
                className="h-full w-full scale-[2.15] object-cover"
              />
            </div>
            <div>
              <p className="font-serif-display text-2xl font-semibold text-[#3F332C]">{siteConfig.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[#765F4F]">{siteConfig.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
