<script lang="ts" setup>
const isOpened = ref(false);
</script>

<template>
  <div class="b my-2 cursor-pointer">
    <div
      @click="isOpened = !isOpened"
      class="flex justify-between items-center p-5 transition"
      :class="{ 'bg-gray': isOpened }"
    >
      <slot name="title" />
      <NuxtIcon name="arrow-right-smooth" class="rotate-90" />
    </div>

    <TransitionExpand>
      <div v-if="isOpened" class="p-5">
        <slot name="content" />
      </div>
    </TransitionExpand>
  </div>
</template>
