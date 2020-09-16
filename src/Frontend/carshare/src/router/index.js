/**************************
 * @AUTHOR YONGQIAN HUANG
 * @UPDATE Bach Dao       *
 **************************/
import Vue from "vue";
import VueRouter from "vue-router";
import Header from "@/components/layouts/Header";
import AdminHeader from "@/components/layouts/AdminHeader";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      header: Header,
      main: () => import("@/views/Home"),
    },
  },
  meta: {
    requiresAuth: true
  }
},
{
  path: '/contact',
  name: 'Contact',
  components: {
    header: Header,
    main: () => import('../views/Contact.vue')
  },
  {
    path: "/car/:id",
    name: "CarDetail",
    components: {
      header: Header,
      main: () => import("../views/CarsDetail.vue"),
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      header: null,
      main: () => import("../components/layouts/BlueHeader"),
    },
  },
},
{
  path: '/term',
  name: 'Term',
  components: {
    header: Header,
    main: () => import('../views/TermAndPolicy.vue')
  },
},
{
  path: '/FAQ',
  name: 'FAQ',
  components: {
    header: Header,
    main: () => import('../views/FAQ.vue')
  },
},
{
  path: '/checkout/:id',
  name: 'Checkout',
  components: {
    header: Header,
    main: () => import('../views/Checkout.vue')
  {
    path: "/user/profile",
    name: "Profile",
    components: {
      header: Header,
      main: () => import("../views/Profile.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    components: {
      header: Header,
      main: () => import("../views/About.vue"),
    },
  },
  {
    path: "/receipt/:id",
    name: "Receipt",
    components: {
      header: Header,
      main: () => import("../views/Receipt.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/locations",
    name: "Locations",
    components: {
      header: Header,
      main: () => import("../views/Locations.vue"),
    },
  },
  {
    path: "/rents",
    name: "Rent",
    components: {
      header: Header,
      main: () => import("../views/History.vue"),
    },
  },
  {
    path: "/checkout/:id",
    name: "Checkout",
    components: {
      header: Header,
      main: () => import("../views/Checkout.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin36737123719368365255336327043632505/",
    name: "Admin",
    components: {
      header: AdminHeader,
      main: () => import("../views/admin/Main.vue"),
    },
  },
  {
    path: "/admin36737123719368365255336327043632505/users",
    name: "AdminUser",
    components: {
      header: AdminHeader,
      main: () => import("../views/admin/User.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin36737123719368365255336327043632505/cars",
    name: "AdminCars",
    components: {
      header: AdminHeader,
      main: () => import("../views/admin/Cars.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin36737123719368365255336327043632505/orders",
    name: "AdminOrders",
    components: {
      header: AdminHeader,
      main: () => import("../views/admin/Orders.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin36737123719368365255336327043632505/addcar",
    name: "AdminAddCar",
    components: {
      header: AdminHeader,
      main: () => import("../views/admin/AddCar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
