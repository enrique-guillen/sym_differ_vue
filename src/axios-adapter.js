import axios from 'axios';

function derive(expressionText, variable, successCallback, failureCallback) {
  const derivative_expression_url = 'http://127.0.0.1:3000/derivative_expression';

  axios
    .get(derivative_expression_url, { params: { expression: expressionText, variable } },)
    .then(response => { successCallback({ derivativeExpressionText: response.data.derivative_expression }); })
    .catch(error => { failureCallback({ message: error.response.data.message }); });
}

function generateImage(expressionText, variable, successCallback) {
  const derivative_expression_visualization_url = 'http://127.0.0.1:3000/derivative_expression_visualization';

  axios
    .get(derivative_expression_visualization_url, { params: { expression: expressionText, variable } },)
    .then(response => { successCallback(response.data); })
}

export { derive, generateImage };
