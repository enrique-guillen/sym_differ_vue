<script setup>
import SymDifferSeeGrammarReferenceHint from './SymDifferSeeGrammarReferenceHint.vue';
import GetDerivativeExpressionForm from './GetDerivativeExpressionForm.vue';
</script>

<template>
  <div class="sym-differ-home-contents">
    <GetDerivativeExpressionForm />
    <SymDifferSeeGrammarReferenceHint />
  </div>
</template>

<style>
  .sym-differ-home-contents {
    max-width: 1280px;
    font-weight: normal;
  }

  @media (min-width: 1024px) {
    .sym-differ-home-contents {
      display: grid;
      grid-template-columns: 1fr 1fr;
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
