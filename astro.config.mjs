import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://firstsecurity.com.br',
  trailingSlash: 'never',
  integrations: [],
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
