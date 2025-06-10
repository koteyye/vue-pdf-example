import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Базовый путь для GitHub Pages - имя твоего репозитория
  // Замени 'pdf-canvas' на имя своего репозитория
  base: '/pdf-canvas/',
})
