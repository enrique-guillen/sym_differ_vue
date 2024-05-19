<script setup>
const inputValue = defineModel();

defineEmits(['focus']);

defineProps({
  inputLabelText: { type: String, required: true },
  inputClass: { type: String, required: false },
});
</script>

<template>
  <div class="labeled-input">
    <label class="input-label" for="inputValue">{{ inputLabelText }}</label>
    <input v-model="inputValue" @focus="$emit('focus')" :class="inputClass" />
  </div>
</template>

<style>
  .labeled-input {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .labeled-input label {
    padding-right: 0.5rem;
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
