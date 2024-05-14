import {
  derivativeExpressionRequesterConstructor,
} from '../user-requests-derivative-expression.js';

import { describe, it } from 'vitest';

const sinon = require('sinon');

describe('derivativeExpressionRequester#request', () => {
  it('emits the expected Derive call', () => {
    const deriver = { derive() {} };
    const deriverMock = sinon.mock(deriver);

    const successHandler = { handle() {} };
    const successHandlerMock = sinon.mock(successHandler);

    const failureHandler = { handle() {} };
    const failureHandlerMock = sinon.mock(failureHandler);

    successHandlerMock
      .expects('handle')
      .withArgs({
        derivativeExpressionText: '3',
        showGetExpressionDerivativeFailed: false,
        showGetExpressionDerivativeSucceeded: true,
      });

    failureHandlerMock
      .expects('handle')
      .withArgs({
        message: 'There was a problem.',
        showGetExpressionDerivativeFailed: true,
        showGetExpressionDerivativeSucceeded: false,
      });

    const correctSuccessCallbackBuiltMatcher
      = successCallback => {
        successCallback({ derivativeExpressionText: '3' });
        successHandlerMock.verify();
        return true;
      };

    const correctFailureCallbackBuiltMatcher
      = failureCallback => {
        failureCallback({ message: 'There was a problem.' });
        failureHandlerMock.verify();
        return true;
      };

    deriverMock.expects('derive').withArgs(
      'x+x+x',
      'x',
      sinon.match(
        correctSuccessCallbackBuiltMatcher,
        'The success handler did not receive the expected values upon invocation of the target\'s callbacks.',
      ),
      sinon.match(
        correctFailureCallbackBuiltMatcher,
        'The failure handler did not receive the expected values upon invocation of the target\'s callbacks.',
      ),
    );

    const derivativeExpressionRequester
      = derivativeExpressionRequesterConstructor(deriver, successHandler, failureHandler);

    derivativeExpressionRequester.request('x+x+x', 'x');

    deriverMock.verify();
  });
});
