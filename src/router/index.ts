import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Player from "../views/player.vue";
import Search from "../views/search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/search",
    query: {
      q: ":q"
    },
    name: "search",
    component: Search
  },
  {
    path: "/player/:id",
    name: "player",
    component: Player
  },
  {
    path: "/",
    name: "home",
    component: Home
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
