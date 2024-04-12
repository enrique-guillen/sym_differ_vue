<script setup>
defineProps({
  token_name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  &lt;<span class="reference-token-name">{{ token_name }}</span>&gt;
</template>

<style>
  .reference-token-name {
    color: #3333ff;
    font-weight: 600;
  }
</style>
