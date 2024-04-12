<script setup>
import SymDifferGrammarReference from './components/SymDifferGrammarReference.vue';
import GetDerivativeExpressionForm from './components/GetDerivativeExpressionForm.vue';
</script>

<template>
  <SymDifferGrammarReference />
  <GetDerivativeExpressionForm />
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
