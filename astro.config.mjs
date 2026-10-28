import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://ngaiksiang.github.io/deskkaki/
// Override at build time with SITE_URL / BASE_PATH (custom domain: drop BASE_PATH).
const SITE_URL = process.env.SITE_URL || 'https://ngaiksiang.github.io';

export default defineConfig({
  site: SITE_URL,
  base: process.env.BASE_PATH || '/deskkaki',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
