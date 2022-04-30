<template>
  <label class="inline-block mt-7 mb-1 text-xs" :for="props.for">
    {{ props.label }}
    <span v-if="props.required" class="text-accent">*</span>
  </label>
</template>
<script setup lang="ts">
interface Props {
  label: string;
  for?: string;
  required?: boolean;
}
const props = defineProps<Props>();
</script>
