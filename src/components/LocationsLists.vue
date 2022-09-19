<template>
  <ul class="location-list">
    <li class="location-item" v-for="location in locations" :key="location.id">
      <img
        :src="location.image"
        alt=""
        class="location-item-image"
        width="202"
        height="202"
      />
      <h3 class="location-item-title">{{ location.title }}</h3>
      <button class="location-item-button">See Location</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: { locations: Array }
}
</script>
