<script setup>
defineProps({
  failureReason: {
    type: String,
    required: true,
  },
  failureReasonTextareaClass: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="labeled-failure">
    <label class="textarea-label" for="fail">Failure:</label>
    <textarea :class="failureReasonTextareaClass" :value="failureReason" rows=1 readonly></textarea>
  </div>
</template>

<style>
  .labeled-failure {
    padding: 0.5rem;
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
