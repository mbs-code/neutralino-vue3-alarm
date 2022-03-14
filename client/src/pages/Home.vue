<template>
  <TimeCard :date="date" />
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { useSchedule } from '../composables/useSchedule'
import TimeCard from '../components/home/TimeCard.vue'

const schedule = useSchedule()
const date = ref(new Date())
schedule.everySeconds((fireDate: Date) => {
  date.value = fireDate
})

onUnmounted(() => schedule.clear())
</script>
