<script setup>
defineProps({
  tokenName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  &lt;<span class="reference-token-name">{{ tokenName }}</span>&gt;
</template>

<style scoped>
  .reference-token-name {
    color: #3333ff;
    font-weight: 600;
  }
</style>
