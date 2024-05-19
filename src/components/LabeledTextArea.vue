<script setup>
const inputtedValue = defineModel();

defineEmits(['focus']);

defineProps({
  inputLabelText: { type: String, required: true },
  inputClass: { type: String, required: false },
});
</script>

<template>
  <div class="labeled-textarea">
    <label class="textarea-label" for="value">{{ inputLabelText }}</label>
    <textarea rows=1 :class="inputClass" v-model="inputtedValue" @focus="$emit('focus')"></textarea>
  </div>
</template>

<style>
  .labeled-textarea {
    padding: 0.5rem;
    width: 100%;
  }
  .labeled-textarea label.textarea-label {
    display: block;
  }
  .labeled-textarea textarea, .labeled-textarea textarea:focus {
    display: block;
    width: 100%;
  }
  .labeled-textarea textarea, .labeled-textarea textarea:focus {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 3px;
    border-bottom: 2px solid var(--color-border);
    font-size: 1.1rem;
  }
</style>
