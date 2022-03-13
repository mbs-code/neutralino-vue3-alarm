<template>
  <h1>{{ msg }}</h1>

  <p style="white-space: pre;">{{ info }}</p>

  <div>
    <button @click="openDocs">Neu Docs</button>
    |
    <button @click="openTutorial">Tutorial</button>
  </div>

  <hr />

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://webpack.js.org/concepts/" target="_blank">Webpack Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const info = `${window.NL_APPID} is running on port ${window.NL_PORT}  inside ${window.NL_OS}\n`
  + '\n'
  + `neu server: v${window.NL_VERSION} . neu client: v${window.NL_CVERSION}`

const count = ref(0)

const openDocs = () => window.Neutralino.os.open('https://neutralino.js.org/docs')
const openTutorial = () => window.Neutralino.os.open('https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj')
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
