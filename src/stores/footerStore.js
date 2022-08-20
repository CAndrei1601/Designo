/* eslint-disable */
import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footerStore', () => {
  const contacts = [
    {
      id: 1,
      title: 'Designo Central Office',
      firstText:'3886 Wellington Street',
      secondText:'Toronto, Ontario M9C 3J5'
    },
     {
      id: 2,
      title: 'Contact Us (Central Office)',
      firstText:'P : +1 253-863-8967',
      secondText:'M : contact@designo.co'
    },
  ];

  const logos =
  [
    {
        id:1,
        image: require('@/assets/shared/desktop/icon-facebook.svg')
    },
    {
        id:2,
        image: require('@/assets/shared/desktop/icon-youtube.svg')
    },
    {
        id:3,
        image: require('@/assets/shared/desktop/icon-twitter.svg')
    },
    {
        id:4,
        image: require('@/assets/shared/desktop/icon-pinterest.svg')
    },
    {
        id:5,
        image: require('@/assets/shared/desktop/icon-instagram.svg')
    },
  ]

  return {contacts,logos}
})