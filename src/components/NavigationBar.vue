<script setup> import NavigationLink from './NavigationLink.vue';
</script>

<template>
  <div class="sym-differ-nav">
    <h1>SymDiffer</h1>
    <ul>
      <NavigationLink target="/differentiation" text="Differentiation" />

      <NavigationLink target="/first_order_de_approximation_form"
                      text="Differential Equations: 1st-Order Approximation" />

      <NavigationLink target="/grammarreference" text="Grammar reference" />
    </ul>
  </div>
</template>

<style scoped>
  .sym-differ-nav {
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 1rem;
    padding: 1.5rem;
  }

  .sym-differ-nav h1 {
    margin: 0;
    padding: 0;
    color: #336699;
    font-weight: 800;
  }

  .sym-differ-nav ul {
    padding: 0;
  }

  @media (min-width: 1024px) {
    .sym-differ-nav {
      border-bottom: none;
      border-right: 1px solid var(--color-border);
    }
  }
</style>
