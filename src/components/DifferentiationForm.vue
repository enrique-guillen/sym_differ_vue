<script setup>
import { inject, ref } from 'vue';
import { stringToBase64 } from 'uint8array-extras';

import { derivativeExpressionRequesterConstructor } from '../user-requests-derivative-expression.js';
import { expressionAndDerivativeExpressionImageRequesterConstructor } from '../user-requests-expression-and-derivative-expression-image.js';
import { initialImage } from '../initial-expression-and-derivative-expression-image.js';

import LabeledTextArea from './LabeledTextArea.vue';
import LabeledInput from './LabeledInput.vue';
import DifferentiationSuccessResponse from './DifferentiationSuccessResponse.vue';
import BasicFailureForm from './BasicFailureForm.vue';
import DifferentiationVisualizationImage from './DifferentiationVisualizationImage.vue';

const derive = inject('derive');
const imager = inject('imager');

const expressionText = ref('');
const variable = ref('');
const derivativeExpressionText = ref('');
const getExpressionDerivativeFailedReason = ref('');
const showGetExpressionDerivativeSucceeded = ref(true);
const showGetExpressionDerivativeFailed = ref(false);
const expressionAndDerivativeExpressionImage = ref(stringToBase64(initialImage.trim()));

const derivativeExpressionRequester = derivativeExpressionRequesterConstructor(
  { derive },
  { handle: updateView },
  { handle: updateView },
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

function updateView(response) {
  getExpressionDerivativeFailedReason.value = response.message;
  derivativeExpressionText.value = response.derivativeExpressionText;
  showGetExpressionDerivativeFailed.value = response.showGetExpressionDerivativeFailed;
  showGetExpressionDerivativeSucceeded.value = response.showGetExpressionDerivativeSucceeded;
}

function setExpressionAndExpressionDerivativeImage(response) {
  expressionAndDerivativeExpressionImage.value = stringToBase64(response.image);
}
</script>

<template>
  <form class="derive-expression-form">
    <h2>Differentiation</h2>

    <p>
      The expression field receives any expression that's valid under the rules defined in the
      <RouterLink to="/grammarreference">grammar reference</RouterLink> document. The variable field must be a valid
      variable under the definition of variable given in the aforementioned document.
    </p>

    <p>
      (For the purposes of generating the graphs of the resulting functions, the functions are sampled at a fixed step
      size of 0.125, and an attempt is made to find discontinuities in each gap where the function was sampled; the
      drawn curve will have less accurate lines where the function changes rapidly. A future feature will allow the step
      size to be increased.)
    </p>

    <LabeledTextArea
      inputLabelText="Your expression:"
      v-model="expressionText"
      @focus="resetResponseToInitialState" />

    <LabeledInput
      inputLabelText="Your variable: "
      v-model="variable"
      @focus="resetResponseToInitialState" />

    <div class="button-container">
      <button class="derive-button" type="button" @click="getExpressionDerivative">Derive</button>
      <button class="clear-button" type="button" @click="resetResponseToInitialState">Clear</button>
    </div>

    <DifferentiationSuccessResponse
      v-if="showGetExpressionDerivativeSucceeded"
      :derivativeExpressionText="derivativeExpressionText" />

    <BasicFailureForm
      failureReasonTextareaClass="derivative-expression-text"
      v-if="showGetExpressionDerivativeFailed"
      :failureReason="getExpressionDerivativeFailedReason" />

    <DifferentiationVisualizationImage
      imgClassLabel="differentiation-form-img"
      :derivativeExpressionVisualizationImage="expressionAndDerivativeExpressionImage" />
  </form>
</template>

<style scoped>
  .derive-expression-form {
    width: 100%;
  }

  .derive-expression-form h2 {
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
  }

  .derive-expression-form .button-container {
    text-align: center;
  }

  .derive-expression-form button, .derive-expression-form button:hover {
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

  .derive-expression-form button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
</style>
