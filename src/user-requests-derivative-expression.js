function derivativeExpressionRequesterConstructor(deriver, successHandler, failureHandler) {
  function request(expressionText, variable) {
    deriver.derive(
      expressionText,
      variable,
      makeSuccessfulResponseCallback(successHandler),
      makeFailureResponseCallback(failureHandler),
    );
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

  return {
    request,
    makeSuccessfulResponseCallback,
    makeFailureResponseCallback,
  };
}

export {
  derivativeExpressionRequesterConstructor,
};
