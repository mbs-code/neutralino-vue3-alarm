import { createApp } from 'vue'
import App from './App.vue'

declare global {
  interface Window {
    Neutralino: any
  }
}

// vue の展開
createApp(App).mount('#app')

// neu の展開
window.Neutralino.init();
