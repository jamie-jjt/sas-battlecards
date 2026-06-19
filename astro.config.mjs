import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jamie-jjt.github.io',
  base: '/sas-battlecards',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
