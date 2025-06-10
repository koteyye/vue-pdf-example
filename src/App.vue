<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PdfEmbed from 'vue-pdf-embed'

// Путь к PDF файлу с относительным путем
const pdfSource = ref('assets/test_pdf/exampleDoc.pdf')

// Для отслеживания ширины экрана
const isMobile = ref(false)

// Проверка размера экрана при загрузке и изменении размера
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

// Функция для проверки размера экрана
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768
}
</script>

<template>
  <div class="pdf-container">
    <h1>PDF Просмотрщик</h1>
    <div class="pdf-viewer" :class="{ 'mobile-view': isMobile }">
      <PdfEmbed :source="pdfSource" class="pdf-document" />
    </div>
  </div>
</template>

<style>
/* Сбросим некоторые глобальные стили, которые могут мешать */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}

body {
  display: block !important;
  place-items: initial !important;
}

#app {
  max-width: 100% !important;
  padding: 0.5rem !important;
  margin: 0 !important;
  box-sizing: border-box !important;
  overflow-x: hidden !important;
  width: 100% !important;
}

.pdf-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.pdf-viewer {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

/* Стили для самого PDF документа */
.pdf-document {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

/* Стили для внутренних элементов PDF компонента */
:deep(.vue-pdf-embed > div),
:deep(.vue-pdf-embed canvas),
:deep(.vue-pdf-embed .page) {
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
  box-sizing: border-box !important;
}

/* Стили для мобильной версии */
.mobile-view {
  width: 100%;
  max-width: 100%;
  min-width: auto;
  padding: 0;
  box-sizing: border-box;
}

/* Переопределение стилей для мобильных устройств */
@media (max-width: 768px) {
  #app {
    padding: 0.25rem !important;
    min-width: auto !important;
  }
  
  .pdf-container {
    padding: 0;
    min-width: auto;
  }
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .pdf-viewer {
    border-radius: 4px;
    border-width: 1px;
    min-width: auto;
  }
}

/* Для самых маленьких экранов */
@media (max-width: 375px) {
  html, body, #app, .pdf-container, .pdf-viewer {
    min-width: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
  
  #app {
    padding: 0.25rem !important;
  }
}
</style>
