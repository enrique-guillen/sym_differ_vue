import { illustrateDifferentialEquationApproximation } from '../axios-adapter.js';

function install(app, _) {
  app.provide('differentialEquationIllustrator', illustrateDifferentialEquationApproximation);
}

export default { install };
