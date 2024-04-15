import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  
});