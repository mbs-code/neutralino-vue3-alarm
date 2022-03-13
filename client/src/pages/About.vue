<template>
  <n-space vertical align="center">
    <h1>Neutralino + Vue3 + Naive + TypeScript + Webpack</h1>

    <h2>Use Library</h2>
    <AboutLibraryPanel></AboutLibraryPanel>

    <h2>Status</h2>
    <AboutStatusPanel></AboutStatusPanel>
  </n-space>
</template>

<script setup lang="ts">
import AboutLibraryPanel from '../components/about/AboutLibraryPanel.vue'
import AboutStatusPanel from '../components/about/AboutStatusPanel.vue'
</script>
