import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/components/ui': path.resolve(import.meta.dirname, './src/ui'),
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
