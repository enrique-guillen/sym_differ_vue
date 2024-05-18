<script setup>
import { inject, ref } from 'vue';
import { derivativeExpressionRequesterConstructor } from '../user-requests-derivative-expression.js';
import { expressionAndDerivativeExpressionImageRequesterConstructor } from '../user-requests-expression-and-derivative-expression-image.js';
import { initialImage } from '../initial-expression-and-derivative-expression-image.js';

import LabeledTextArea from './LabeledTextArea.vue';
import LabeledInput from './LabeledInput.vue';
import GetDerivativeExpressionSuccessSubform from './GetDerivativeExpressionSuccessSubform.vue';
import BasicFailureForm from './BasicFailureForm.vue';
import DerivativeExpressionVisualizationImage from './DerivativeExpressionVisualizationImage.vue';

const derive = inject('derive');
const imager = inject('imager');

const expressionText = ref('');
const variable = ref('');
const derivativeExpressionText = ref('');
const getExpressionDerivativeFailedReason = ref('');
const showGetExpressionDerivativeSucceeded = ref(true);
const showGetExpressionDerivativeFailed = ref(false);
const expressionAndDerivativeExpressionImage = ref(btoa(initialImage.trim()));

const derivativeExpressionRequester = derivativeExpressionRequesterConstructor(
  { derive },
  { handle: setExpressionDerivativeResponse },
  { handle: setExpressionDerivativeError },
);

const expressionAndDerivativeExpressionImageRequester = expressionAndDerivativeExpressionImageRequesterConstructor(
  { generateImage: imager },
  { handle: setExpressionAndExpressionDerivativeImage },
);

function getExpressionDerivative() {
  derivativeExpressionRequester.request(expressionText.value, variable.value);
  expressionAndDerivativeExpressionImageRequester.request(expressionText.value, variable.value);
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

function setExpressionAndExpressionDerivativeImage(response) {
  expressionAndDerivativeExpressionImage.value = btoa(response.image);
}

function setExpressionDerivativeError(error) {
  getExpressionDerivativeFailedReason.value = error.message;
  showGetExpressionDerivativeFailed.value = error.showGetExpressionDerivativeFailed;
  showGetExpressionDerivativeSucceeded.value = error.showGetExpressionDerivativeSucceeded;
}
</script>

<template>
  <form>
    <h2>Differentiation</h2>

    <p>
      The expression field receives any expression that's valid under the rules defined in the
      <RouterLink to="/grammarreference">grammar reference</RouterLink> document. The variable field must be a valid
      variable under the definition of variable given in the aforementioned document.
    </p>

    <LabeledTextArea
      inputLabelText="Your expression:"
      v-model="expressionText"
      @focus="resetResponseToInitialState" />

    <LabeledInput
      inputLabelText="Your variable: "
      v-model="variable"
      @focus="resetResponseToInitialState" />

    <button class="derive-button" type="button" @click="getExpressionDerivative">Derive</button>
    <button class="clear-button" type="button" @click="resetResponseToInitialState">Clear</button>

    <GetDerivativeExpressionSuccessSubform
      v-if="showGetExpressionDerivativeSucceeded"
      :derivativeExpressionText="derivativeExpressionText" />

    <BasicFailureForm
      v-if="showGetExpressionDerivativeFailed"
      :failureReason="getExpressionDerivativeFailedReason" />

    <DerivativeExpressionVisualizationImage
      :derivativeExpressionVisualizationImage="expressionAndDerivativeExpressionImage" />
  </form>
</template>

<style>
  form {
    width: 100%;
  }
  form h2 {
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
  }
  form button, form button:hover {
    margin: 1.5rem;
    font-size: 1.1rem;
    border-radius: 5px;
    padding: 5px;
    font-family: var(--vt-font-family);
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
</style>
