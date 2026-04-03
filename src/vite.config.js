import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Set base path for subfolder deployment
// Change BASE_PATH to '/' for root deployment, or '/landing/' for subfolder
const BASE_PATH = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
  },
})