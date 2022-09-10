/* eslint-disable */
import { defineStore } from "pinia";

export const useTopBannerStore = defineStore("topBanner", () => {
  const bannerInfo = [
    {
      id: 1,
      title: "App Design",
      text: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    },
    {
      id: 2,
      title: "Web Design",
      text: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    },
    {
      id: 2,
      title: "Graphic Design",
      text: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    },
  ];

  return { bannerInfo };
});
