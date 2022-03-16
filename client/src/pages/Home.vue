<template>
  <TimeCard :date="date" />
  <n-button @click="dispatch">せんど</n-button>
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

const dispatch = () => {
  console.log('でぃすぱっち')
  const extension = 'js.neutralino.server'
  const event = 'notify'
  const data = {
    message: 'はろー'
  }

  window.Neutralino.extensions.dispatch(extension, event, data)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log("Extension isn't loaded!")
    })

}

onUnmounted(() => schedule.clear())
</script>
