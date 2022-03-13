import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'

// init neu
require('./neu.ts')

// init vue
const app = createApp(App).use(naive).mount('#app')
