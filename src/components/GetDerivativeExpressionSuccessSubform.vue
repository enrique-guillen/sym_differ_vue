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
    <textarea class="derivative-expression-text" :value="derivativeExpressionText" rows=1 readonly>
    </textarea>
  </div>
</template>

<style>
  .labeled-response {
    padding: 0.5rem;
    width: 100%;
  }
  .labeled-response textarea, .labeled-response textarea:focus {
    display: block;
    width: 100%;
  }
  .labeled-response textarea, .labeled-response textarea:focus {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 3px;
    border-bottom: 2px solid var(--color-border);
    font-size: 1.1rem;
  }
</style>
