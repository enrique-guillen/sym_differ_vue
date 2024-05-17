<script setup>
import { ref } from 'vue';
import NamedToken from './SymDifferNamedToken.vue';
const featureFilesLink = ref(import.meta.env.VITE_APP_FEATURE_FILE);
</script>

<template>
  <div class="sym-differ-reference">
    <h2>Grammar reference</h2>
    <p>
      The application expects to receive a valid <NamedToken tokenName="expression" />. An expression may be as simple
      as a constant or variable name, as well as complicated as a sum whose arguments are sums.
    </p>

    <p>
      The following is a reference of our expression language in Backus-Naur form. A list of words separated by |
      characters represent alternatives.
    </p>
    <ul>
      <li>
        • <NamedToken tokenName="expression" /> ::=
            <NamedToken tokenName="constant" /> |
            <NamedToken tokenName="variable" /> |
            <NamedToken tokenName="positive" /> |
            <NamedToken tokenName="negation" /> |
            <NamedToken tokenName="sum" /> |
            <NamedToken tokenName="subtraction" /> |
            <NamedToken tokenName="multiplication" /> |
            <NamedToken tokenName="sine-application" /> |
            <NamedToken tokenName="cosine-application" />
      </li>
      <li>
        • <NamedToken tokenName="constant" /> ::= [0-9]+
      </li>
      <li>
        • <NamedToken tokenName="variable" /> ::= [a-zA-Z]+
      </li>
      <li>
        • <NamedToken tokenName="positive" /> ::=
            + <NamedToken tokenName="expression" />
      </li>
      <li>
        • <NamedToken tokenName="negation" /> ::=
            - <NamedToken tokenName="expression" />
      </li>
      <li>
        • <NamedToken tokenName="sum" /> ::=
            <NamedToken tokenName="expression" /> + <NamedToken tokenName="expression" />
      </li>
      <li>
        • <NamedToken tokenName="subtraction" /> ::=
            <NamedToken tokenName="expression" /> - <NamedToken tokenName="expression" />
      </li>
      <li>
        • <NamedToken tokenName="multiplication" /> ::=
            <NamedToken tokenName="expression" /> * <NamedToken tokenName="expression" />
      </li>
      <li>
        • <NamedToken tokenName="sine-application" /> ::= sine(<NamedToken tokenName="expression" />)
      </li>
      <li>
        • <NamedToken tokenName="cosine-application" /> ::= cosine(<NamedToken tokenName="expression" />)
      </li>
    </ul>

    <p>
      [0-9]+ matches a number with 1 or more digits. [a-zA-Z]+ Matches a string with 1 or more characters.
    </p>

    <p>
      The space between operator symbols such as + and - are ignored, so feel free to add spaces and new lines as you
      see fit between parts of your expression.
    </p>

    <p>
      Refer to
      <a :href="featureFilesLink" target="_blank">the feature files</a>
      for more examples and information.
    </p>

    <p>
      Click <RouterLink to="/differentiation">here</RouterLink> to go back to the main page.
    </p>

    <h3>Examples</h3>
    <p>The expression "0" is a valid expression representing the constant 0.</p>
    <p>The expression "x" is a valid expression representing a variable named x.</p>
    <p>"sine(x)" is the trigonometric sine function applied to the given argument, the variable x.</p>
    <p>"-cosine(x * x)" is a valid expression, whose value is the negation of the trigonometric cosine function,
       applied to the square of the input x variable.</p>
  </div>
</template>

<style>
  .sym-differ-reference h2, .sym-differ-reference h3 {
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
  }
  .sym-differ-reference ul {
    list-style-type: none;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .sym-differ-reference p {
    margin-bottom: 1rem;
  }
</style>
