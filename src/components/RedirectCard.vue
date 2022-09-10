<template>
  <div class="redirect-cards">
    <div
      :class="'redirect-card card-' + card.id"
      v-for="card in cards"
      :key="card.id"
      v-motion-roll-visible-once-left
      :delay="300"
    >
      <router-link :to="'/' + card.route">
        <picture>
          <source :srcset="card.desktopImage" media="(min-width:1024px)" />
          <source :srcset="card.tabletImage" media="(min-width:700px)" />
          <img
            :src="card.image"
            alt=""
            class="redirect-card-image"
            lazyloading
          />
        </picture>
        <span class="opacity-layer"></span>
        <div class="redirect-card-texts">
          <h1 class="redirect-card-title">{{ card.title }}</h1>
          <div class="redirect-card-second-container">
            <p class="redirect-card-text">{{ card.text }}</p>
            <img
              src="../assets/shared/desktop/icon-right-arrow.svg"
              alt=""
              width="12"
              height="10"
              class="redirect-card-arrow"
            />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default { props: { cards: Array } }
</script>
