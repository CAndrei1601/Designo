/* eslint-disable */
import { defineStore } from 'pinia'

export const useNewsletterCardStore = defineStore('newsletterCardStore', () => {
    const cardBotom = [
        {
          title: 'Let’s talk about your project',
          text: 'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow. ',
          button: 'Get in touch'
        }
      ]
  

  return { cardBotom}
})