<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <HomePageTop :head="homeStore.head" />
    <div class="wrapper">
      <section class="card-redirect">
        <RedirectCard :cards="categorieStore.redirectCardInfo" />
      </section>
      <section class="project-details">
        <ProjectDetails :informations="homeStore.informations" />
      </section>
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
