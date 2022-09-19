/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "/src/pages/HomePage.vue";
import AppDesign from "/src/pages/AppDesign.vue";
import WebDesign from "/src/pages/WebDesign.vue";
import GraphicDesign from "/src/pages/GraphicDesign.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/app-design",
    name: "app-design",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AppDesign.vue"),
  },
  {
    path: "/web-design",
    name: "web-design",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/WebDesign.vue"),
  },
  {
    path: "/graphic-design",
    name: "graphic-design",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/GraphicDesign.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutUs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
