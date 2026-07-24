"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "jm_cookie_notice_ok";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(storageKey) !== "true");
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-[1.25rem] border border-[#DDD0C0] bg-[#FAF7F1]/95 p-5 text-sm text-[#6A5548] shadow-2xl shadow-[#A98F78]/14 backdrop-blur md:flex-row md:items-center md:justify-between">
        <p className="leading-6">
          Usamos cookies e métricas para entender visitas e cliques, melhorar campanhas e facilitar o contato.
          Nenhuma informação sensível de saúde deve ser enviada por este site.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/privacidade" className="font-semibold text-[#8F7460] underline-offset-4 hover:underline">
            Privacidade
          </Link>
          <button
            type="button"
            onClick={() => {
              window.localStorage.setItem(storageKey, "true");
              setVisible(false);
            }}
            className="rounded-full bg-[#A98F78] px-5 py-2.5 font-semibold text-white transition hover:bg-[#987B64]"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
