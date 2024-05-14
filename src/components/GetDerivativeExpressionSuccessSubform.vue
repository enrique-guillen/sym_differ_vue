<script setup>
defineProps({
  derivativeExpressionText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="labeled-response">
    <label class="textarea-label" for="derivative-expression-text">Response:</label>
    <textarea rows=1 class="derivative-expression-text" readonly>{{derivativeExpressionText}}</textarea>
  </div>
</template>

<style>
  .labeled-response {
    margin: 1rem;
    width: 100%;
  }
</style>
