import { createRouter, createWebHistory } from "@ionic/vue-router";
import BirdsPage from "../views/BirdsPage.vue"
const routes = [
  {
    path: "/",
    redirect: "/birds",
  },
  {
    path: "/birds",
    name: "Birds",
    component: BirdsPage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
