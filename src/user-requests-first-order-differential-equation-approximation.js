function firstOrderDifferentialEquationApproximationRequesterConstructor(approximator, successHandler, failureHandler) {
  function request(equationParameters) {
    approximator.approximator(
      equationParameters,
      makeSuccessfulResponseCallback(successHandler),
      makeFailureResponseCallback(failureHandler),
    );
  }

  function makeSuccessfulResponseCallback(handler) {
    return response => {
      handler.handle(
        {
          approximatedSolution: response.approximatedSolution,
          showApproximationExpressionPath: true,
          showFailure: false,
        },
      );
    };
  }

  function makeFailureResponseCallback(handler) {
    return response => {
      handler.handle(
        {
          message: response.message,
          showApproximationExpressionPath: false,
          showFailure: true,
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
  firstOrderDifferentialEquationApproximationRequesterConstructor,
};
