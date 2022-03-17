<template>
  <n-button tertiary type="info" @click="onHealthCheck">
    <template #icon>
      <n-icon>
        <ServerIcon />
      </n-icon>
    </template>
    Server Health Check
  </n-button>
</template>

<script setup lang="ts">
import { useNeu } from '../../composables/useNeu'

const onHealthCheck = async () => {
  await useNeu().healthCheck()
}
</script>
