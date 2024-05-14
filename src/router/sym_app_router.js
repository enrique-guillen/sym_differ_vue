import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/GetDerivativeExpressionForm.vue'),
    },
    {
      path: '/grammarreference',
      name: 'grammarreference',
      component: () => import('../components/SymDifferGrammarReference.vue'),
    },
  ],
});
export default router;
