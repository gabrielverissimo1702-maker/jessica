import { navItems, siteConfig } from "@/lib/site-config";
import { InstagramIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#3F332C] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.15fr_0.65fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/62">
            Cuidado capilar com naturalidade, segurança e propósito em cada detalhe.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#CBB7A3]">Navegação</h3>
          <nav className="flex flex-col gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="/privacidade" className="transition hover:text-white">
              Privacidade
            </a>
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#CBB7A3]">Contato</h3>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
              WhatsApp
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
            <span>{siteConfig.professionalRegistry}</span>
            <address className="not-italic leading-6">
              <span className="block font-semibold text-white/86">{siteConfig.location}</span>
              {siteConfig.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/48">
        © 2024 Dra. Jéssica Mayara. Todos os direitos reservados.
      </div>
    </footer>
  );
}
