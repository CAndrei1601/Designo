<template>
  <div class="contact-card" v-for="card in cardBottom" :key="card.id">
    <div class="contact-card-first">
    <img
      src="../assets/shared/desktop/bg-pattern-call-to-action.svg"
      alt=""
      class="contact-card-image" loading="lazy"

    />
    <h2 class="contact-card-title newsletter-form-title">{{ card.title }}</h2>
    <h4 class="contact-card-text newsletter-form">{{ card.text }}</h4>
  </div>
    <button class="contact-card-button">{{ card.button }}</button>
  </div>
</template>
<script>
export default { props: { cardBottom: Array } }
</script>
