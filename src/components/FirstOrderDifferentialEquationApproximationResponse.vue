<script setup>
import { ref } from 'vue';

defineProps({
  expressionText: {
    type: String,
    required: true,
  },
  undeterminedFunctionName: {
    type: String,
    required: true,
  },
  variableName: {
    type: String,
    required: true,
  },
  approximatedEvaluationPath: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <table class="labeled-response">
    <caption>Approximate values for expression: {{ expressionText }}</caption>
    <thead>
      <tr>
        <th><div class="headerline">Index</div></th>
        <th>
          <div class="headerline">Abscissa</div>
          <div class="headerline">({{ variableName }})</div>
        </th>
        <th>
          <div class="headerline">Approximate Ordinate</div>
          <div class="headerline">({{ undeterminedFunctionName }})</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(evaluationPoint, index) in approximatedEvaluationPath" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ evaluationPoint.abscissa.toFixed(3) }}</td>
        <td>{{ evaluationPoint.ordinate.toFixed(3) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  .labeled-response {
    padding-top: 1rem;
    border-collapse: separate;
    border-spacing: 0px;
    background-color: #f9f9f9;

    border: 1px white solid;
    border-radius: 4px;

    margin: 0 auto;
    width: 90%;
  }

  .labeled-response caption {
    font-weight: 600;
  }

  .labeled-response th {
    text-align: center;
    background-color: #915F6D;
  }

  .labeled-response .headerline {
    color: white;
    font-weight: 600;
  }

  .labeled-response td {
    text-align: center;
  }

  .labeled-response tr:hover {
    background-color: #c0c5ec;
  }
</style>
