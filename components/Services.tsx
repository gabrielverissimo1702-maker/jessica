import { Activity, Gem, Microscope } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Saúde Capilar",
    description: "Avaliação do couro cabeludo por meio de exame de tricoscopia para entender queda, rarefação e enfraquecimento.",
    icon: Microscope,
  },
  {
    title: "Queda de Cabelo",
    description: "Protocolos personalizados para apoiar o controle da queda e a melhora da qualidade dos fios.",
    icon: Activity,
  },
  {
    title: "Protocolos Avançados",
    description: "Medicina regenerativa no tratamento capilar.",
    icon: Gem,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F1] to-[#F3EADF] py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="O que eu faço"
          title="Tratamentos personalizados com foco em saúde capilar e autoestima"
          center
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-[1.5rem] bg-white/58 p-7 shadow-sm ring-1 ring-[#DDD0C0]/80 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#A98F78]/14"
              >
                <div className="mb-6 grid h-13 w-13 place-items-center rounded-full bg-[#F3EADF] text-[#A98F78] transition group-hover:scale-105 group-hover:bg-[#A98F78] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif-display text-2xl font-semibold text-[#3F332C]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5D4B40]">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
