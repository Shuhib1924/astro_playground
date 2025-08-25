// @ts-check
import { defineConfig } from 'astro/config';

import qwikdev from '@qwikdev/astro';

import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';
import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), alpinejs(), db()],

  vite: {
    plugins: [tailwindcss()]
  }
});