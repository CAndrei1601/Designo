<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <div class="wrapper-about">
      <section class="about-us-first">
        <picture class="about-us-first-image">
          <source
            :srcset="aboutUsStore.lists[0].mainImageDesktop"
            media="(min-width: 1024px)"
          />
          <source
            :srcset="aboutUsStore.lists[0].mainImageTablet"
            media="(min-width: 700px)"
          />
          <img
            :src="aboutUsStore.lists[0].mainImageMobile"
            alt="meditate for better idea image"
            class="about-us-first-image"
            width="375"
            height="320"
          />
        </picture>

        <div class="about-us-first-container">
          <h2 class="about-us-first-container-title newsletter-form-title">
            {{ aboutUsStore.lists[0].title }}
          </h2>
          <p class="about-us-first-container-text">
            {{ aboutUsStore.lists[0].text }}
          </p>
          <picture>
            <source
              :srcset="aboutUsStore.lists[0].secondImageDesktop"
              media="(min-width: 1024px)"
            />
            <img
              :src="aboutUsStore.lists[0].secondImageMobile"
              alt="bubble background image"
              class="about-us-first-container-image"
            />
          </picture>
        </div>
      </section>
      <section class="about-us-section-second">
        <AboutCard :list="aboutUsStore.lists[1]" />
      </section>
      <section class="about-us-section-third">
        <LocationsLists :locations="locationStore.locations" />
      </section>
      <section class="about-us-section-fourth">
        <AboutCard :list="aboutUsStore.lists[2]" />
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
import { useFooterStore } from '@/stores/footerStore'
import { useAboutUsStore } from '@/stores/aboutUsStore'
import { uselocationsStore } from '@/stores/locationsStore'
import ContactCard from '@/components/ContactCard.vue'
import FooterInfo from '@/components/FooterInfo.vue'
import NavigationBarVue from '@/components/NavigationBar.vue'
import AboutCard from '@/components/AboutCard.vue'
import LocationsLists from '@/components/LocationsLists.vue'

export default {
  /* eslint-disable */
  setup() {
    const newsletterCardStore = useNewsletterCardStore()
    const footerStore = useFooterStore()
    const navigationStore = useNavigationStore()
    const aboutUsStore = useAboutUsStore()
    const locationStore = uselocationsStore()

    return {
      newsletterCardStore,
      footerStore,
      navigationStore,
      aboutUsStore,
      locationStore
    }
  },

  components: {
    NavigationBarVue,
    ContactCard,
    FooterInfo,
    AboutCard,
    LocationsLists
  }
}
</script>
