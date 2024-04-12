<script setup>
import { inject, ref } from 'vue';

import {
  constructRequestDerivativeExpression,
  makeSuccessfulResponseCallback,
  makeFailureResponseCallback,
} from '../user-requests-derivative-expression.js';

const derive = inject('derive');

const expressionText = ref('');
const variable = ref('');
const derivativeExpressionText = ref('');
const getExpressionDerivativeFailedReason = ref('');
const showGetExpressionDerivativeSucceeded = ref(true);
const showGetExpressionDerivativeFailed = ref(false);

const derivativeExpressionRequester = constructRequestDerivativeExpression(
  { derive },
  makeSuccessfulResponseCallback({ handle: setExpressionDerivativeResponse }),
  makeFailureResponseCallback({ handle: setExpressionDerivativeError }),
);

function getExpressionDerivative() {
  derivativeExpressionRequester.request(expressionText.value, variable.value);
}

function resetResponseToInitialState() {
  derivativeExpressionText.value = '';
  showGetExpressionDerivativeFailed.value = false;
  showGetExpressionDerivativeSucceeded.value = true;
}

function setExpressionDerivativeResponse(response) {
  derivativeExpressionText.value = response.derivativeExpressionText;
  showGetExpressionDerivativeFailed.value = response.showGetExpressionDerivativeFailed;
  showGetExpressionDerivativeSucceeded.value = response.showGetExpressionDerivativeSucceeded;
}

function setExpressionDerivativeError(error) {
  getExpressionDerivativeFailedReason.value = error.message;
  showGetExpressionDerivativeFailed.value = error.showGetExpressionDerivativeFailed;
  showGetExpressionDerivativeSucceeded.value = error.showGetExpressionDerivativeSucceeded;
}
</script>

<template>
  <form>
    <div class="labeled-expression">
      <label class="textarea-label" for="expression-text">Your expression:</label>
      <textarea rows=1 v-model="expressionText" @focus="resetResponseToInitialState"></textarea>
    </div>

    <div class="labeled-input">
      <label class="input-label" for="variable">Your variable:</label>
      <input v-model="variable" @focus="resetResponseToInitialState" />
    </div>

    <button class="derive-button" type="button" @click="getExpressionDerivative">Derive</button>
    <button class="clear-button" type="button" @click="resetResponseToInitialState">Clear</button>

    <div class="labeled-response" v-if="showGetExpressionDerivativeSucceeded">
      <label class="textarea-label" for="derivative-expression-text">Response:</label>
      <textarea rows=1 v-model="derivativeExpressionText" class="derivative-expression-text" readonly></textarea>
    </div>

    <div class="labeled-failure" v-if="showGetExpressionDerivativeFailed">
      <label class="textarea-label" for="fail">Failure:</label>
      <textarea rows=1 v-model="getExpressionDerivativeFailedReason" class="derivative-expression-text" readonly>
      </textarea>
    </div>
  </form>
</template>
