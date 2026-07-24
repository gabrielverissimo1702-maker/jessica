import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./ButtonLink";
import { InstagramIcon } from "./icons";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#A98F78] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.2),transparent_21rem),linear-gradient(135deg,#CBB7A3,#987B64)]" />
      <div className="container-shell relative z-10 grid items-center gap-9 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="font-serif-display text-4xl font-semibold md:text-5xl">TEMPO É CABELO!</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
            Agende sua consulta e descubra o melhor protocolo para você e para sua autoestima.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={siteConfig.whatsappUrl}
              variant="light"
              trackingEvent="whatsapp_click"
              trackingLabel="final_cta"
            >
              Agendar consulta
            </ButtonLink>
            <ButtonLink
              href={siteConfig.instagramUrl}
              icon={<InstagramIcon className="h-4 w-4" />}
              variant="light"
              trackingEvent="instagram_click"
              trackingLabel="final_cta"
            >
              Instagram
            </ButtonLink>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <div className="grid h-72 w-72 place-items-center overflow-hidden rounded-full border border-white/35 bg-white/92 p-8 shadow-2xl shadow-[#765F4F]/25">
            <Image
              src="/images/dra-jessica-logo-selo.png"
              alt="Logo da Dra. Jéssica Mayara"
              width={520}
              height={520}
              className="h-full w-full scale-[1.18] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
