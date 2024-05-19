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
        message: '',
        showGetExpressionDerivativeFailed: false,
        showGetExpressionDerivativeSucceeded: true,
      });

    failureHandlerMock
      .expects('handle')
      .withArgs({
        derivativeExpressionText: '',
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
      sinon.match(correctSuccessCallbackBuiltMatcher, 'successHandler: callback of handler not built correctly'),
      sinon.match(correctFailureCallbackBuiltMatcher, 'failureHandler: callback of handler not built correctly'),
    );

    const derivativeExpressionRequester
      = derivativeExpressionRequesterConstructor(deriver, successHandler, failureHandler);

    derivativeExpressionRequester.request('x+x+x', 'x');

    deriverMock.verify();
  });
});
