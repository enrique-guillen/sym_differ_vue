<script setup>
</script>

<template>
  <form>
    <h2>First Order Differential Equation Approximation</h2>

    <p>
      This feature calculates the approximate values of a function whose curve (actual values) is defined by a
      first-order differential equation in the following form:
    </p>

    <pre>f'(y, dt) = f(x, y)</pre>

    <p>
      The expression field receives any expression that's valid under the rules defined in the
      <RouterLink to="/grammarreference">grammar reference</RouterLink> document.
    </p>

    <p>
      The variables of the expression don't need to be named "y" and "t." There are fields where you specify what the
      actual variables names in your provided expression are. One of the fields is the variable whose value is the
      function we're trying to approximate, whereas the other is the parameter to that function; indicating which names
      both fields correspond to lead to different results, so be mindful of the distinction! The variable field must be
      a valid variable under the definition of variable given in the aforementioned grammar reference document.
    </p>
  </form>
</template>

<style>
  form h2 {
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
  }

  form pre {
    text-align: center;
  }
</style>
