import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // aponta para o diretório atual como raiz
  build: {
    outDir: 'dist',
  }
});
