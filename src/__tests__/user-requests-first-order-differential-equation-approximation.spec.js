import {
  firstOrderDifferentialEquationApproximationRequesterConstructor,
} from '../user-requests-first-order-differential-equation-approximation.js';

import { describe, it } from 'vitest';

const sinon = require('sinon');

describe('firstOrderDifferentialEquationApproximationRequester#request', () => {
  it('emits the expected Approximate call', () => {
    const equationParameters
      = {
        expressionText: 'x-y', variableName: 'x', undeterminedFunctionName: 'y', initialValueCoordinates: [0.0, 0.1],
      };

    const approximator = { approximator() {} };
    const approximatorMock = sinon.mock(approximator);

    const successHandler = { handle() {} };
    const successHandlerMock = sinon.mock(successHandler);

    const failureHandler = { handle() {} };
    const failureHandlerMock = sinon.mock(failureHandler);

    successHandlerMock
      .expects('handle')
      .withArgs({
        message: '',
        approximatedSolution: [[0.0, 0.1]],
        showFailure: false,
        showApproximationExpressionPath: true,
      });

    failureHandlerMock
      .expects('handle')
      .withArgs({
        message: 'There was a problem.',
        approximatedSolution: [],
        showFailure: true,
        showApproximationExpressionPath: false,
      });

    const correctSuccessCallbackBuiltMatcher
      = successCallback => {
        successCallback({ approximatedSolution: [[0.0, 0.1]] });
        successHandlerMock.verify();
        return true;
      };

    const correctFailureCallbackBuiltMatcher
      = failureCallback => {
        failureCallback({ message: 'There was a problem.' });
        failureHandlerMock.verify();
        return true;
      };

    approximatorMock.expects('approximator').withArgs(
      equationParameters,
      sinon.match(correctSuccessCallbackBuiltMatcher, 'successHandler: callback of handler not built correctly'),
      sinon.match(correctFailureCallbackBuiltMatcher, 'failureHandler: callback of handler not built correctly'),
    );

    const firstOrderDifferentialEquationApproximationRequester
      = firstOrderDifferentialEquationApproximationRequesterConstructor(approximator, successHandler, failureHandler);

    firstOrderDifferentialEquationApproximationRequester.request(equationParameters);

    approximatorMock.verify();
  });
});
