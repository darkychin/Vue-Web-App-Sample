import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Layout from '@/views/Layout.vue';
import LayoutAdmin from '@/views/LayoutAdmin.vue';
import Landing from '@/views/Landing.vue';

// Routes
import GalleryRoutes from './gallery';

// Lazy Loading
// const News = () => import(/* webpackChunkName: "news" */ '@/views/News.vue');
const ServiceExample = () => import(/* webpackChunkName: "service" */ '@/views/ServiceExample.vue');

Vue.use(VueRouter);

// Important: Route order matters!
const routes = [
  /**
   * Normal User Layout
   *
   * This act as a parent component that wraps all of its children, and they will share the same layout structure
   * Reference: https://router.vuejs.org/guide/essentials/nested-routes.html
   */
  {
    path: '/',
    component: Layout,
    children: [
      {
        // The default to go to when '/' is routed
        path: '',
        name: 'Landing',
        component: Landing,
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/service-example',
        name: 'ServiceExample',
        component: ServiceExample,
      },
      /**
       * Using separate routes file can keep the route cleaner
       * Reference:
       * @see {@link https://stackoverflow.com/a/59139467/7939633}
       */
      ...GalleryRoutes,
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
