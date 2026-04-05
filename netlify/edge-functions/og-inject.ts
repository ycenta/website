/**
 * Netlify Edge Function — OG tag injection pour les bots non reconnus
 * par l'extension Prerender (ex: Bluesky Cardyb).
 *
 * Fonctionnement :
 * 1. Détecte les user-agents de bots qui ne sont pas gérés par le prerender
 * 2. Lit og-metadata.json (généré au build) pour trouver les OG tags de la route
 * 3. Remplace les OG fallback dans le HTML par les tags spécifiques à la page
 */

import type { Context } from "https://edge.netlify.com";

// Bots non reconnus par l'extension Netlify Prerender
const EXTRA_BOT_PATTERNS = [
  /cardyb/i,         // Bluesky
  /whatsapp/i,       // WhatsApp -> En theorie devrait être géré comme MetaBot mais autant être safe
  /telegrambot/i,    // Telegram
  /slackbot/i,       // Slack
  /signal/i,         // Signal
];

interface OgMeta {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
}

export default async function handler(request: Request, context: Context) {
  const ua = request.headers.get("user-agent") || "";

  // Ne traiter que les bots non couverts par l'extension Prerender
  const isExtraBot = EXTRA_BOT_PATTERNS.some((pattern) => pattern.test(ua));
  if (!isExtraBot) {
    return context.next();
  }

  // Récupérer la réponse originale
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  // Ne modifier que le HTML
  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();

  // Charger les métadonnées OG
  let ogData: Record<string, OgMeta> | null = null;
  try {
    const metaUrl = new URL("/og-metadata.json", request.url);
    const metaResponse = await fetch(metaUrl.toString());
    if (metaResponse.ok) {
      ogData = await metaResponse.json();
    }
  } catch {
    // Si on ne peut pas charger le JSON, on laisse les fallback
    return new Response(html, { headers: response.headers });
  }

  if (!ogData) {
    return new Response(html, { headers: response.headers });
  }

  // Trouver les métadonnées pour cette route
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, "") || "/";
  const meta = ogData[pathname];

  if (!meta) {
    return new Response(html, { headers: response.headers });
  }

  // Générer les balises OG
  const ogTags = [
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="LUDOKINO" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:image" content="${meta.image}" />`,
    `<meta property="og:url" content="${meta.url}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@ludokino" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.image}" />`,
  ].join("\n    ");

  // Remplacer les OG fallback par les tags spécifiques
  // On supprime le bloc de fallback et on injecte les nouveaux tags
  let modifiedHtml = html;

  // Supprimer les anciennes balises og: et twitter: existantes
  modifiedHtml = modifiedHtml.replace(
    /<meta\s+(?:property="og:|name="twitter:)[^>]*\/?\s*>/gi,
    ""
  );

  // Remplacer le <title> par celui de la page
  modifiedHtml = modifiedHtml.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  // Injecter les nouveaux OG tags juste avant </head>
  modifiedHtml = modifiedHtml.replace(
    "</head>",
    `    ${ogTags}\n  </head>`
  );

  return new Response(modifiedHtml, {
    headers: response.headers,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export const config = {
  path: "/*",
};
