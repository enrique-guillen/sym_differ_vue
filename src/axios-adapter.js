import axios from 'axios'

function derive(expressionText, variable, successCallback, failureCallback) {
  var params = { params: { expression: expressionText, variable: variable } }
  axios.get(
    "http://127.0.0.1:3000/derivative_expression",
    { params: { expression: expressionText, variable: variable } }
  )
  .then(function (response) {
    successCallback({ derivativeExpressionText: response.data.derivative_expression })
  })
  .catch(function (error) {
    failureCallback({ message: error.response.data.message })
  })
}

export { derive };
