function differentialEquationApproximationIllustratorRequesterConstructor(illustrator, successHandler) {
  function request(equationParameters) {
    illustrator.illustrate(
      equationParameters,
      makeSuccessfulResponseCallback(successHandler),
    );
  }

  function makeSuccessfulResponseCallback(handler) {
    return response => {
      handler.handle(
        {
          image: response,
        },
      );
    };
  }

  return { request };
}

export { differentialEquationApproximationIllustratorRequesterConstructor };
