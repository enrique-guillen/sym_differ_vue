<script setup>
import NamedToken from './SymDifferNamedToken.vue';
</script>

<template>
  <div class="sym-differ-reference-hint">
    <h2>Grammar reference</h2>
    <p>
      The application expects to receive a valid <NamedToken tokenName="expression" />. An expression may be as simple
      as a constant or variable name, as well as complicated as a sum whose arguments are sums.
    </p>

    <p>
      See a reference of our expression language in Backus-Naur form
      <RouterLink to="/grammarreference">here</RouterLink>.
    </p>
  </div>
</template>

<style>
  .sym-differ-reference-hint h2 {
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
  }
  .sym-differ-reference-hint ul {
    list-style-type: none;
    font-size: 1.1rem;
  }
  .sym-differ-reference-hint p {
    margin-bottom: 1rem;
  }
</style>
