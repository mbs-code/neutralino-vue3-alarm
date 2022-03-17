<template>
  <n-space vertical align="center">
    <h1>Neutralino + Vue3 + Naive + TypeScript</h1>

    <h2>Use Library</h2>
    <AboutLibraryPanel></AboutLibraryPanel>

    <h2>Status</h2>
    <AboutStatusPanel></AboutStatusPanel>
    <HealthCheckbutton></HealthCheckbutton>

  </n-space>
</template>

<script setup lang="ts">
import AboutLibraryPanel from '../components/about/AboutLibraryPanel.vue'
import AboutStatusPanel from '../components/about/AboutStatusPanel.vue'
import HealthCheckbutton from '../components/about/HealthCheckButton.vue'
</script>
