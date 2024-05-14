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
const expressionAndDerivativeExpressionImage = ref(
  btoa(`
<svg version="1.1"
     width="1000" height="1000"
     xmlns="http://www.w3.org/2000/svg">




  <!-- Legend  -->
    <circle cx="20" cy="20" r="5" fill="blue"/>

    <text x="40" y="30" font-size="1.5em" id="ordinate-name" font-family="Cantarell">
      Expression: Not defined
    </text>

    <circle cx="20" cy="50" r="5" fill="red"/>

    <text x="40" y="60" font-size="1.5em" id="ordinate-name" font-family="Cantarell">
      Derivative: Not defined
    </text>




  <!-- Axis names  -->
    <text x="20" y="450" font-size="1.5em" font-style="italic" id="ordinate-name" font-family="Cantarell">
      y
    </text>

    <text x="450" y="880" font-size="1.5em" font-style="italic" id="abscissa-name" font-family="Cantarell">
      Not defined
    </text>




  
    <text x="0"
          y="6.0"
          transform="translate(60, 100)">
      10.0
    </text>

    <path
      d="M 0   0.0
         L 700 0.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="76.0"
          transform="translate(60, 100)">
      8.0
    </text>

    <path
      d="M 0   70.0
         L 700 70.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="146.0"
          transform="translate(60, 100)">
      6.0
    </text>

    <path
      d="M 0   140.0
         L 700 140.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="216.0"
          transform="translate(60, 100)">
      4.0
    </text>

    <path
      d="M 0   210.0
         L 700 210.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="286.0"
          transform="translate(60, 100)">
      2.0
    </text>

    <path
      d="M 0   280.0
         L 700 280.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="356.0"
          transform="translate(60, 100)">
      0.0
    </text>

    <path
      d="M 0   350.0
         L 700 350.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="426.0"
          transform="translate(60, 100)">
      -2.0
    </text>

    <path
      d="M 0   420.0
         L 700 420.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="496.0"
          transform="translate(60, 100)">
      -4.0
    </text>

    <path
      d="M 0   490.0
         L 700 490.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="566.0"
          transform="translate(60, 100)">
      -6.0
    </text>

    <path
      d="M 0   560.0
         L 700 560.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="636.0"
          transform="translate(60, 100)">
      -8.0
    </text>

    <path
      d="M 0   630.0
         L 700 630.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="0"
          y="706.0"
          transform="translate(60, 100)">
      -10.0
    </text>

    <path
      d="M 0   700.0
         L 700 700.0"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  




  
    <text x="0.0" y="0" transform="translate(90, 820)">
      -10.0
    </text>

    <path
      d="M 0.0 0
         L 0.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="70.0" y="0" transform="translate(90, 820)">
      -8.0
    </text>

    <path
      d="M 70.0 0
         L 70.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="140.0" y="0" transform="translate(90, 820)">
      -6.0
    </text>

    <path
      d="M 140.0 0
         L 140.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="210.0" y="0" transform="translate(90, 820)">
      -4.0
    </text>

    <path
      d="M 210.0 0
         L 210.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="280.0" y="0" transform="translate(90, 820)">
      -2.0
    </text>

    <path
      d="M 280.0 0
         L 280.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="350.0" y="0" transform="translate(90, 820)">
      0.0
    </text>

    <path
      d="M 350.0 0
         L 350.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="420.0" y="0" transform="translate(90, 820)">
      2.0
    </text>

    <path
      d="M 420.0 0
         L 420.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="490.0" y="0" transform="translate(90, 820)">
      4.0
    </text>

    <path
      d="M 490.0 0
         L 490.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="560.0" y="0" transform="translate(90, 820)">
      6.0
    </text>

    <path
      d="M 560.0 0
         L 560.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="630.0" y="0" transform="translate(90, 820)">
      8.0
    </text>

    <path
      d="M 630.0 0
         L 630.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  
    <text x="700.0" y="0" transform="translate(90, 820)">
      10.0
    </text>

    <path
      d="M 700.0 0
         L 700.0 700"
      style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
      transform = "translate(100, 100)"
    />
  




  <path
    id="graph-perimeter"
    d="M 0,   0
         700, 0
         700, 700
         0,   700
         Z"
    style="
      fill:none;
      stroke:#000000;
      stroke-width:0.8985;
      stroke-linecap:butt;
      stroke-linejoin:miter;
      stroke-miterlimit:10;
      stroke-opacity:1
    "
    transform="translate(100, 100)"
  />




</svg>
`.trim())
);

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
    <h2>Differentiation</h2>

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

    <img
      :src="'data:image/svg+xml;base64, ' + expressionAndDerivativeExpressionImage"
      style="display:inline;width:100%;"
    />
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
  form .labeled-expression, form .labeled-input, form .labeled-response, form .labeled-failure {
    margin: 1rem;
    width: 100%;
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
