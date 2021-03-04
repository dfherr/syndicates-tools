import { createRouter, createWebHistory } from 'vue-router';
import SyndicatesHomeView from './views/SyndicatesHomeView.vue';
import SyndicatesResearchView from './views/SyndicatesResearchView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SyndicatesHomeView
    },
    {
      path: '/research',
      name: 'research',
      component: SyndicatesResearchView
    }
  ]
});
