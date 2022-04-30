<template>
  <button class="w-8 h-8 bg-accent" @click="$emit('update')">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 mx-auto"
      :class="`${props.value && 'rotate-180'}`"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{ value: boolean }>();
</script>
