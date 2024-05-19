import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/DifferentiationForm.vue'),
    },
    {
      path: '/differentiation',
      name: 'differentiation',
      component: () => import('../components/DifferentiationForm.vue'),
    },
    {
      path: '/first_order_de_approximation_form',
      name: 'first_order_de_approximation_form',
      component: () => import('../components/FirstOrderDifferentialEquationApproximationForm.vue'),
    },
    {
      path: '/grammarreference',
      name: 'grammarreference',
      component: () => import('../components/GrammarReference.vue'),
    },
  ],
});
export default router;
