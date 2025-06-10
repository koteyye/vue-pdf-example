import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Базовый путь для GitHub Pages - имя твоего репозитория
  // Замени 'pdf-canvas' на имя своего репозитория
  base: '/pdf-canvas/',
  build: {
    // Правильные пути к ресурсам при сборке
    assetsDir: '',
    // Генерация относительных путей вместо абсолютных
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Настройка имен файлов без хеширования
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
