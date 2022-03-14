<template>
  <n-card>
    <n-h3 prefix="bar" style="margin: 0;">
      <n-text type="primary">{{ dateStr }}</n-text>
    </n-h3>

    <div style="font-size: 48px;">{{ timeStr }}</div>
  </n-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'


const props = defineProps<{
  date: Date,
}>()

const dateStr = computed(() => format(props.date, 'yyyy-MM-dd (eee)', { locale: ja }))
const timeStr = computed(() => format(props.date, 'HH:mm:ss'))
</script>
