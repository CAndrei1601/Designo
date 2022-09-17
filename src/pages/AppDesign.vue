<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <div class="wrapper">
      <TopBanner :banner="bannerStore.bannerInfo[0]" />
      <section class="cards">
        <ProjectCard :projects="projectsStore.projects.slice(0, 5)" />
      </section>
      <section class="card-redirect">
        <RedirectCard :cards="categorieStore.redirectCardInfo" />
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
import { useNavigationStore } from '@/stores/navStore'
import { useNewsletterCardStore } from '@/stores/newsletterCardStore'
import { useTopBannerStore } from '@/stores/TopBannerStore'
import { useProjectsCardStore } from '@/stores/projectsCardStore'
import { useCategorieStore } from '@/stores/categorieCardStore'
import ContactCard from '@/components/ContactCard.vue'
import FooterInfo from '@/components/FooterInfo.vue'
import { useFooterStore } from '@/stores/footerStore'
import NavigationBarVue from '@/components/NavigationBar.vue'
import TopBanner from '@/components/TopBanner.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import RedirectCard from '@/components/RedirectCard.vue'

export default {
  /* eslint-disable */
  setup() {
    const newsletterCardStore = useNewsletterCardStore()
    const footerStore = useFooterStore()
    const navigationStore = useNavigationStore()
    const bannerStore = useTopBannerStore()
    const projectsStore = useProjectsCardStore()
    const categorieStore = useCategorieStore()

    return {
      newsletterCardStore,
      footerStore,
      navigationStore,
      bannerStore,
      projectsStore,
      categorieStore
    }
  },

  components: {
    NavigationBarVue,
    ContactCard,
    FooterInfo,
    TopBanner,
    ProjectCard,
    RedirectCard
  }
}
</script>
