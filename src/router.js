import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      name: "users",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/Users.vue")
    },
    {
      path: "/posts",
      name: "posts",
      component: () =>
        import(/* webpackChunkName: "posts" */ "./views/Posts.vue")
    }
  ]
});
