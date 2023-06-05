import { createRouter, createWebHistory } from "@ionic/vue-router";
import BirdsPage from "../views/BirdsPage.vue"
import BirdDetailPage from "../views/BirdDetailPage.vue"
const routes = [
  {
    path: "/",
    redirect: "/birds",
  },
  {
    path: "/birds",
    name: "Birds",
    component: BirdsPage,
  },
  {
    path: "/birds/:id",
    component: BirdDetailPage,
    name: "BirdDetail"
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
