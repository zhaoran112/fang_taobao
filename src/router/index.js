import { createRouter, createWebHashHistory } from "vue-router";
import classify from "../views/classify.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
  },
  {
    path: "/personalcenter",
    name: "PersonalCenter",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "@/views/PersonalCenter/PersonalCenter"
      ),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "home" */ "@/views/cart/cart"),
  },
  {
    path: "/shop_list",
    name: "ShopList",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/ShopList/ShopList"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/detail/detail"),
  },
  {
    path: "/classify",
    name: "classify",
    component: classify,
    children: [
      {
        path: "/classify/:id",
        component: () => import("@/views/components/ClassifyContainer.vue"),
      },
    ],
    // component: () =>
    //   import(/* webpackChunkName: "classify" */ "@/views/classify.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
