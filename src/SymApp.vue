<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="sym-differ-current-component">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
.sym-differ-current-component-enter-active {
  transition: opacity 1.5s ease;
}

.sym-differ-current-component-enter-from {
  opacity: 0;
}

.sym-differ-current-component-leave-from {
  opacity: 0;
}
</style>
