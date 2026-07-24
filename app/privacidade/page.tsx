import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dra. Jéssica Mayara",
  description: "Informações sobre privacidade, contato e uso de dados no site da Dra. Jéssica Mayara.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF7F1] pt-28">
        <section className="container-shell py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#A98F78]">Privacidade</p>
            <h1 className="font-serif-display text-5xl font-semibold leading-tight text-[#3F332C]">
              Política de Privacidade
            </h1>
            <div className="mt-8 space-y-6 text-base leading-8 text-[#5D4B40]">
              <p>
                Esta página explica, de forma simples, como as informações de navegação e contato podem ser usadas
                no site institucional da {siteConfig.name}.
              </p>

              <h2 className="font-serif-display text-3xl font-semibold text-[#3F332C]">Dados de contato</h2>
              <p>
                Ao clicar em WhatsApp ou Instagram, você será direcionada para plataformas externas. As informações
                enviadas por esses canais são usadas apenas para responder dúvidas, agendar atendimentos e dar
                continuidade ao contato solicitado.
              </p>

              <h2 className="font-serif-display text-3xl font-semibold text-[#3F332C]">Medição e anúncios</h2>
              <p>
                Este site pode usar ferramentas como Google Ads, Google Analytics ou Google Tag Manager para medir
                visitas e cliques em botões, como WhatsApp e Instagram. Esses dados ajudam a entender quais canais
                trazem mais contatos, sem publicar informações pessoais no site.
              </p>

              <h2 className="font-serif-display text-3xl font-semibold text-[#3F332C]">Cookies</h2>
              <p>
                Cookies e tecnologias semelhantes podem ser usados para estatísticas, segurança e mensuração de
                campanhas. Você pode bloquear cookies nas configurações do navegador, sabendo que alguns recursos
                podem funcionar de forma limitada.
              </p>

              <h2 className="font-serif-display text-3xl font-semibold text-[#3F332C]">Conteúdo de saúde e estética</h2>
              <p>
                As informações deste site são institucionais e não substituem avaliação profissional. Indicações,
                contraindicações e expectativas de resultado devem ser discutidas individualmente em consulta.
              </p>

              <h2 className="font-serif-display text-3xl font-semibold text-[#3F332C]">Solicitações</h2>
              <p>
                Para solicitar atualização, correção ou exclusão de dados enviados por canais de contato, fale com a
                equipe pelos links oficiais de WhatsApp ou Instagram disponíveis neste site.
              </p>

              <p className="rounded-[1.25rem] border border-[#DDD0C0] bg-white/72 p-5 text-sm leading-6">
                Última atualização: junho de 2026. Antes de publicar campanhas, revise esta política com os dados
                reais de contato, localização e registro profissional.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
