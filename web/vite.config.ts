// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [react(), reactRefresh()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001', // Ajuste a porta conforme necessário
    },
  },
})
