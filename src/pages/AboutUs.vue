<template>
  <div class="container">
    <NavigationBarVue :lists="navigationStore.lists" />
    <div class="wrapper-about">
      <img
        class="drop-background-top"
        src="../assets/shared/desktop/bg-pattern-leaf.svg"
        alt=""
      />
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
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="300"
          />
        </picture>

        <div
          class="about-us-first-container"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="600"
        >
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
              src="../assets/about/mobile/bg-pattern-hero-about-mobile.svg"
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
        <AboutCard :list="aboutUsStore.lists[2]" :isOrderActive="true" />
      </section>

      <section class="contact-section">
        <img
          class="drop-background-bottom"
          src="../assets/shared/desktop/bg-pattern-leaf.svg"
          alt=""
        />
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
