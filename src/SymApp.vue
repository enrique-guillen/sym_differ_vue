<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition>
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
  .sym-differ-reference {
    margin: 1.5rem;
  }
  form {
    margin: 1.5rem;
    font-size: 1.1rem;
  }
</style>
