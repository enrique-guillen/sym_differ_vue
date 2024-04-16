<script setup>
import SymDifferSeeGrammarReferenceHint from './SymDifferSeeGrammarReferenceHint.vue';
import GetDerivativeExpressionForm from './GetDerivativeExpressionForm.vue';
</script>

<template>
  <div class="sym-differ-home">
    <GetDerivativeExpressionForm />
    <SymDifferSeeGrammarReferenceHint />
  </div>
</template>

<style>
  .sym-differ-home {
    max-width: 1280px;
    margin: auto auto;
    padding: 2rem;
    font-weight: normal;
  }

  @media (min-width: 1024px) {
    .sym-differ-home {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
    }
  }

  .sym-differ-reference-hint {
    margin: auto 1.5rem;
  }

  form {
    margin: 1.5rem;
    font-size: 1.1rem;
  }
</style>
