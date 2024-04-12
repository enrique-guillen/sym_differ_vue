function requestDerivativeExpression(deriver, expressionText, variable, successCallback, failureCallback) {
  userRequestsDerivativeExpression(
    {derive: deriver},
    expressionText,
    variable,
    makeSuccessfulResponseCallback({handle: successCallback}),
    makeFailureResponseCallback({handle: failureCallback}),
  );
}

function userRequestsDerivativeExpression(deriver, expressionText, variable, successCallback, failureCallback) {
  deriver.derive(expressionText, variable, successCallback, failureCallback);
}

function makeSuccessfulResponseCallback(handler) {
  return response => {
    handler.handle(
      {
        derivativeExpressionText: response.derivativeExpressionText,
        showGetExpressionDerivativeFailed: false,
        showGetExpressionDerivativeSucceeded: true,
      },
    );
  };
}

function makeFailureResponseCallback(handler) {
  return response => {
    handler.handle(
      {
        message: response.message,
        showGetExpressionDerivativeFailed: true,
        showGetExpressionDerivativeSucceeded: false,
      },
    );
  };
}

export {
  requestDerivativeExpression,
  userRequestsDerivativeExpression,
  makeSuccessfulResponseCallback,
  makeFailureResponseCallback,
};
