import { ClipboardCheck, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./SectionHeading";

const trustItems = [
  {
    title: "Avaliação individual",
    description: "Cada protocolo é indicado após uma conversa cuidadosa sobre objetivos, histórico e necessidades.",
    icon: ClipboardCheck,
  },
  {
    title: "Comunicação responsável",
    description: "As orientações são claras e sem promessa de resultado padronizado, porque cada organismo responde de uma forma.",
    icon: ShieldCheck,
  },
  {
    title: "Atendimento com hora marcada",
    description: "Contato direto para agendamento, confirmação de disponibilidade e informações sobre localização.",
    icon: MapPin,
  },
];

export function TrustAndSafety() {
  return (
    <section className="relative overflow-hidden bg-[#F3EADF] py-20 md:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Transparência"
            title="Cuidado responsável desde o primeiro contato"
          />
          <p className="mt-6 text-base leading-7 text-[#5D4B40]">
            As informações desta página têm caráter institucional e não substituem uma avaliação individual.
            Indicações, contraindicações e expectativas são alinhadas em consulta, com foco em segurança,
            naturalidade e coerência para cada paciente.
          </p>
          <div className="mt-7 rounded-[1.25rem] border border-[#DDD0C0] bg-white/62 p-5 text-sm leading-6 text-[#5D4B40]">
            <p className="font-semibold text-[#3F332C]">{siteConfig.professionalRegistry}</p>
            <p className="mt-3 font-semibold text-[#3F332C]">{siteConfig.location}</p>
            <address className="mt-1 not-italic">
              {siteConfig.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="grid gap-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-[1.25rem] border border-[#DDD0C0] bg-white/72 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A98F78]/14"
              >
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#A98F78] text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-2xl font-semibold text-[#3F332C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5D4B40]">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
