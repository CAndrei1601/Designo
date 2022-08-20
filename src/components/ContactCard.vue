<template>
  <div class="contact-card" v-for="card in cardBottom" :key="card.id">
    <img
      src="../assets/shared/desktop/bg-pattern-call-to-action.svg"
      alt=""
      class="contact-card-image"
    />
    <h2 class="contact-card-title newsletter-form-title">{{ card.title }}</h2>
    <h4 class="contact-card-text newsletter-form">{{ card.text }}</h4>
    <button class="contact-card-button">{{ card.button }}</button>
  </div>
</template>
<script>
export default { props: { cardBottom: Array } }
</script>
