import {
  differentialEquationApproximationIllustratorRequesterConstructor,
} from '../differential-equation-approximation-illustration-requester.js';

import { describe, it } from 'vitest';

const sinon = require('sinon');

describe('differentialEquationApproximationIllustratorRequester#request', () => {
  it('emits the expected Imager.generate call', () => {
    const illustrator = { illustrate() {} };
    const illustratorMock = sinon.mock(illustrator);

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

    illustratorMock.expects('illustrate').withArgs(
      {
        expressionText: 'y', variableName: 't', undeterminedFunctionName: 'y', initialValueCoordinates: [0, 1],
      },
      sinon.match(correctSuccessCallbackBuiltMatcher, 'successHandler: callback of handler not built correctly'),
    );

    const differentialEquationApproximationIllustratorRequester
      = differentialEquationApproximationIllustratorRequesterConstructor(illustrator, successHandler);

    differentialEquationApproximationIllustratorRequester.request(
      {
        expressionText: 'y', variableName: 't', undeterminedFunctionName: 'y', initialValueCoordinates: [0, 1],
      },
    );

    illustratorMock.verify();
  });
});
