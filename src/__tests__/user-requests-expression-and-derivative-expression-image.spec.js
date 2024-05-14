import {
  expressionAndDerivativeExpressionImageRequesterConstructor,
} from '../user-requests-expression-and-derivative-expression-image.js';

import { describe, it } from 'vitest';

const sinon = require('sinon');

describe('expressionAndDerivativeExpressionImageRequester#request', () => {
  it('emits the expected Imager.generate call', () => {
    const imager = { generateImage() {} };
    const imagerMock = sinon.mock(imager);

    const successHandler = { handle() {} };
    const successHandlerMock = sinon.mock(successHandler);

    successHandlerMock
      .expects('handle')
      .withArgs({ image: '<svg>...</svg>' });

    const correctSuccessCallbackBuiltMatcher
      = successCallback => {
        successCallback('<svg>...</svg>');
        successHandlerMock.verify();
        return true;
      };

    imagerMock.expects('generateImage').withArgs(
      'x+x+x',
      'x',
      sinon.match(correctSuccessCallbackBuiltMatcher, 'successHandler: callback of handler not built correctly',),
    );

    const expressionAndDerivativeExpressionImageRequester
      = expressionAndDerivativeExpressionImageRequesterConstructor(imager, successHandler);

    expressionAndDerivativeExpressionImageRequester.request('x+x+x', 'x');

    imagerMock.verify();
  });
});
