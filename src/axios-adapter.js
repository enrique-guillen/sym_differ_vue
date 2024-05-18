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

export { derive, generateImage };
