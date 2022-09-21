<template>
  <section class="about-card">
    <picture class="about-card-main-image" :class="{ orderTwo: isOrderActive }">
      <source :srcset="list.mainImageDesktop" media="(min-width: 1024px)" />
      <source :srcset="list.mainImageTablet" media="(min-width: 700px)" />
      <img
        :src="list.mainImageMobile"
        alt="team work"
        class="about-card-main-image"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :delay="300"
      />
    </picture>

    <div
      class="about-card-container"
      :class="{ orderOne: isOrderActive }"
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1 }"
      :delay="600"
    >
      <h2 class="about-card-container-title newsletter-form-title">
        {{ list.title }}
      </h2>
      <div class="about-card-container-texts" v-motion-fade>
        <p class="about-card-container-text">
          {{ list.firstText }}
        </p>
        <p class="about-card-container-text">
          {{ list.secondText }}
        </p>
      </div>
      <picture>
        <!-- <source :srcset="list.secondImageTablet" media="(min-width: 1024px)" /> -->
        <img
          src="../assets/shared/desktop/bg-pattern-three-circles.svg"
          alt=""
          class="about-card-container-image"
        />
      </picture>
    </div>
  </section>
</template>
<script>
export default {
  props: { list: Object, isOrderActive: Boolean }
}
</script>
