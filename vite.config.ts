import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import fs from 'fs';

const blogIds = fs
  .readdirSync('./src/content/blog')
  .filter(f => f.endsWith('.md'))
  .map(f => `/blog/${f.replace('.md', '')}`);

export default defineConfig(({ command }) => {
  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      sitemap({
        hostname: 'https://ludokino.net',
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