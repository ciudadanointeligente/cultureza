// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: "https://cultureza.ciudadaniai.org",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs()],

  devToolbar: {
    enabled: false
  }
});