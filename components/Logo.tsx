import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
      <span
        className={`grid h-12 w-12 place-items-center overflow-hidden rounded-full border ${
          light ? "border-white/30 bg-white" : "border-[#DDD0C0] bg-white"
        }`}
      >
        <Image
          src={siteConfig.logoImage}
          alt="Logo Dra. Jéssica Mayara"
          width={96}
          height={96}
          className="h-full w-full scale-[2.7] object-cover"
        />
      </span>
      <span className="leading-tight">
        <span className={`block font-serif-display text-xl font-semibold ${light ? "text-white" : "text-[#3F332C]"}`}>
          {siteConfig.name}
        </span>
        <span className={`block text-xs uppercase tracking-[0.28em] ${light ? "text-white/70" : "text-[#765F4F]"}`}>
          {siteConfig.role}
        </span>
      </span>
    </a>
  );
}
