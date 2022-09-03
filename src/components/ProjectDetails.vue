<template>
  <div class="project-cards">
    <div
      class="project-card-container"
      v-for="information in informations"
      :key="information.id"
    >
      <div class="project-card-top">
        <span class="project-card-gradient"></span>
        <img
          :src="information.image"
          alt=""
          class="project-card-image"
          width="188"
          height="162" loading="lazy"
        />
      </div>
      <div class="project-card-bottom">
      <h3 class="project-card-title">{{ information.title }}</h3>
      <p class="project-card-text">{{ information.text }}</p>
    </div>
    </div>

  </div>
</template>
<script>
import { useHomePageStore } from '@/stores/homePageStore'
export default {
  // eslint-disable-next-line
  setup() {
    const homeStore = useHomePageStore()
    return { homeStore }
  },
  props: {
    informations: Array
  }
}
</script>
