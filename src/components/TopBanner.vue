<template>
  <div class="banner-container">
    <img
      src="../assets/home/desktop/bg-pattern-hero-home.svg"
      alt=""
      class="head-background-img"
      width="640"
      height="640"
      fetchpriority="high"
    />
    <div class="banner-wrapper">
      <h1 class="banner-title">{{ banner.title }}</h1>
      <p class="banner-text">{{ banner.text }}</p>
    </div>
  </div>
</template>
<script>
export default { props: { banner: Array } }
</script>
