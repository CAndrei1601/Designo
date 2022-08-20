/* eslint-disable */
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigationStore', () => {
  const lists = [
    {
      id: 1,
      title: 'OUR COMPANY',
      route:'our-company'
    },
    {
      id: 2,
      title: 'LOCATIONS',
      route:'locations'
    },
    {
      id: 2,
      title: 'CONTACT',
      route:'contact'
    },
  ];

  return { lists}
})