// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
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

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],

    resolve: {
      alias: {
        // lucide-react 1.x no declara "exports", así que Node toma su build
        // CommonJS y los imports con nombre revientan al prerenderizar.
        // Apuntando al bundle ESM se resuelve en servidor y en cliente, y
        // Rollup sigue haciendo tree-shaking: solo entran los iconos usados.
        'lucide-react': 'lucide-react/dist/esm/lucide-react.mjs',
      },
    },

    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
