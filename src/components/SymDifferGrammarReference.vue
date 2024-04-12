<script setup>
import NamedToken from './SymDifferNamedToken.vue';
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
      characters represent alternatives, [0-9] represents any number from 0 to 9, [a-zA-Z] represents any alphabetical
      character, and a + character indicates that the text is valid (and categorized in the corresponding item in the
      list) if it consists of at least 1 or more instances of the characters specified before the symbol appears.
    </p>
    <ul>
      <li>
        • <NamedToken tokenName="expression" /> ::=
            <NamedToken tokenName="constant" /> |
            <NamedToken tokenName="variable" /> |
            <NamedToken tokenName="sum" />
      </li>
      <li>
        • <NamedToken tokenName="constant" /> ::= [0-9]+
      </li>
      <li>
        • <NamedToken tokenName="variable" /> ::= [a-zA-Z]+
      </li>
      <li>
        • <NamedToken tokenName="sum" /> ::=
            <NamedToken tokenName="expression" /> + <NamedToken tokenName="expression" />
      </li>
    </ul>
  </div>
</template>
