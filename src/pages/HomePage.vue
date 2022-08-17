<template>
  <NavigationBarVue />
  <HomePageTop :head="homeStore.head" />
  <div class="wrapper">
    <section class="card-redirect">
      <RedirectCard :cards="categorieStore.redirectCardInfo" />
    </section>
  </div>
</template>
<script>
/* eslint-disable */
import NavigationBarVue from '@/components/NavigationBar.vue'
import HomePageTop from '@/components/HomePageTop.vue'
import RedirectCard from '@/components/RedirectCard.vue'
import { useHomePageStore } from '@/stores/homePageStore'
import {useCategorieStore} from '@/stores/categorieCardStore'

export default {
  setup() {
    const homeStore = useHomePageStore()
    const categorieStore = useCategorieStore()
    return {
      homeStore,
      categorieStore
    }
  },
  components: {
    NavigationBarVue,
    HomePageTop,
    RedirectCard
  }
}
</script>
