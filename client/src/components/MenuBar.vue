<template>
  <n-space>
    <router-link v-for="menu of menuRoutes" :to="menu.path" custom v-slot="{ navigate, href }">
      <!-- selected -->
      <n-button
        v-if="isSelectedPage(menu.path)"
        tag="a"
        :href="href"
        type="primary"
        secondary
        @click="navigate"
      >
        <template #icon>
          <n-icon small :component="menu.icon"></n-icon>
        </template>
        {{ menu.name }}
      </n-button>

      <!-- unselected -->
      <n-button v-else tag="a" :href="href" type="default" secondary @click="navigate">
        <template #icon>
          <n-icon small :component="menu.icon"></n-icon>
        </template>
        {{ menu.name }}
      </n-button>
    </router-link>
  </n-space>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { menuRoutes } from '../router'

// routing
const route = useRoute()
const selectedPath = ref(route.path)

watch(() => route.path, () => {
  selectedPath.value = route.path
})

const isSelectedPage = (path: string) => path === selectedPath.value
</script>
