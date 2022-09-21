<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <HomePageTop :head="homeStore.head" />
    <div class="wrapper">
      <img
        class="drop-background-top-homePage"
        src="../assets/shared/desktop/bg-pattern-leaf.svg"
        alt=""
      />
      <section class="categorie-cards-homepage">
        <RedirectCard :cards="categorieStore.redirectCardInfo" />
      </section>
      <section class="project-details">
        <ProjectDetails :informations="homeStore.informations" />
      </section>
      <img
        class="drop-background-bottom-homePage"
        src="../assets/shared/desktop/bg-pattern-leaf.svg"
        alt=""
        width="1006"
        height="594"
      />
      <ContactCard :cardBottom="newsletterCardStore.cardBottom" />
    </div>
    <footer>
      <FooterInfo
        :lists="navigationStore.lists"
        :contacts="footerStore.contacts"
        :logos="footerStore.logos"
      />
    </footer>
  </div>
</template>
<style scoped>
.drop-background-top-homePage {
  position: absolute;
  top: 580px;
  left: -50px;
  z-index: -1;
  opacity: 0.5;
}

.drop-background-bottom-homePage {
  position: absolute;
  bottom: 850px;
  z-index: -1;
  right: 0;
  opacity: 0.5;
  transform: rotate(180deg);
}

.categorie-cards-homepage {
  display: grid;
  gap: 24px;
  overflow: hidden;
  grid-template-areas:
    'a'
    'b'
    'c';

  padding: 120px 0 120px 0;
}

.card-1 {
  grid-area: a;
  @media screen and (min-width: 1024px) {
    min-height: 640px;
  }
}

.card-2 {
  grid-area: b;
}

.card-3 {
  grid-area: c;
}

@media screen and (min-width: 1024px) {
  .categorie-cards-homepage {
    padding: 160px 0 160px 0;
    grid-template-areas:
      'a b'
      'a c';
  }
}
</style>
<script>
/* eslint-disable */
import NavigationBarVue from '@/components/NavigationBar.vue'
import HomePageTop from '@/components/HomePageTop.vue'
import RedirectCard from '@/components/RedirectCard.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'
import { useHomePageStore } from '@/stores/homePageStore'
import { useCategorieStore } from '@/stores/categorieCardStore'
import { useNewsletterCardStore } from '@/stores/newsletterCardStore'
import { useFooterStore } from '@/stores/footerStore'
import { useNavigationStore } from '@/stores/navStore'
import ContactCard from '@/components/ContactCard.vue'
import FooterInfo from '@/components/FooterInfo.vue'

export default {
  setup() {
    const homeStore = useHomePageStore()
    const categorieStore = useCategorieStore()
    const newsletterCardStore = useNewsletterCardStore()
    const footerStore = useFooterStore()
    const navigationStore = useNavigationStore()

    return {
      homeStore,
      categorieStore,
      newsletterCardStore,
      footerStore,
      navigationStore
    }
  },
  components: {
    NavigationBarVue,
    HomePageTop,
    RedirectCard,
    ProjectDetails,
    ProjectDetails,
    ContactCard,
    FooterInfo
  }
}
</script>
