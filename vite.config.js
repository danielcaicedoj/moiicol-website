import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/moiicol-website/',
  build: {
    outDir: 'dist', // Asegúrate de que la carpeta de salida sea 'dist'
  },
});
