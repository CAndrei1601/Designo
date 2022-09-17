<template>
  <div class="container-card">
    <div class="head">
      <h1 class="head-title">{{ head[0].title }}</h1>
      <p class="head-text">{{ head[0].text }}</p>
      <button>{{ head[0].button }}</button>
      <picture>
        <source
          srcset="../assets/home/desktop/phoneDesktop.png"
          media="(min-width:1024px)"
        />
        <img
          src="../assets/home/desktop/phone-final.png"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="300"
          alt="phone"
          class="head-bottom-image"
          width="280"
          height="390"
          fetchpriority="high"
        />
      </picture>
      <img
        src="../assets/home/desktop/bg-pattern-hero-home.svg"
        alt=""
        class="head-background-img"
        width="640"
        height="640"
        fetchpriority="high"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    head: Object
  }
}
</script>
