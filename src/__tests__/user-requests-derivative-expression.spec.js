import {
  userRequestsDerivativeExpression,
  makeSuccessfulResponseCallback,
  makeFailureResponseCallback
} from '../user-requests-derivative-expression.js'

import { describe, it, expect } from 'vitest'

var sinon = require("sinon")

describe('userRequestsDerivativeExpression', () => {
  it('emits the expected Derive call', () => {
    var deriver = { derive: function () {} }
    var deriverMock = sinon.mock(deriver)
    var successCallback = sinon.stub()
    var failureCallback = sinon.stub()

    deriverMock.expects("derive").withArgs("x+x+x", "x", successCallback, failureCallback)

    userRequestsDerivativeExpression(deriver, "x+x+x", "x", successCallback, failureCallback)

    deriverMock.verify()
  })
})

describe('makeSuccessfulResponseCallback', () => {
  it('generates a handler function setting the expected attributes', () => {
    var successHandler = { handle: function () {} }
    var successHandlerMock = sinon.mock(successHandler)

    successHandlerMock
      .expects("handle")
      .withArgs({
        derivativeExpressionText: "3",
        showGetExpressionDerivativeFailed: false,
        showGetExpressionDerivativeSucceeded: true
      })

    makeSuccessfulResponseCallback(successHandler)({ derivativeExpressionText: "3" })
    successHandlerMock.verify()
  })
})

describe('makeFailureResponseCallback', () => {
  it('generates a handler function setting the expected attributes', () => {
    var failureHandler = { handle: function () {} }
    var failureHandlerMock = sinon.mock(failureHandler)

    failureHandlerMock
      .expects("handle")
      .withArgs({
        message: "invalid_syntax_error",
        showGetExpressionDerivativeFailed: true,
        showGetExpressionDerivativeSucceeded: false
      })

    makeFailureResponseCallback(failureHandler)({ message: "invalid_syntax_error" })
    failureHandlerMock.verify()
  })
})
