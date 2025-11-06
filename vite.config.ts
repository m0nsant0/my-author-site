import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ Configuración para GitHub Pages o dominio personalizado
export default defineConfig({
  plugins: [react()],
  base: './',  // 👈 muy importante
})
