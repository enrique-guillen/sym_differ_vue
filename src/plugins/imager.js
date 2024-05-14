import { generateImage } from '../axios-adapter.js';

function install(app, _) {
  app.provide('imager', generateImage);
}

export default { install };
