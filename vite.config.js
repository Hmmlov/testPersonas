import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        legacy: true,
        // Agrega aquí cualquier otra opción que necesites para configurar Rollup
      }
    }
  }
})