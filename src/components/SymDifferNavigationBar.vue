<template>
  <div class="sym-differ-nav">
    <h1>SymDiffer</h1>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>

      <li><RouterLink to="/grammarreference">Grammar reference</RouterLink></li>
    </ul>
  </div>
</template>

<style>
  .sym-differ-nav {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
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

  .sym-differ-nav li {
    padding: 0.25rem;
    color: #999999;
    font-weight: 700;
    list-style-type: none;
  }

  .sym-differ-nav a {
    padding: 0.25rem;
    color: #999999;
    font-weight: 700;
    list-style-type: none;
  }

  @media (min-width: 1024px) {
    .sym-differ-nav {
      border-bottom: none;
      border-right: 1px solid var(--color-border);
    }
  }
</style>
