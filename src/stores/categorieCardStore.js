/* eslint-disable */
import { defineStore } from 'pinia'

export const useCategorieStore = defineStore('redirectCard', () => {
  const redirectCardInfo = [
    {
      id: 1,
      title: 'WEB DESIGN',
      text: 'VIEW PROJECTS',
      image: require('@/assets/home/mobile/image-web-design.jpg')
    },
    {
      id: 2,
      title: 'APP DESIGN',
      text: 'VIEW PROJECTS',
      image: require('@/assets/home/mobile/image-app-design.jpg')
    },
    {
      id: 3,
      title: 'GRAPHIC DESIGN',
      text: 'VIEW PROJECTS',
      image: require('@/assets/home/mobile/image-graphic-design.jpg')
    }
  ]

  return { redirectCardInfo}
})