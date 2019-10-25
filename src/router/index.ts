import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { routeList } from './router';

Vue.use(VueRouter);

const otherRoutes = [
  {
    path: '/',
    redirect: { name: 'home' },
    hide: true,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue'),
    hide: true,
  },
];

const routes = [...otherRoutes, ...routeList];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
