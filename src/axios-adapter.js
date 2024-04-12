import axios from 'axios';

function derive(expressionText, variable, successCallback, failureCallback) {
  const params = {params: {expression: expressionText, variable}};
  axios.get(
    'http://127.0.0.1:3000/derivative_expression',
    {params: {expression: expressionText, variable}},
  )
    .then(response => {
      successCallback({derivativeExpressionText: response.data.derivative_expression});
    })
    .catch(error => {
      failureCallback({message: error.response.data.message});
    });
}

export {derive};
