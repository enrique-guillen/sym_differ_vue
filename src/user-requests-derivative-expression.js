module.exports = {
  userRequestsDerivativeExpression: (deriver, expressionText, variable, successCallback, failureCallback) => {
    deriver.derive(
      expressionText, variable, successCallback, failureCallback
    )
  },
  makeSuccessfulResponseCallback: (handler) => {
    return (response) => {
      handler.handle(
        {
          derivativeExpressionText: response.derivativeExpressionText,
          showGetExpressionDerivativeFailed: false,
          showGetExpressionDerivativeSucceeded: true
        }
      )
    }
  },
  makeFailureResponseCallback: (handler) => {
    return (response) => {
      handler.handle(
        {
          message: response.message,
          showGetExpressionDerivativeFailed: true,
          showGetExpressionDerivativeSucceeded: false
        }
      )
    }
  }
}
