<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <div class="wrapper">
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
import ContactCard from '@/components/ContactCard.vue'
import FooterInfo from '@/components/FooterInfo.vue'
import { useFooterStore } from '@/stores/footerStore'
import NavigationBarVue from '@/components/NavigationBar.vue'

export default {
  /* eslint-disable */
  setup() {
    const newsletterCardStore = useNewsletterCardStore()
    const footerStore = useFooterStore()
    const navigationStore = useNavigationStore()

    return {
      newsletterCardStore,
      footerStore,
      navigationStore
    }
  },

  components: {
    NavigationBarVue,
    ContactCard,
    FooterInfo
  }
}
</script>
