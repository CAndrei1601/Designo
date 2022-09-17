/* eslint-disable */
import { defineStore } from "pinia";

export const useProjectsCardStore = defineStore("projectsCardStore", () => {
  const projects = [
    {
      id: 1,
      image: require("@/assets/app-design/desktop/image-airfilter.jpg"),
      altImage: "air filter image",
      title: "AIRFILTER",
      text: "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      id: 2,
      image: require("@/assets/app-design/desktop/image-eyecam.jpg"),
      altImage: "eye cam image",
      title: "EYECAM",
      text: "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 3,
      image: require("@/assets/app-design/desktop/image-faceit.jpg"),
      altImage: "face recognition app image",
      title: "FACEIT",
      text: "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      id: 4,
      image: require("@/assets/app-design/desktop/image-todo.jpg"),
      altImage: "to do  app image",
      title: "TODO",
      text: "A todo app that features cloud sync with light and dark mode",
    },
    {
      id: 5,
      image: require("@/assets/app-design/desktop/image-loopstudios.jpg"),
      altImage: "VR  app image",
      title: "LOOPSTUDIOS",
      text: "A VR experience app made for Loopstudios",
    },
    {
      id: 6,
      image: require("@/assets/web-design/desktop/image-express.jpg"),
      altImage: "shipping website image",
      title: "EXPRESS",
      text: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      id: 7,
      image: require("@/assets/web-design/desktop/image-transfer.jpg"),
      altImage: "money transfer website image",
      title: "TRANSFER",
      text: "Site for low-cost money transfers and sending money within seconds",
    },
    {
      id: 8,
      image: require("@/assets/web-design/desktop/image-photon.jpg"),
      altImage: "music player with HI-FI website image",
      title: "PHOTON",
      text: "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      id: 9,
      image: require("@/assets/web-design/desktop/image-builder.jpg"),
      altImage: "website for local contractors",
      title: "BUILDER",
      text: "Connects users with local contractors based on their location",
    },
    {
      id: 10,
      image: require("@/assets/web-design/desktop/image-blogr.jpg"),
      altImage: "create online blog website image",
      title: "BLOGR",
      text: "Blogr is a platform for creating an online blog or publication",
    },
    {
      id: 11,
      image: require("@/assets/web-design/desktop/image-camp.jpg"),
      altImage: "website for coding and design image",
      title: "CAMP",
      text: "Get expert training in coding, data, design, and digital marketing",
    },
    {
      id: 12,
      image: require("@/assets/graphic-design/desktop/image-change.jpg"),
      altImage: "book image",
      title: "TIM BROWN",
      text: "A book cover a for Tim Brown’s new release, ‘Change’",
    },
    {
      id: 13,
      image: require("@/assets/graphic-design/desktop/image-boxed-water.jpg"),
      altImage: "book image",
      title: "boxed water image",
      text: "A simple packaging concept made for Boxed Water",
    },
    {
      id: 14,
      image: require("@/assets/graphic-design/desktop/image-science.jpg"),
      altImage: "poster image",
      title: "SCIENCE!",
      text: "A poster made in collaboration with the Federal Art Project",
    },
  ];

  return { projects };
});
