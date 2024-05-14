function expressionAndDerivativeExpressionImageRequesterConstructor(imager, successHandler) {
  function request(expressionText, variable) {
    imager.generateImage(
      expressionText,
      variable,
      makeSuccessfulResponseCallback(successHandler)
    )
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

export { expressionAndDerivativeExpressionImageRequesterConstructor }
