import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base =
  process.env.NODE_ENV === "production"
    ? "/website/"
    : "/";

export default new Router({
  mode: "history",
  base,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "default" },
      component: require("./views/Home.vue").default // load sync home
    },
    {
      path: "/a-propos",
      name: "about",
      meta: { layout: "default" },
      component: () => import("./views/About.vue")
    },
    {
      path: "/projets",
      name: "projects",
      meta: { layout: "default" },
      component: () => import("./views/Projects.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("./views/404.vue").default // load sync home
    }
  ]
});
