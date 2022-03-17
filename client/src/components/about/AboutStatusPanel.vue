<template>
  <n-table size="small" :single-line="false">
    <tbody>
      <tr v-for="[key, value] of statuses">
        <td style="min-width: 120px;">{{ key }}</td>
        <td style="word-break: break-all;">{{ value }}</td>
      </tr>
    </tbody>
  </n-table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNeu } from '../../composables/useNeu'

const statuses = ref([
  ['app id', window.NL_APPID],
  ['app ver', window.NL_APPVERSION],
  ['neu server', window.NL_VERSION],
  ['neu client', window.NL_CVERSION],
  ['port', window.NL_PORT],
  ['os', window.NL_OS],
  ['pid', window.NL_PID],
  ['path', window.NL_CWD],
  ['resource', window.NL_RESMODE],
])

onMounted(async () => {
  const { connected, loaded } = await useNeu().getExtensionStatus()
  statuses.value.push(['loaded ext', loaded.join(', ')])
  statuses.value.push(['connected ext', connected.join(', ')])
})
</script>
