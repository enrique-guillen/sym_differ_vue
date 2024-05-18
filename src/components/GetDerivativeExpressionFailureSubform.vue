<script setup>
defineProps({
  getExpressionDerivativeFailedReason: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="labeled-failure">
    <label class="textarea-label" for="fail">Failure:</label>
    <textarea rows=1 class="derivative-expression-text" readonly>{{getExpressionDerivativeFailedReason}}</textarea>
  </div>
</template>

<style>
  .labeled-failure {
    margin: 1rem;
    width: 100%;
  }

  .labeled-failure textarea,
    .labeled-failure textarea:focus,
    .labeled-failure label {
    color: #ff6666;
    font-weight: bold;
  }

  .labeled-failure textarea, .labeled-failure textarea:focus {
    display: block;
    width: 100%;
  }

  .labeled-failure textarea, .labeled-failure textarea:focus {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 3px;
    border-bottom: 2px solid var(--color-border);
    font-size: 1.1rem;
  }
</style>
