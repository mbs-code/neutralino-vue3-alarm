import { Component } from 'vue'

export default interface AboutInterface {
  title: string,
  thumbnail: string,
  description: string,
  links: {
    url: string,
    icon: Component,
  }[],
}
