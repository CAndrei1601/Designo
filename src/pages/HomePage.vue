<template>
  <NavigationBarVue />
  <HomePageTop />
  <div class="wrapper">
    <section class="card-redirect">
      <RedirectCard :cards="redirectCardInfo" />
    </section>
  </div>
</template>
<script>
import NavigationBarVue from '@/components/NavigationBar.vue'
import HomePageTop from '@/components/HomePageTop.vue'
import RedirectCard from '@/components/RedirectCard.vue'

export default {
  /* eslint-disable */

  data() {
    return {
      redirectCardInfo: [
        {
          id: 1,
          title: 'WEB DESIGN',
          text: 'VIEW PROJECTS',
          image: require('@/assets/home/mobile/image-web-design.jpg')
        },
        {
          id: 2,
          title: 'APP DESIGN',
          text: 'VIEW PROJECTS',
          image: require('@/assets/home/mobile/image-app-design.jpg')
        },
        {
          id: 3,
          title: 'GRAPHIC DESIGN',
          text: 'VIEW PROJECTS',
          image: require('@/assets/home/mobile/image-graphic-design.jpg')
        }
      ]
    }
  },
  components: {
    NavigationBarVue,
    HomePageTop,
    RedirectCard
  }
}
</script>
