import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // 1 MiB
    target: 'es2015',
    polyfillDynamicImport: false,
    minify: false,
    legacy: true,
    outDir: 'dist'
  }
})