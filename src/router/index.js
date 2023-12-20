import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/post/:id",
    name: "post",
    component: () => import("@/views/PostPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
