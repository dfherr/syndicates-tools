import { createRouter, createWebHistory } from 'vue-router';
import SyndicatesResearchView from './views/SyndicatesResearchView.vue';
import SyndicatesUnusedView from './views/SyndicatesUnusedView.vue';
import NotFound from './views/NotFound.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'research',
    },
    {
      path: '/research',
      name: 'research',
      component: SyndicatesResearchView
    },
    {
      path: '/unused',
      name: 'unused',
      component: SyndicatesUnusedView
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ]
});
