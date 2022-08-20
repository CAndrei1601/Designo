<template>
  <div class="head">
    <h1 class="head-title">{{ head[0].title }}</h1>
    <p class="head-text">{{ head[0].text }}</p>
    <button>{{ head[0].button }}</button>
    <img
      src="../assets/home/desktop/phone-final.png"
      alt=""
      class="head-bottom-image"
      width="280"
    />
    <img
      src="../assets/home/desktop/bg-pattern-hero-home.svg"
      alt=""
      class="head-background-img"
      width="640"
      height="640"
    />
  </div>
</template>
<script>
export default {
  props: {
    head: Array
  }
}
</script>
