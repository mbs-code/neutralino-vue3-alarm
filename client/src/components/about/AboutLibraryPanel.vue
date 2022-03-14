<template>
  <n-grid :x-gap="8" :y-gap="8" cols="1 s:2" responsive="screen">
    <n-grid-item v-for="(about, _) of abouts" :key="_">
      <AboutLinkCard :about="about"></AboutLinkCard>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import AboutLinkCard from './AboutLinkCard.vue'
import {
  BookOutline as BookOutlineIcon,
  LogoGithub as LogoGithubIcon,
} from '@vicons/ionicons5'
import AboutInterface from '../../interfaces/AboutInterface'

const abouts: AboutInterface[] = [
  {
    title: 'Neutralinojs',
    thumbnail: '../assets/neutralino.png',
    description: 'Lightweight desktop app framework.',
    links: [
      { url: 'https://neutralino.js.org/', icon: BookOutlineIcon },
      { url: 'https://github.com/neutralinojs', icon: LogoGithubIcon },
    ],
  },
  {
    title: 'Vue 3',
    thumbnail: '../assets/vue.png',
    description: 'JavaScript framework using virtual dom.',
    links: [
      { url: 'https://v3.vuejs.org/', icon: BookOutlineIcon },
      { url: 'https://github.com/vuejs/core', icon: LogoGithubIcon },
    ],
  },
  {
    title: 'Naive UI',
    thumbnail: '../assets/naive.png',
    description: 'Vue3 UI framework.',
    links: [
      { url: 'https://www.naiveui.com/en-US/light', icon: BookOutlineIcon },
      { url: 'https://github.com/TuSimple/naive-ui', icon: LogoGithubIcon },
    ],
  },
  {
    title: 'xicons',
    thumbnail: '../assets/xicons.png',
    description: 'Vue3 SVG icon components.',
    links: [
      { url: 'https://www.xicons.org/', icon: BookOutlineIcon },
      { url: 'https://github.com/07akioni/xicons', icon: LogoGithubIcon },
    ],
  },
  {
    title: 'TypeScript',
    thumbnail: '../assets/typescript.png',
    description: 'Strongly typed programming language.',
    links: [
      { url: 'https://www.typescriptlang.org/', icon: BookOutlineIcon },
      { url: 'https://github.com/microsoft/TypeScript', icon: LogoGithubIcon },
    ],
  },
  {
    title: 'webpack',
    thumbnail: '../assets/webpack.png',
    description: 'Module bundler.',
    links: [
      { url: 'https://webpack.js.org/', icon: BookOutlineIcon },
      { url: 'https://github.com/webpack/webpack', icon: LogoGithubIcon },
    ],
  },
]
</script>
