<script setup>
defineProps({
  derivativeExpressionVisualizationImage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <img
    :src="'data:image/svg+xml;base64, ' + derivativeExpressionVisualizationImage"
    class="differentiation-form-img"
  />
</template>

<style scoped>
  .differentiation-form-img {
    display:inline;
    width:100%;
  }
</style>
