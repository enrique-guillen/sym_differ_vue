import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import deriver from './plugins/deriver.js';
import imager from './plugins/imager.js';
import firstOrderDifferentialEquationApproximator from './plugins/first_order_differential_equation_approximator.js';

import App from './SymApp.vue';
import router from './router/sym_app_router.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(deriver);
app.use(imager);
app.use(firstOrderDifferentialEquationApproximator);

app.mount('#app');
