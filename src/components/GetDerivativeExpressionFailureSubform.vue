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
</style>
