# Checklist para publicar e anunciar

## Antes de ativar Google Ads

- Publicar o site em um domínio próprio, como `drajessicamayara.com.br`.
- Trocar os placeholders em `lib/site-config.ts`:
  - WhatsApp real.
  - Instagram real.
  - Registro profissional.
  - Local/região de atendimento.
  - Fotos reais em `public/images`.
- Revisar a Política de Privacidade em `/privacidade` com os dados reais.
- Evitar promessas como "resultado garantido", "cura", "sem risco" ou comparações agressivas de antes/depois.
- Evitar termos de medicamentos prescritos, venda de substâncias ou alegações médicas não comprovadas.

## Rastreamento recomendado

1. Criar uma tag no Google Ads, Google Analytics ou Google Tag Manager.
2. Inserir o ID em `googleTagId`, dentro de `lib/site-config.ts`.
3. Criar uma conversão para clique no WhatsApp.
4. Inserir o rótulo em `googleAdsConversionLabel`, dentro de `lib/site-config.ts`.

Os botões principais já disparam estes eventos quando a tag estiver ativa:

- `whatsapp_click`
- `instagram_click`
- conversão de Google Ads no clique de WhatsApp, se houver label preenchida

## Páginas úteis para campanha

- Landing page: `/`
- Política de Privacidade: `/privacidade`

## Observação

Como estética envolve saúde e bem-estar, a campanha deve ser revisada com cuidado para seguir as políticas da plataforma, as normas profissionais aplicáveis e a LGPD.
