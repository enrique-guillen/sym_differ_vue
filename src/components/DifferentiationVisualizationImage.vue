<script setup>
defineProps({
  derivativeExpressionVisualizationImage: {
    type: String,
    required: true,
  },
  imgClassLabel: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <img
    :src="'data:image/svg+xml;base64, ' + derivativeExpressionVisualizationImage"
    :class="imgClassLabel"
  />
</template>

<style scoped>
  img {
    display:block;
    width:100%;
  }
</style>
