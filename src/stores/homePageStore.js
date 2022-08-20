/* eslint-disable */
import { defineStore } from 'pinia'

export const useHomePageStore = defineStore('counterStore', () => {
    const head = [
        {
          title: 'Award-winning custom designs and digital branding solutions',
          text: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services. ',
          button: 'Learn More'
        }
      ]
      
      const informations = [
        {
          title: 'PASSIONATE',
          text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions. ',
          image: require('@/assets/home/desktop/illustration-passionate.svg')
        },
        {
          title: 'RESOURCEFUL',
          text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs. ',
          image: require('@/assets/home/desktop/illustration-resourceful.svg')
        },
        {
          title: 'FRIENDLY ',
          text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide. ',
          image: require('@/assets/home/desktop/illustration-resourceful.svg')
        }
      ]
  

  return { head,informations}
})