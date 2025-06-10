import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Используем относительные пути вместо абсолютных для GitHub Pages
  base: './',
  build: {
    // Настройки сборки для GitHub Pages
    outDir: 'dist',
    assetsDir: 'assets',
    // Генерация относительных путей
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Настройка имен файлов
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
