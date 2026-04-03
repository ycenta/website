import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import fs from 'fs';

const HOSTNAME = 'https://ludokino.net';

const blogDir = './src/content/blog';
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
const blogIds = blogFiles.map(f => `/blog/${f.replace('.md', '')}`);

/**
 * Parse le frontmatter d'un fichier Markdown et retourne les métadonnées OG.
 */
function parseFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx < 0) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return meta;
}

/**
 * Plugin Vite qui génère og-metadata.json dans dist/ au build.
 * Ce fichier est lu par l'Edge Function Netlify pour injecter
 * les OG tags dynamiques pour les bots non reconnus (ex: Bluesky Cardyb).
 */
function ogMetadataPlugin(): Plugin {
  return {
    name: 'og-metadata',
    apply: 'build',
    closeBundle() {
      const defaultOg = {
        title: 'LUDOKINO — Jeux vidéo, anime et culture geek',
        description: 'Jeux vidéo, anime, tokusatsu, musique et tech. LUDOKINO c\'est le média des passionnés de culture geek et otaku.',
        image: `${HOSTNAME}/img/og-image.jpg`,
        url: HOSTNAME,
        type: 'website',
      };

      const routes: Record<string, typeof defaultOg> = {
        '/': defaultOg,
        '/shows': { ...defaultOg, title: 'Émissions — LUDOKINO', url: `${HOSTNAME}/shows` },
        '/blog': { ...defaultOg, title: 'Blog — LUDOKINO', url: `${HOSTNAME}/blog` },
        '/downloads': { ...defaultOg, title: 'Goodies — LUDOKINO', url: `${HOSTNAME}/downloads` },
        '/about': { ...defaultOg, title: 'À propos — LUDOKINO', url: `${HOSTNAME}/about` },
        '/mentions-legales': { ...defaultOg, title: 'Mentions légales — LUDOKINO', url: `${HOSTNAME}/mentions-legales` },
      };

      // Ajouter les articles de blog
      for (const file of blogFiles) {
        const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
        const meta = parseFrontmatter(raw);
        const id = file.replace('.md', '');
        const thumbnail = meta.thumbnail || defaultOg.image;
        routes[`/blog/${id}`] = {
          title: meta.title ? `${meta.title} — LUDOKINO` : defaultOg.title,
          description: meta.excerpt || defaultOg.description,
          image: thumbnail.startsWith('http') ? thumbnail : `${HOSTNAME}${thumbnail}`,
          url: `${HOSTNAME}/blog/${id}`,
          type: 'article',
        };
      }

      fs.writeFileSync(path.join('dist', 'og-metadata.json'), JSON.stringify(routes, null, 2));
      console.log('✅ og-metadata.json generated');
    },
  };
}

export default defineConfig(({ command }) => {
  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      sitemap({
        hostname: HOSTNAME,
        dynamicRoutes: [
          '/',
          '/shows',
          '/blog',
          '/downloads',
          '/about',
          '/mentions-legales',
          ...blogIds,
        ],
      }),
      ogMetadataPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});