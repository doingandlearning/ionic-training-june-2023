import { createRouter, createWebHistory } from "@ionic/vue-router";
import BirdsPage from "../views/BirdsPage.vue"
import BirdDetailPage from "../views/BirdDetailPage.vue"
import AddBirdPage from "../views/AddBirdPage.vue"
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
  },
  {
    path: "/birds/add",
    component: AddBirdPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
