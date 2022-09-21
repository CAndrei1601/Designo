/* eslint-disable */
import { defineStore } from "pinia";

export const useAboutUsStore = defineStore("aboutUsStore", () => {
  const lists = [
    {
      id: 1,
      mainImageMobile: require("@/assets/about/mobile/image-about-hero.jpg"),
      mainImageTablet: require("@/assets/about/tablet/image-about-hero.jpg"),
      mainImageDesktop: require("@/assets/about/desktop/image-about-hero.jpg"),
      title: "About Us",
      text: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
    },
    {
      id: 2,
      mainImageMobile: require("@/assets/about/mobile/image-world-class-talent.jpg"),
      mainImageTablet: require("@/assets/about/tablet/image-world-class-talent.jpg"),
      mainImageDesktop: require("@/assets/about/desktop/image-world-class-talent.jpg"),
      title: "World-class talent",
      firstText:
        "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
      secondText:
        "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    },
    {
      id: 3,
      mainImageMobile: require("@/assets/about/mobile/image-real-deal.jpg"),
      mainImageTablet: require("@/assets/about/tablet/image-real-deal.jpg"),
      mainImageDesktop: require("@/assets/about/desktop/image-real-deal.jpg"),
      title: "The real deal",
      firstText:
        "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      secondText:
        "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    },
  ];

  return { lists };
});
