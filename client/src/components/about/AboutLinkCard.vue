
<template>
  <n-card>
    <n-thing>
      <template #avatar>
        <n-avatar :src="about.thumbnail" :size="64" color="white"></n-avatar>
      </template>

      <template #header>{{ about.title }}</template>

      <template #header-extra>
        <n-space>
          <n-button
            v-for="(link, _) of about.links"
            :key="_"
            circle
            size="small"
            tag="a"
            :href="link.url"
            target="_blank"
            @click.prevent="openUrl(link.url)"
          >
            <template #icon>
              <n-icon small :component="link.icon"></n-icon>
            </template>
          </n-button>
        </n-space>
      </template>

      <template #description>{{ about.description }}</template>
    </n-thing>
  </n-card>
</template>

<script setup lang="ts">
import AboutInterface from '../../interfaces/AboutInterface'

defineProps<{
  about: AboutInterface,
}>()

const openUrl = (url: string) => window.Neutralino.os.open(url)
</script>
