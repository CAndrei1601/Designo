/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { MotionPlugin } from '@vueuse/motion'
import './css/app.scss';
createApp(App).use(createPinia()).use(MotionPlugin).use(router).mount('#app');

