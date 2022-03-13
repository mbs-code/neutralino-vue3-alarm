import { createApp } from 'vue'
import router from './router'
import naive from 'naive-ui'

import { initNeutralino } from './neu'
import App from './App.vue'

// init neu
initNeutralino()

// init vue
createApp(App)
  .use(router) // Vue Router
  .use(naive) // UI lib
  .mount('#app')
