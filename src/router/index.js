import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Layout from '@/views/Layout.vue';
import LayoutAdmin from '@/views/LayoutAdmin.vue';
import Landing from '@/views/Landing.vue';
import Home from '../views/Home.vue';

// Routes

// Lazy Loading
// const News = () => import(/* webpackChunkName: "news" */ '@/views/News.vue');

Vue.use(VueRouter);

const routes = [
  // Normal user layout
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Landing',
        component: Landing,
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  },
  // Admin layout
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [

    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
