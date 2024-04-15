import { defineConfig } from 'vite';

export default defineConfig({
  base: '/say-aloha/',

  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});