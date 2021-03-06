import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/daily/:time",
    name: "daily",
    component: () => import("../views/Daily.vue"),
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
