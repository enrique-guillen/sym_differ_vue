import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import deriver from './plugins/deriver.js';

import App from './SymApp.vue';
import router from './router/sym_app_router.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(deriver);

app.mount('#app');
