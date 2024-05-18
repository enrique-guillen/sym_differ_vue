<script setup>
const expressionText = defineModel();
</script>

<template>
  <div class="labeled-expression">
    <label class="textarea-label" for="expression-text">Your expression:</label>
    <textarea rows=1 v-model="expressionText" @focus="$emit('focus')"></textarea>
  </div>
</template>

<style>
  .labeled-expression {
    margin: 1rem;
    width: 100%;
  }
  .labeled-expression label.textarea-label {
    display: block;
  }
  .labeled-expression textarea, .labeled-expression textarea:focus {
    display: block;
    width: 100%;
  }
  .labeled-expression textarea,
    .labeled-expression textarea:focus,
    .labeled-expression input,
    .labeled-expression input:focus {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 3px;
    border-bottom: 2px solid var(--color-border);
    font-size: 1.1rem;
  }
</style>
