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
import { Server as ServerIcon } from '@vicons/ionicons5'
import ServerRepository from '../../repositories/serverRepository'

const onHealthCheck = () => {
  ServerRepository.healthCheck()
}
</script>
