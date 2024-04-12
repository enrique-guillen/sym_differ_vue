import { derive } from '../axios-adapter.js';

function install(app, _) {
  app.provide('derive', derive);
}

export default { install };
