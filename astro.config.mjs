// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eduver-gutierrez-portfolio.vercel.app',
  output: 'static',

  // El español vive en la raíz (/) y el inglés en /en.
  // Sin librería de i18n: el routing nativo de Astro basta.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Preact con capa de compatibilidad: los componentes siguen escritos como
  // React (mismos hooks, mismo JSX, lucide-react incluido), pero el runtime que
  // baja al navegador pasa de unos 210 KB a poco más de 10 KB.
  integrations: [preact({ compat: true })],

  vite: {
    plugins: [tailwindcss()],

  },
});
