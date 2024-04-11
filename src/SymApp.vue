<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import NamedToken from './components/SymDifferNamedToken.vue'

  const expressionText = ref("");
  const variable = ref("");
  const derivativeExpressionText = ref("");
  const getExpressionDerivativeFailedReason = ref("");
  const showGetExpressionDerivativeSucceeded = ref(true);
  const showGetExpressionDerivativeFailed = ref(false);

  function getExpressionDerivative() {
    axios.get(
      "http://127.0.0.1:3000/derivative_expression",
      { params: { expression: expressionText.value, variable: variable.value } }
    )
    .then(function(response) {
      derivativeExpressionText.value = response.data.derivative_expression
      showGetExpressionDerivativeFailed.value = false
      showGetExpressionDerivativeSucceeded.value = true
    })
    .catch(function(error) {
      getExpressionDerivativeFailedReason.value = error.response.data.message
      showGetExpressionDerivativeFailed.value = true
      showGetExpressionDerivativeSucceeded.value = false
    })
  }

  function resetResponseToInitialState() {
    derivativeExpressionText.value = ""
    showGetExpressionDerivativeFailed.value = false
    showGetExpressionDerivativeSucceeded.value = true
  }
</script>

<template>
  <div class="sym-differ-reference">
    <h2>Grammar reference</h2>
    <p>
      The application expects to receive a valid <NamedToken token_name="expression" />. An expression may be as simple
      as a constant or variable name, as well as complicated as a sum whose arguments are sums.
    </p>

    <p>
      The following is a reference of our expression language in Backus-Naur form. A list of words separated by |
      characters represent alternatives, [0-9] represents any number from 0 to 9, [a-zA-Z] represents any alphabetical
      character, and a + character indicates that the text is valid (and categorized in the corresponding item in the
      list) if it consists of at least 1 or more instances of the characters specified before the symbol appears.
    </p>
    <ul>
      <li>
        • <NamedToken token_name="expression" /> ::=
            <NamedToken token_name="constant" /> |
            <NamedToken token_name="variable" /> |
            <NamedToken token_name="sum" />
      </li>
      <li>
        • <NamedToken token_name="constant" /> ::= [0-9]+
      </li>
      <li>
        • <NamedToken token_name="variable" /> ::= [a-zA-Z]+
      </li>
      <li>
        • <NamedToken token_name="sum" /> ::=
            <NamedToken token_name="expression" /> + <NamedToken token_name="expression" />
      </li>
    </ul>
  </div>
  <form>
    <div class="labeled-expression">
      <label class="textarea-label" for="expression-text">Your expression:</label>
      <textarea rows=1 v-model="expressionText" @focus="resetResponseToInitialState"></textarea>
    </div>

    <div class="labeled-input">
      <label class="input-label" for="variable">Your variable:</label>
      <input v-model="variable" @focus="resetResponseToInitialState"></input>
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
  .sym-differ-reference {
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
    margin: 1.5rem;
  }
  .sym-differ-reference h2 {
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
  }
  .sym-differ-reference ul {
    list-style-type: none;
    font-size: 1.1rem;
  }
  .sym-differ-reference p {
    margin-bottom: 1rem;
  }
  form {
    margin: 1.5rem;
    font-size: 1.1rem;
  }
  form .labeled-expression, form .labeled-input, form .labeled-response, form .labeled-failure {
    margin: 1rem;
    width: 100%;
  }
  form .labeled-failure {
    margin: 1rem;
    width: 100%;
    color: #ff6666;
    font-weight: bold;
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
