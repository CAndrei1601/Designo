<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <div class="wrapper">
      <TopBanner :banner="bannerStore.bannerInfo[0]" />
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
import ContactCard from '@/components/ContactCard.vue'
import FooterInfo from '@/components/FooterInfo.vue'
import { useFooterStore } from '@/stores/footerStore'
import NavigationBarVue from '@/components/NavigationBar.vue'
import TopBanner from '@/components/TopBanner.vue'

export default {
  /* eslint-disable */
  setup() {
    const newsletterCardStore = useNewsletterCardStore()
    const footerStore = useFooterStore()
    const navigationStore = useNavigationStore()
    const bannerStore = useTopBannerStore()

    return {
      newsletterCardStore,
      footerStore,
      navigationStore,
      bannerStore
    }
  },

  components: {
    NavigationBarVue,
    ContactCard,
    FooterInfo,
    TopBanner,
    TopBanner
  }
}
</script>
