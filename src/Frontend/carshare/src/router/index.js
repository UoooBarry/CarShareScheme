import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
import Header from '@/components/layouts/Header';

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  components: {
    header: null,
    main: () => import('@/components/layouts/BlueHeader')
  }
},
{
  path: '/about',
  name: 'About',
  components: {
    header: Header,
    main: () => import('../views/About.vue')
  }
},
{
  path: '/register',
  name: 'Register',
  components: {
    header: Header,
    main: () => import('../views/Register.vue')
  }
},
{
  path: '/login',
  name: 'Login',
  components: {
    header: Header,
    main: () => import('../views/Login.vue')
  }
},
{
  path: '/user/profile',
  name: 'Profile',
  components: {
    header: Header,
    main: () => import('../views/Profile.vue')
  }
},
{
  path: '/admin36737123719368365255336327043632505/',
  name: 'Admin',
  components: {
    header: () => import('@/components/layouts/AdminHeader'),
    main: () => import('../views/admin/Main.vue')
  }
},
{
  path: '/admin36737123719368365255336327043632505/users',
  name: 'AdminUser',
  components: {
    header: () => import('@/components/layouts/AdminHeader'),
    main: () => import('../views/admin/User.vue')
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router