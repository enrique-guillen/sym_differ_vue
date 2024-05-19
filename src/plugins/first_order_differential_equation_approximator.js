import { approximateFirstOrderDifferentialEquationSolution } from '../axios-adapter.js';

function install(app, _) {
  app.provide('firstOrderDifferentialEquationApproximator', approximateFirstOrderDifferentialEquationSolution);
}

export default { install };
