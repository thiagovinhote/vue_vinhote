import Vue from 'vue';
import Router from 'vue-router';
import AppInit from './guards/AppInit';
import IsLoggedIn from './guards/IsLoggedIn';
import RedirectIfLoggedIn from './guards/RedirectIfLoggedIn';

import {
  Home,
  Projects,
  Profile,
  NotFound,
  Experience,
  Login,
  Register,
  Account,
} from '../pages';

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
  {
    path: '/account',
    name: 'Account',
    component: Account,
    title: 'Conta',
    beforeEnter: IsLoggedIn,
  },
  {
    path: '/account/login',
    name: 'Login',
    component: Login,
    title: 'Entrar',
    beforeEnter: RedirectIfLoggedIn,
  },
  {
    path: '/account/register',
    name: 'Register',
    component: Register,
    title: 'Registro',
    beforeEnter: RedirectIfLoggedIn,
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

const router = new Router({
  routes: mapRoutes,
  mode: 'history',
  linkActiveClass: 'is-active',
});

router.beforeEach(AppInit);

export default router;
