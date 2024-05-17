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
      path: '/first_order_de_approximation_form',
      name: 'first_order_de_approximation_form',
      component: () => import('../components/GetFirstOrderDifferentialEquationApproximationForm.vue'),
    },
    {
      path: '/grammarreference',
      name: 'grammarreference',
      component: () => import('../components/SymDifferGrammarReference.vue'),
    },
  ],
});
export default router;
