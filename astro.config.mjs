import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://firstsecurity.com.br',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/legal/'),
      serialize(item) {
        if (
          item.url === 'https://firstsecurity.com.br/' ||
          item.url === 'https://firstsecurity.com.br/servicos' ||
          item.url === 'https://firstsecurity.com.br/red-team' ||
          item.url === 'https://firstsecurity.com.br/orcamento'
        ) {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        if (item.url.includes('/servicos/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        if (item.url.includes('/segmentos/') || item.url.includes('/compliance/')) {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        if (item.url.includes('/pentest/')) {
          return { ...item, priority: 0.85, changefreq: 'weekly' };
        }
        return { ...item, priority: 0.7 };
      },
    }),
  ],
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
