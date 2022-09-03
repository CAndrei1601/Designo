<template>
  <div class="footer-info">
    <div class="footer-info-first">
      <img
        src="../assets/shared/desktop/logo-light.png"
        alt=""
        class="footer-info-first-logo"
        width="202"
        height="27" loading="lazy"
      />
      <span class="footer-gradient gradient-mobile"></span>
      <ul class="footer-info-first-list">
        <li
          class="footer-info-first-list-item footer-contact"
          v-for="item in lists"
          :key="item.id"
        >
          <router-link :to="'/' + item.route">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer-gradient gradient-tablet"></div>
    <ul class="footer-info-second">
      <li
        class="footer-info-second-list"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <p class="footer-info-second-title">{{ contact.title }}</p>
        <p class="footer-info-second-text">{{ contact.firstText }}</p>
        <p class="footer-info-second-text">{{ contact.secondText }}</p>
      </li>
      <div class="footer-info-second-logos">
        <img
          :src="logo.image"
          alt=""
          class="footer-info-second-logo"
          v-for="logo in logos"
          :key="logo.id" loading="lazy"
        />
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  props: { lists: Array, contacts: Array, logos: Array }
}
</script>
