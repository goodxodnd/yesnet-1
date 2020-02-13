import Vue from 'vue';
import Router from 'vue-router';
import Books from './components/Books.vue';
import Ping from './components/Ping.vue';
import Main from './components/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});