<script lang="ts" setup>
const emit = defineEmits(["close", "open"]);

const props = defineProps<{
  isDropOpened: boolean;
}>();
</script>

<template>
  <div class="relative" @click="$emit('open')" v-click-outside="() => (emit('close'))">
    <slot name="wrap" />

    <TransitionExpand>
      <div
        v-if="isDropOpened"
        class="absolute top-8 bg-black p-4 text-nowrap rounded-xl b flex flex-col z-10 -left-5"
      >
        <slot name="drop" />
      </div>
    </TransitionExpand>
  </div>
</template>
