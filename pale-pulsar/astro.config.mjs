import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // example: Use tailwind.config.cjs
      config: './tailwind.config.cjs',
    }),
  ],
});
