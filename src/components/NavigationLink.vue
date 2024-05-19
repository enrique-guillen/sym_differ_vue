<script setup>
defineProps({
  target: { type: String, required: true },
  text: { type: String, required: true },
});
</script>

<template scoped>
  <li class="navigation-link">
    <RouterLink :to="target">
      {{text}}
    </RouterLink>
  </li>
</template>

<style>
  li.navigation-link {
    padding: 0.25rem;
    color: #999999;
    font-weight: 700;
    list-style-type: none;
  }

  .navigation-link a {
    padding: 0.25rem;
    color: #999999;
    font-weight: 700;
    list-style-type: none;
  }
</style>
