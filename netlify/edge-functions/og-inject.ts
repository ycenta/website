/**
 * Edge Function — Injection dynamique des OG tags
 *
 * Gère les bots non couverts par l'extension Netlify Prerender
 * (Bluesky Cardyb, WhatsApp, Telegram, Slack…).
 *
 * Le filtrage par user-agent et par route est fait au niveau du `config`,
 * donc cette fonction ne s'exécute jamais pour les visiteurs normaux
 * ni pour les assets statiques (.js, .css, images…).
 */

import type { Config, Context } from "@netlify/edge-functions";
import ogData from "./og-metadata.json" with { type: "json" };

type OgMeta = {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
};

const metadata = ogData as Record<string, OgMeta>;

export default async function handler(request: Request, context: Context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") ?? "";

  // Sécurité : ne modifier que le HTML
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Trouver les OG tags pour cette route
  const { pathname } = new URL(request.url);
  const route = pathname.replace(/\/$/, "") || "/";
  const meta = metadata[route];

  if (!meta) {
    return response;
  }

  // Construire les balises OG
  const ogTags = `
    <meta property="og:type" content="${esc(meta.type)}" />
    <meta property="og:site_name" content="LUDOKINO" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:image" content="${esc(meta.image)}" />
    <meta property="og:url" content="${esc(meta.url)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@ludokino" />
    <meta name="twitter:title" content="${esc(meta.title)}" />
    <meta name="twitter:description" content="${esc(meta.description)}" />
    <meta name="twitter:image" content="${esc(meta.image)}" />`;

  let html = await response.text();

  // Supprimer les balises OG/Twitter fallback existantes
  html = html.replace(/<meta\s+(?:property="og:|name="twitter:)[^>]*\/?>/gi, "");

  // Remplacer le <title> fallback par celui de la page
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(meta.title)}</title>`);

  // Injecter les OG tags avant </head>
  html = html.replace("</head>", `${ogTags}\n  </head>`);

  return new Response(html, response);
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Config inline — la fonction ne tourne QUE si :
 * 1. La route matche une page réelle (pas les assets)
 * 2. Le user-agent contient un bot non couvert par le Prerender
 *
 * Le regex est case-insensitive via [Xx] pour chaque nom de bot,
 * car la doc Netlify ne garantit pas le flag `i`.
 * Pas besoin d'ancrer ($) : "Cardyb/0.1" matche bien "[Cc]ardyb".
 */
export const config: Config = {
  path: ["/", "/shows", "/blog", "/blog/*", "/downloads", "/about", "/mentions-legales"],
  header: {
    "user-agent": "([Cc]ardyb|[Ww]hats[Aa]pp|[Tt]elegram[Bb]ot|[Ss]lackbot)",
  },
};
