function constructRequestDerivativeExpression(deriver, successCallback, failureCallback) {
  return {
    request(expressionText, variable) {
      deriver.derive(expressionText, variable, successCallback, failureCallback);
    },
  };
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
  constructRequestDerivativeExpression,
  makeSuccessfulResponseCallback,
  makeFailureResponseCallback,
};
