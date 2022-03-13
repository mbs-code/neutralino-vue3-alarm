import { createApp } from 'vue'
import naive from 'naive-ui'
import { initNeutralino } from './neu'
import App from './App.vue'

// init neu
initNeutralino()

// init vue
createApp(App)
  .use(naive) // UI lib
  .mount('#app')
