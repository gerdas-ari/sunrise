<script lang="ts" setup>
import StepCard from "./StepCard.vue";
import stepData from "../config/stepData";
</script>

<template>
  <section class="container">
    <h2 class="text-center font-bold text-4xl mb-15">Схема работы</h2>

    <StepCard
      v-for="step in stepData"
      :key="step.title"
      :step="step.step"
      :image-src="step.imageSrc"
      :title="step.title"
      :description="step.description"
    />
  </section>
</template>
