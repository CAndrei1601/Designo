<template>
  <section class="about-card">
    <picture>
      <source :srcset="list.mainImageDesktop" media="(min-width: 1024px)" />
      <source :srcset="list.mainImageTablet" media="(min-width: 700px)" />
      <img
        :src="list.mainImageMobile"
        alt="team work"
        class="about-card-main-image"
      />
    </picture>

    <div class="about-card-container">
      <h2 class="about-card-container-title newsletter-form-title">
        {{ list.title }}
      </h2>
      <div class="about-card-container-texts">
        <p class="about-card-container-text">
          {{ list.firstText }}
        </p>
        <p class="about-card-container-text">
          {{ list.secondText }}
        </p>
      </div>
      <picture>
        <source :srcset="list.secondImageTablet" media="(min-width: 1024px)" />
        <img
          :src="list.secondImageMobile"
          alt=""
          class="about-card-container-image"
        />
      </picture>
    </div>
  </section>
</template>
<script>
export default {
  props: { list: Object }
}
</script>
