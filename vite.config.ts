import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          filename: './stats.html',
        }),
      ],
    },
  },
})
