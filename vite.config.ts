import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/zipporah-portfolio-/',
  build: {
    sourcemap: true,
    minify: 'terser',
  },
  server: {
    port: 3000,
    open: true,
  }
})
