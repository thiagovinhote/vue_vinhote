import Vue from 'vue';
import Router from 'vue-router';

import {
  Home,
  Projects,
  Profile,
  NotFound,
  Experience,
} from '@/pages';

Vue.use(Router);

export const routes = [
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    title: 'Experiências',
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    title: 'Projetos',
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    title: 'Perfil',
  },
];

const mapRoutes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    title: 'Home',
  },
  ...routes,
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
];

export default new Router({
  routes: mapRoutes,
  mode: 'history',
  linkActiveClass: 'is-active',
});
