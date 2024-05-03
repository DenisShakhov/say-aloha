import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        page2: path.resolve(__dirname, 'page2.html'),
        page3: path.resolve(__dirname, 'page3.html'),
        page3: path.resolve(__dirname, 'page4.html'),
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  
});