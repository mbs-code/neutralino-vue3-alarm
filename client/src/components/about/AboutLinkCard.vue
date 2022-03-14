
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
            v-for="link of about.links"
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
import AboutLinkCardProps from '../../interfaces/AboutLinkCardProps'

defineProps<{
  about: AboutLinkCardProps,
}>()

const openUrl = (url: string) => window.Neutralino.os.open(url)
</script>
