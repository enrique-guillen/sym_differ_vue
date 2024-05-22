<script setup>
import { ref, inject } from 'vue';
import { stringToBase64 } from 'uint8array-extras';
import { initialImage } from '../initial-expression-and-derivative-expression-image.js';

import { firstOrderDifferentialEquationApproximationRequesterConstructor }
  from '../user-requests-first-order-differential-equation-approximation.js';

import LabeledTextArea from './LabeledTextArea.vue';
import LabeledInput from './LabeledInput.vue';
import BasicFailureForm from './BasicFailureForm.vue';
import FirstOrderDifferentialEquationApproximationResponse
  from './FirstOrderDifferentialEquationApproximationResponse.vue';
import DifferentiationVisualizationImage from './DifferentiationVisualizationImage.vue';

const approximator = inject('firstOrderDifferentialEquationApproximator');

const expressionText = ref('');
const undeterminedFunctionName = ref('');
const variableName = ref('');
const initialValueAbscissa = ref('');
const initialValueOrdinate = ref('');

const approximationEvaluationPath = ref([]);
const errorMessage = ref('');
const showApproximationExpressionPath = ref(false);
const showFailure = ref(false);
const differentialEquationApproximationImage = ref(stringToBase64(initialImage.trim()));

const firstOrderDifferentialEquationApproximationRequester
  = firstOrderDifferentialEquationApproximationRequesterConstructor(
    { approximator },
    { handle: updateView },
    { handle: updateView },
  );

function getExpressionApproximation() {
  firstOrderDifferentialEquationApproximationRequester.request(
    {
      expressionText: expressionText.value,
      variableName: variableName.value,
      undeterminedFunctionName: undeterminedFunctionName.value,
      initialValueCoordinates: [initialValueAbscissa.value, initialValueOrdinate.value],
    },
  );
}

function updateView(response) {
  errorMessage.value = response.message;
  approximationEvaluationPath.value = response.approximatedSolution;
  showApproximationExpressionPath.value = response.showApproximationExpressionPath;
  showFailure.value = response.showFailure;
}

function resetResponseToInitialState() {
  approximationEvaluationPath.value = [];
  showApproximationExpressionPath.value = false;
  showFailure.value = false;
}

function updateImage(response) {
  differentialEquationApproximationImage.value = stringToBase64(response.image);
}
</script>

<template>
  <form class="approximate-first-order-ode-solution">
    <h2>First Order Differential Equation Approximation</h2>

    <p>
      This feature calculates the approximate values of a function whose curve (actual values) is defined by a
      first-order differential equation in the following form:
    </p>

    <pre>f'(y, dt) = f(x, y)</pre>

    <p>
      The expression field receives any expression that's valid under the rules defined in the
      <RouterLink to="/grammarreference">grammar reference</RouterLink> document.
    </p>

    <p>
      The variables of the expression don't need to be named "y" and "t." There are fields where you specify what the
      actual variables names in your provided expression are. One of the fields is the variable whose value is the
      function we're trying to approximate, whereas the other is the parameter to that function; indicating which names
      both fields correspond to lead to different results, so be mindful of the distinction! The variable field must be
      a valid variable under the definition of variable given in the aforementioned grammar reference document.
    </p>

    <LabeledTextArea
      inputClass="expression-text"
      inputLabelText="Expression:"
      v-model="expressionText"
      @focus="resetResponseToInitialState" />

    <LabeledInput
      inputLabelText="Undetermined function name (y): "
      v-model="undeterminedFunctionName"
      @focus="resetResponseToInitialState" />

    <LabeledInput
      inputLabelText="Variable name (t): "
      v-model="variableName"
      @focus="resetResponseToInitialState" />

    <LabeledInput
      inputLabelText="Initial value coordinate (x, y) abscissa:"
      v-model="initialValueAbscissa"
      @focus="resetResponseToInitialState" />

    <LabeledInput
      inputLabelText="Initial value coordinate (x, y) ordinate:"
      v-model="initialValueOrdinate"
      @focus="resetResponseToInitialState" />

    <div class="button-container">
      <button class="approximate-button" type="button" @click="getExpressionApproximation">Approximate</button>
      <button class="clear-button" type="button" @click="resetResponseToInitialState">Clear</button>
    </div>

    <BasicFailureForm
      failureReasonTextareaClass="first-order-differential-equation-approximation-error"
      v-if="showFailure"
      :failureReason="errorMessage" />

    <template v-if="showApproximationExpressionPath && approximationEvaluationPath.length > 0">
      <FirstOrderDifferentialEquationApproximationResponse
        :expressionText="expressionText"
        :variableName="variableName"
        :undeterminedFunctionName="undeterminedFunctionName"
        :approximatedEvaluationPath="approximationEvaluationPath" />

      <DifferentiationVisualizationImage
        :derivativeExpressionVisualizationImage="differentialEquationApproximationImage"
        imgClassLabel="differential-equation-approximation-img" />
    </template>
  </form>
</template>

<style scoped>
  .approximate-first-order-ode-solution {
    width: 100%;
  }

  .approximate-first-order-ode-solution h2 {
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
  }

  .approximate-first-order-ode-solution pre {
    text-align: center;
  }

  .approximate-first-order-ode-solution .button-container {
    text-align: center;
  }

  .approximate-first-order-ode-solution button, .approximate-first-order-ode-solution button:hover {
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

  .approximate-first-order-ode-solution button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
</style>
