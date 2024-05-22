import axios from 'axios';

function derive(expressionText, variable, successCallback, failureCallback) {
  const derivativeExpresssionUrl = 'http://127.0.0.1:3000/derivative_expression';

  axios
    .get(derivativeExpresssionUrl, { params: { expression: expressionText, variable } })
    .then(response => {
      successCallback({ derivativeExpressionText: response.data.derivative_expression });
    })
    .catch(error => {
      failureCallback({ message: error.response.data.message });
    });
}

function generateImage(expressionText, variable, successCallback) {
  const derivativeExpressionVisualizationUrl = 'http://127.0.0.1:3000/derivative_expression_visualization';

  axios
    .get(derivativeExpressionVisualizationUrl, { params: { expression: expressionText, variable } })
    .then(response => {
      successCallback(response.data);
    });
}

function approximateFirstOrderDifferentialEquationSolution(equationParameters, successCallback, failureCallback) {
  const approximateFirstOrderDifferentialEquationSolutionUrl
    = 'http://127.0.0.1:3000/first_order_differential_equation_approximation';

  const requestParameters = {
    expression_text: equationParameters.expressionText,
    variable_name: equationParameters.variableName,
    undetermined_function_name: equationParameters.undeterminedFunctionName,
    initial_value_coordinates: equationParameters.initialValueCoordinates,
  };

  axios
    .get(
      approximateFirstOrderDifferentialEquationSolutionUrl,
      { params: requestParameters },
    )
    .then(response => {
      successCallback({ approximatedSolution: response.data.approximated_solution });
    })
    .catch(error => {
      failureCallback({ message: error.response.data.message });
    });
}

function illustrateDifferentialEquationApproximation(equationParameters, successCallback, failureCallback) {
  const approximateFirstOrderDifferentialEquationSolutionUrl
    = 'http://127.0.0.1:3000/differential_equation_approximation_illustration';

  const requestParameters = {
    expression_text: equationParameters.expressionText,
    variable_name: equationParameters.variableName,
    undetermined_function_name: equationParameters.undeterminedFunctionName,
    initial_value_coordinates: equationParameters.initialValueCoordinates,
  };

  axios
    .get(
      approximateFirstOrderDifferentialEquationSolutionUrl,
      { params: requestParameters },
    )
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      failureCallback({ message: error.response.data.message });
    });
}

export {
  derive,
  generateImage,
  approximateFirstOrderDifferentialEquationSolution,
  illustrateDifferentialEquationApproximation,
};
