<<<<<<< HEAD
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // penting untuk testing React
    setupFiles: './src/test/setup.js',
  },
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 2ca2546dcd354b278bcbb647febf4beccdb8cf53
})
