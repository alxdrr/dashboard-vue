import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Reservations from "@/pages/Reservations.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    children: [
      { path: "/dashboard", component: Dashboard },
      { path: "/reservations", component: Reservations },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
