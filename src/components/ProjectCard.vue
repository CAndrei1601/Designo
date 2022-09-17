<template>
  <div
    v-motion-roll-visible-once-bottom
    class="projectCard-container"
    v-for="project in projects"
    :key="project.id"
  >
    <img
      :src="project.image"
      :alt="project.altImage"
      class="projectCard-image"
      width="327"
      height="320"
    />
    <div class="projectCard-texts">
      <h3 class="projectCard-title">{{ project.title }}</h3>
      <p class="projectCard-text">{{ project.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projects: Array
  }
}
</script>
