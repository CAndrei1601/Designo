<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <TopBanner :banner="bannerStore.bannerInfo[2]" />
    <div class="wrapper">
      <img
        class="drop-background-top"
        src="../assets/shared/desktop/bg-pattern-leaf.svg"
        alt=""
      />
      <section class="project-cards">
        <ProjectCard :projects="projectsStore.projects.slice(11, 14)" />
      </section>
      <section class="categories-cards">
        <RedirectCard :cards="filteredArray()" />
      </section>
      <section class="contact-section">
        <ContactCard :cardBottom="newsletterCardStore.cardBottom" />
      </section>
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

    const filteredArray = () => {
      return categorieStore.redirectCardInfo.filter(
        (redirectCardInfo) => redirectCardInfo.id !== 3
      )
    }

    return {
      newsletterCardStore,
      footerStore,
      navigationStore,
      bannerStore,
      projectsStore,
      categorieStore,
      filteredArray
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
