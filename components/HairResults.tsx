import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./ButtonLink";
import { SocialFeed } from "./SocialFeed";

export function HairResults() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-[#FAF7F1] py-24 md:py-32">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#A98F78]">
            Evolução capilar
          </p>
          <h2 className="font-serif-display text-4xl font-semibold leading-tight text-[#3F332C] md:text-5xl">
            RESULTADOS REAIS
          </h2>
          <div className="mt-7">
            <ButtonLink
              href={siteConfig.whatsappUrl}
              trackingEvent="whatsapp_click"
              trackingLabel="hair_results"
            >
              Avaliar meu caso
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14">
          <SocialFeed />
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-[1.25rem] border border-[#DDD0C0] bg-white/72 p-5 text-xs leading-6 text-[#6A5548]">
          Resultados são individuais e dependem de avaliação, indicação adequada e acompanhamento profissional.
          As imagens devem ser usadas somente com autorização expressa. Este conteúdo é informativo e não
          representa garantia de resultado.
        </div>
      </div>
    </section>
  );
}
