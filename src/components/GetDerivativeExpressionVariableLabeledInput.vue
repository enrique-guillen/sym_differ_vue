<script setup>
const variable = defineModel();
</script>

<template>
  <div class="labeled-input">
    <label class="input-label" for="variable">Your variable: </label>
    <input v-model="variable" @focus="$emit('focus')" />
  </div>
</template>

<style>
  .labeled-input {
    width: 100%;
    padding-left: 1rem;
    display: grid;
    grid-template-columns: 7rem 1fr;
  }
  .labeled-input input, .labeled-input input:focus {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 3px;
    border-bottom: 2px solid var(--color-border);
    font-size: 1.1rem;
  }
</style>
