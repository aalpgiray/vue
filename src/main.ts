/**
 * Created by Alp,
 *
 * This file contains routing configuration and root vue instance.
 */

import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import { About } from './components/About';
import { Hello } from './components/Hello';

Vue.use(VueRouter);

/**
 * Application routing handler configuration.
 * @const {VueRouter} router
 */
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Hello
    },
    {
      name: 'homeReplacement',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'about',
      path: '/about',
      component: About
    }
  ]
});

new Vue({
  el: '#app',
  router
});
