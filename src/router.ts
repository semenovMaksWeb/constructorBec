import { RouteRecordRaw } from "vue-router";
import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/config/back",
    name: "backConfig",
    component: () => import("./views/backConfig/backConfig.vue"),
  }
]
const  router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;