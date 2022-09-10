/* eslint-disable */
import { defineStore } from 'pinia'

export const useCategorieStore = defineStore('redirectCard', () => {
  const redirectCardInfo = [
    {
      id: 1,
      title: 'WEB DESIGN',
      text: 'VIEW PROJECTS',
      image: require('@/assets/home/mobile/image-web-design.jpg'),
      tabletImage: require('@/assets/home/tablet/image-web-design.jpg'),
      desktopImage: require('@/assets/home/desktop/image-web-design-large.jpg'),
      route:'web-design'
    },
    {
      id: 2,
      title: 'APP DESIGN',
      text: 'VIEW PROJECTS',
      image: require('@/assets/home/mobile/image-app-design.jpg'),
      tabletImage: require('@/assets/home/tablet/image-app-design.jpg'),
      desktopImage: require('@/assets/home/desktop/image-app-design.jpg'),
      route:'app-design'
    },
    {
      id: 3,
      title: 'GRAPHIC DESIGN',
      text: 'VIEW PROJECTS',
      image: require('@/assets/home/mobile/image-graphic-design.jpg'),
      tabletImage: require('@/assets/home/tablet/image-graphic-design.jpg'),
      desktopImage: require('@/assets/home/desktop/image-graphic-design.jpg'),
      route:'graphic-design'
    }
  ]

  return { redirectCardInfo}
})
