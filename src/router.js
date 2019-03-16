import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/Listar.vue'),
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () => import('./views/Cadastrar.vue'),
    },
  ],
});
