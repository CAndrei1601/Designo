<template>
  <div class="container-nav">
  <nav>
    <router-link to="/">
      <img
        src="../assets/shared/desktop/logo-dark.png"
        alt=""
        class="logo"
        width="202"
        height="27"
      />
    </router-link>
    <div class="nav-container-right">
      <img
        src="../assets/shared/mobile/icon-hamburger.svg"
        alt=""
        class="head-hamburger"
        width="24"
        height="20"
        @click="isHidden = !isHidden"
        v-if="isHidden"
      />
      <img
        src="../assets/shared/mobile/icon-close.svg"
        alt=""
        class="head-hamburger"
        width="24"
        height="20"
        @click="isHidden = !isHidden"
        v-else
      />
      <ul class="ul-tablet">
        <li
          class="ul-tablet-item footer-contact"
          v-for="list in lists"
          :key="list.id"
        >
          <router-link :to="'/' + list.route"> {{ list.title }}</router-link>
        </li>
      </ul>
    </div>
    <Transition>
      <div class="menu-mobile-backdrop" v-if="!isHidden">
        <div class="menu-mobile-container">
          <ul class="menu-mobile-container-list">
            <li
              class="menu-mobile-container-list-item nav-item"
              v-for="list in lists"
              :key="list.id"
            >
              <router-link :to="'/' + list.route">
                {{ list.title }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</div>
</template>
<script>
import { ref } from 'vue'
export default {
  // eslint-disable-next-line
  setup() {
    const isHidden = ref(true)
    return {
      isHidden
    }
  },
  props: {
    lists: Array
  }
}
</script>
