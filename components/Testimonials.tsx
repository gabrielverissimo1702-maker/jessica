import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Anderson Santos",
    text: "Cheguei ao consultório com o couro cabeludo inflamado, com queda capilar aguda, muito avançada. Fui muito bem atendido e acolhido pela Dra. Jéssica Mayara, uma excelente profissional, e excepcional ser humano, muito carismática, séria, e muito cuidadosa! Estou gostando dos resultados após 8 sessões. E muito em breve darei continuidade com mais sessões ao meu tratamento!",
    avatar: "/images/avatar-1.svg",
  },
  {
    name: "Rafael Nunes",
    text: "Fiz meu tratamento com a Dra Jéssica e o que eu posso dizer é que o resultado foi extremamente satisfatório. A Jéssica é uma excelente profissional, competente, simpática, explica todo o procedimento com clareza, o custo benefício tbm é o melhor em relação a outras clínicas. Para quem tá em dúvida, pode fazer sem medo.",
    avatar: "/images/avatar-2.svg",
  },
  {
    name: "Wendel",
    text: "Desde o início, a doutora Jessica foi muito atenciosa, sempre transparente ao falar como funciona o processo de tratamento. Fiz o acompanhamento por 4 meses e fiquei muito satisfeito com o resultado, com certeza eu recomendo muito. Ela é uma excelente profissional, e tenho certeza que quando forem investir na autoestima de vocês, não vão se arrepender.",
    avatar: "/images/avatar-3.svg",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-monogram relative overflow-hidden bg-[#FAF7F1] py-24 md:py-32">
      <div className="container-shell relative z-10">
        <SectionHeading eyebrow="Depoimentos" title="O que meus pacientes dizem" center />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative overflow-hidden rounded-[1.5rem] border border-[#DDD0C0] bg-white/76 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A98F78]/14"
            >
              <span className="absolute right-6 top-2 font-serif-display text-8xl leading-none text-[#CBB7A3]/30">“</span>
              <div className="relative z-10">
                <div className="flex gap-1 text-[#A98F78]" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 min-h-[6rem] text-base leading-7 text-[#5D4B40]">{testimonial.text}</p>
                <div className="mt-7 flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar de ${testimonial.name}`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full"
                  />
                  <p className="font-semibold text-[#3F332C]">{testimonial.name}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
