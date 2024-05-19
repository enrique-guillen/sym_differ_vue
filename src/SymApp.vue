<script setup>
import { RouterView } from 'vue-router';

import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="sym-differ-home">
    <NavigationBar/>

    <div class="sym-differ-contents">
      <RouterView v-slot="{ Component }">
        <Transition name="sym-differ-current-component">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
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

  .sym-differ-contents {
    margin: 0;
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    .sym-differ-home {
      display: grid;
      grid-template-columns: 1fr 4.5fr;
    }
    .sym-differ-contents {
      display: flex;
      place-items: center;
      margin: 0;
      padding: 1.5rem;
    }
  }
</style>
