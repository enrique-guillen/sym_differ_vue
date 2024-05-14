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

<style>
  form {
    width: 100%;
  }
  form .labeled-expression, form .labeled-input, form .labeled-response, form .labeled-failure {
    margin: 1rem;
    width: 100%;
  }
  form button, form button:hover {
    margin: 1.5rem;
    font-size: 1.1rem;
    border-radius: 5px;
    padding: 5px;
    font-family:
      'Segoe UI',
      Cambria,
      Inter,
      math,
      -apple-system,
      BlinkMacSystemFont,
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 3px;
    border-bottom: 2px solid var(--color-border);
    width: 35%;
    display: inline;
  }
  form button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  form label.textarea-label {
    display: block;
  }
  form .labeled-input input {
    margin-left: 1rem;
    width: 100%;
  }
  form textarea, form textarea:focus {
    display: block;
    width: 100%;
  }
  form textarea, form textarea:focus, form input, form input:focus {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 3px;
    border-bottom: 2px solid var(--color-border);
    font-size: 1.1rem;
  }
  form .labeled-failure textarea,
    form .labeled-failure textarea:focus,
    form .labeled-failure label {
    color: #ff6666;
    font-weight: bold;
  }
</style>
