/* eslint-disable */
import { defineStore } from "pinia";

export const uselocationsStore = defineStore("locationsStore", () => {
  const locations = [
    {
      id: 1,
      image: require("@/assets/shared/desktop/canada-ilustration.svg"),
      title: "Canada",
    },
    {
      id: 2,
      image: require("@/assets/shared/desktop/australia-ilustration.svg"),
      title: "Australia",
    },
    {
      id: 3,
      image: require("@/assets/shared/desktop/united-kingdom-ilustration.svg"),
      title: "United Kingdom",
    },
  ];
  return { locations };
});
