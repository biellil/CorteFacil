import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/login',
  plugins: [react()],
  /* preview: {
    port: 80,
    strictPort: true,
  },
  server: {
    port: 80,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:80',
  }, */
})
