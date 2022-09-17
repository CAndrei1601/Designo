<template>
  <div class="banner-container">
    <img
      src="../assets/app-design/desktop/bg-pattern-intro-app.svg"
      alt="circle with peach color"
      class="banner-background-image"
      width="876"
      height="584"
      fetchpriority="high"
    />
    <div class="banner-wrapper">
      <h1 class="banner-title newsletter-form-title">{{ banner.title }}</h1>
      <p class="banner-text">{{ banner.text }}</p>
    </div>
  </div>
</template>
<script>
export default { props: { banner: Array } }
</script>
