import {
  userRequestsDerivativeExpression,
  makeSuccessfulResponseCallback,
  makeFailureResponseCallback,
} from '../user-requests-derivative-expression.js';

import {describe, it, expect} from 'vitest';

const sinon = require('sinon');

describe('userRequestsDerivativeExpression', () => {
  it('emits the expected Derive call', () => {
    const deriver = {derive() {}};
    const deriverMock = sinon.mock(deriver);
    const successCallback = sinon.stub();
    const failureCallback = sinon.stub();

    deriverMock.expects('derive').withArgs('x+x+x', 'x', successCallback, failureCallback);

    userRequestsDerivativeExpression(deriver, 'x+x+x', 'x', successCallback, failureCallback);

    deriverMock.verify();
  });
});

describe('makeSuccessfulResponseCallback', () => {
  it('generates a handler function setting the expected attributes', () => {
    const successHandler = {handle() {}};
    const successHandlerMock = sinon.mock(successHandler);

    successHandlerMock
      .expects('handle')
      .withArgs({
        derivativeExpressionText: '3',
        showGetExpressionDerivativeFailed: false,
        showGetExpressionDerivativeSucceeded: true,
      });

    makeSuccessfulResponseCallback(successHandler)({derivativeExpressionText: '3'});
    successHandlerMock.verify();
  });
});

describe('makeFailureResponseCallback', () => {
  it('generates a handler function setting the expected attributes', () => {
    const failureHandler = {handle() {}};
    const failureHandlerMock = sinon.mock(failureHandler);

    failureHandlerMock
      .expects('handle')
      .withArgs({
        message: 'invalid_syntax_error',
        showGetExpressionDerivativeFailed: true,
        showGetExpressionDerivativeSucceeded: false,
      });

    makeFailureResponseCallback(failureHandler)({message: 'invalid_syntax_error'});
    failureHandlerMock.verify();
  });
});
